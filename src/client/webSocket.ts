import { ClientUser } from "../struct/clientUser";
import { Emoji } from "../struct/emoji";
import { Events, WSEvents } from "../utils/constants";
import { Client } from "./client";

/**
 * Represents the WebSocket client used for real-time communication with the Stoat API.
 */
export class WebSocketClient {
  /** The interval for sending heartbeats, in milliseconds. */
  heartbeatInterval?: ReturnType<typeof setInterval>;

  /** The timestamp of the last ping sent, in milliseconds. */
  lastPingTimestamp?: number;

  /** Whether the last pong acknowledgment was received. */
  lastPongAck = false;

  /** The WebSocket connection instance. */
  socket?: WebSocket | null;

  /** Whether the WebSocket client is connected. */
  connected = false;

  /** A promise representing the reconnecting process, or `null` if not reconnecting. */
  reconnecting: Promise<unknown> | null = null;

  /** Whether the WebSocket client is ready. */
  ready = false;

  /** The number of reconnection attempts made. */
  retryCount = 0;

  /** Maximum number of reconnection attempts before giving up. */
  private maxRetries = 10;

  /** Base delay for exponential backoff reconnection (ms). */
  private reconnectBaseDelay = 1000;

  /**
   * Creates a new WebSocketClient instance.
   *
   * @param {Client} client - The client instance.
   */
  constructor(protected readonly client: Client) {}

  /**
   * Logs a debug message.
   *
   * @param {unknown} message - The message to log.
   * @private
   */
  private debug(message: unknown): void {
    this.client.debug(`[WS] ${message}`);
  }

  /**
   * Sends data through the WebSocket connection.
   *
   * @param {unknown} data - The data to send.
   * @returns {Promise<void>} A promise that resolves when the data is sent.
   * @throws {Error} Throws an error if the WebSocket is not open.
   */
  async send(data: unknown): Promise<void> {
    if (this.reconnecting) {
      this.debug("Reconnecting, waiting to send message.");
      await this.reconnecting;
    }
    if (this.socket?.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(data));
    } else {
      this.debug("Socket is not open, cannot send message.");
      throw new Error("Socket is not open");
    }
  }

  /**
   * Handles the WebSocket connection opening.
   * Sends authentication payload immediately.
   * @private
   */
  private onOpen(): void {
    if (!this.client.token) throw new Error("Token is required");
    this.send({
      type: WSEvents.AUTHENTICATE,
      token: this.client.token,
    });
  }

  /**
   * Gets the current ping (latency) of the WebSocket connection.
   *
   * @returns {number} The ping in milliseconds, or 0 if not connected.
   */
  get ping(): number {
    if (!this.lastPingTimestamp) return 0;
    return Date.now() - this.lastPingTimestamp;
  }

  /**
   * Sets the heartbeat interval for the WebSocket connection.
   *
   * @param {number} time - The interval time in milliseconds. Use `-1` to clear the interval.
   */
  setHeartbeatTimer(time: number): void {
    this.debug(`Setting a heartbeat interval for ${time}ms.`);
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval);
      this.heartbeatInterval = undefined;
    }
    if (time !== -1) {
      this.heartbeatInterval = setInterval(() => this.sendHeartbeat(), time);
    }
  }

  /**
   * Sends a heartbeat to the server to keep the connection alive.
   */
  sendHeartbeat(): void {
    this.debug("Sending heartbeat.");

    if (!this.lastPongAck) {
      this.debug("Did not receive a pong ack.");
      if (this.client.options.ws?.reconnect) {
        this.reconnecting = this.destroy()
          .then(() => this.connect())
          .then(() => (this.reconnecting = null));
      }
    }
    const now = Date.now();
    this.send({ type: WSEvents.PING, data: now });
    this.lastPongAck = false;
    this.lastPingTimestamp = now;
  }

  /**
   * Handles WebSocket errors.
   *
   * @param {unknown} event - The error event.
   * @private
   */
  private onError(event: unknown): void {
    this.client.emit(Events.ERROR, event);
  }

  /**
   * Handles incoming WebSocket messages.
   *
   * @param {{ data: unknown }} param0 - The message event containing the data.
   * @private
   */
  private onMessage({ data }: { data: unknown }): void {
    let packet: unknown;
    try {
      packet = JSON.parse(String(data));
    } catch (err) {
      this.client.emit(Events.ERROR, err);
      return;
    }

    this.client.emit(Events.RAW, packet);

    this.onPacket(packet).catch((e) => this.client.emit(Events.ERROR, e));
  }

  /**
   * Handles the WebSocket connection closing.
   *
   * @param {{ code: number; reason: string }} event - The close event.
   * @private
   */
  private onClose(event: { code: number; reason: string }): void {
    this.debug(`Closed with reason: ${event.reason}, code: ${event.code}`);
    // Only attempt reconnect if auto-reconnect is enabled
    if (this.client.options.ws?.reconnect) {
      this.destroy(false); // false = not user-initiated, will trigger reconnect
    } else {
      this.cleanup();
    }
  }

  /**
   * Cleans up WebSocket state without reconnecting.
   * @private
   */
  private cleanup(): void {
    this.setHeartbeatTimer(-1);
    this.connected = false;
    this.ready = false;
    this.socket = null;
  }

  /**
   * Handles incoming WebSocket packets.
   *
   * @param {any} packet - The packet data.
   * @private
   */
  private async onPacket(packet: any) {
    if (!packet) {
      this.debug(`Received broken packet: '${packet}'.`);
      return;
    }

    switch (packet.type) {
      case WSEvents.BULK:
        await Promise.all(packet.v.map((p: unknown) => this.onPacket(p)));
        break;
      case WSEvents.AUTHENTICATED:
        this.connected = true;
        this.retryCount = 0;
        this.debug(`Successfully authenticated.`);
        break;
      case WSEvents.PONG:
        this.debug(`Received a heartbeat.`);
        this.lastPongAck = true;
        break;
      case WSEvents.ERROR:
        this.client.emit(Events.ERROR, packet.error);
        break;
      case WSEvents.READY: {
        this.lastPongAck = true;

        const promises: Promise<unknown>[] = [];

        for (const user of packet.users) {
          if (user.relationship === "User" && !this.client.user) {
            this.client.user = new ClientUser(this.client, user);
          } else {
            this.client.users._add(user);
          }
        }

        // Cache relationships from the self user's relations array
        if (this.client.user?.relations?.length) {
          for (const rel of this.client.user.relations) {
            this.client.relationships._add(rel);
          }
        }

        for (const member of packet.members) {
          this.client.servers.cache
            .get(member._id.server)
            ?.members._add(member);
        }

        for (const emoji of packet.emojis) {
          this.client.servers.cache
            .get(emoji.parent.id)
            ?.emojis._add(emoji);
        }

        for (const channel of packet.channels) {
          this.client.channels._add(channel);
        }

        for (const server of packet.servers) {
          const s = this.client.servers._add(server);
        }

        this.setHeartbeatTimer(
          this.client.options.ws?.heartbeatInterval ?? 30000,
        );

        for (const voice_state of packet.voice_states) {
          const channel = this.client.channels.cache.get(voice_state.id);
          for (const participant of voice_state.participants) {
            channel?.voice?.set(participant.id, participant);
          }
        }

        this.ready = true;
        // FIX: Set readyAt when READY event is processed, not on connect
        this.client.readyAt = new Date();

        this.client.emit(Events.READY, this.client);

        // Fetch members AFTER emitting ready, so the client isn't blocked
        if (this.client.options.fetchMembers) {
          const memberPromises: Promise<unknown>[] = [];
          for (const server of packet.servers) {
            const s = this.client.servers.cache.get(server._id);
            if (s) {
              memberPromises.push(s.members.fetch().catch((err: any) => {
                this.debug(`Failed to fetch members for server ${s.id}: ${err}`);
              }));
            }
          }
          // Don't await — let it fetch in background
          Promise.all(memberPromises).then(() => {
            this.debug("All member fetches completed.");
          });
        }
        break;
      }
      default: {
        const action = this.client.events.get(packet.type);
        if (action) {
          await action.handle(packet);
        } else {
          this.debug(`Received unknown packet "${packet.type}"`);
        }

        break;
      }
    }
  }

  /**
   * Connects to the WebSocket server.
   *
   * @returns {Promise<this>} A promise that resolves when the connection is established and authenticated.
   */
  connect(): Promise<this> {
    this.retryCount = this.retryCount + 1;
    if (this.retryCount > this.maxRetries) {
      this.debug("Max retry attempts reached");
      return Promise.reject(
        new Error(
          "Max retry attempts reached on WS connection, try again later.",
        ),
      );
    }

    return new Promise((resolve, reject) => {
      if (this.socket?.readyState === WebSocket.OPEN && this.ready) {
        return resolve(this);
      }

      if (typeof this.client.options === "undefined") {
        return reject(new Error("MISSING_CONFIGURATION_SYNC"));
      }

      if (typeof this.client.token !== "string") {
        return reject(new Error("INVALID_TOKEN"));
      }

      // Initialize (fetch API config) before connecting
      this.client.init().then(() => {
        if (!this.client.options.ws?.instanceURL) {
          return reject(new Error("WebSocket instance URL not set."));
        }

        // Always create a new WebSocket to avoid reuse issues
        const ws = new WebSocket(this.client.options.ws.instanceURL);
        this.socket = ws;

        ws.onopen = () => {
          this.onOpen();
        };
        ws.onmessage = this.onMessage.bind(this);
        ws.onerror = this.onError.bind(this);
        ws.onclose = this.onClose.bind(this);

        // Wait for ready event to resolve
        const readyHandler = () => {
          this.client.off(Events.READY, readyHandler);
          clearTimeout(timeout);
          resolve(this);
        };

        this.client.once(Events.READY, readyHandler);

        // Timeout after 30 seconds
        const timeout = setTimeout(() => {
          this.client.off(Events.READY, readyHandler);
          reject(new Error("Connection timed out while waiting for READY event"));
        }, 30000);
      }).catch(reject);
    });
  }

  /**
   * Destroys the WebSocket connection and optionally triggers reconnect.
   *
   * @param {boolean} isUserInitiated - Whether the disconnect was initiated by the user.
   * @returns {Promise<void>} A promise that resolves when the connection is destroyed.
   */
  destroy(isUserInitiated?: boolean): Promise<void> {
    return new Promise((resolve) => {
      this.setHeartbeatTimer(-1);
      this.connected = false;
      this.ready = false;

      if (this.socket?.readyState === WebSocket.OPEN) {
        this.socket.addEventListener("close", () => {
          this.socket = null;
          resolve();
        }, { once: true });
        this.socket.close();
      } else {
        this.socket = null;
        resolve();
      }

      // Schedule reconnect if not user-initiated and auto-reconnect is enabled
      // FIX: Only schedule reconnect once, not twice (was firing both inside close handler and outside)
      if (!isUserInitiated && this.client.options.ws?.reconnect) {
        const delay = this.reconnectBaseDelay * Math.pow(2, Math.min(this.retryCount, 5));
        this.debug(`Reconnecting in ${delay}ms (attempt ${this.retryCount})`);
        setTimeout(() => this.connect(), delay);
      }
    });
  }

  // ─── Client → Server event helpers ──────────────────────────────────────

  /**
   * Sends a BeginTyping event to indicate the user is typing in a channel.
   * @param channelId The channel ID.
   */
  beginTyping(channelId: string): void {
    this.send({ type: "BeginTyping", channel: channelId });
  }

  /**
   * Sends an EndTyping event to indicate the user stopped typing in a channel.
   * @param channelId The channel ID.
   */
  endTyping(channelId: string): void {
    this.send({ type: "EndTyping", channel: channelId });
  }

  /**
   * Subscribes to UserUpdate events for a server.
   * Required to receive user updates in servers.
   * @param serverId The server ID to subscribe to.
   */
  subscribe(serverId: string): void {
    this.send({ type: "Subscribe", server_id: serverId });
  }
}
