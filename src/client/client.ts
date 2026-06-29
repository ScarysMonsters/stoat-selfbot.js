import { ChannelManager, ServerManager } from "../managers";
import { UserManager } from "../managers/userManager";
import { WebhookManager } from "../managers/webhookManager";
import { ClientUser } from "../struct/clientUser";
import { BaseClient, clientOptions } from "./baseClient";
import { EventManager } from "./events/eventManager";
import { VoiceClient } from "./voiceClient";
import { WebSocketClient } from "./webSocket";
import { RelationshipManager } from "../managers/relationshipManager";
import { ServerBanManager } from "../managers/serverBanManager";
import { BotManager } from "../managers/botManager";
import { SessionManager } from "../managers/sessionManager";
import { AccountManager } from "../managers/accountManager";
import { MFAManager } from "../managers/mfaManager";

/**
 * Represents the main selfbot client for interacting with the Stoat API (discord.js style).
 *
 * @extends BaseClient
 *
 * @example
 * ```typescript
 * import { Client } from "stoat-selfbot.js";
 *
 * const selfbot = new Client({});
 *
 * selfbot.on("ready", () => {
 *   console.log("Selfbot is ready!");
 * });
 *
 * selfbot.on("messageCreate", (message) => {
 *   if (message.author?.id === selfbot.user?.id) {
 *     console.log("Received my own message:", message.content);
 *   }
 * });
 *
 * // Login with session token (get from browser localStorage)
 * selfbot.login("YOUR_SESSION_TOKEN");
 * ```
 */
export class Client extends BaseClient {
  /** The WebSocket client used for real-time communication. */
  protected readonly ws = new WebSocketClient(this);

  /** Manages the channels in the client. */
  readonly channels = new ChannelManager(this);

  /** Manages the servers in the client. */
  readonly servers = new ServerManager(this);

  /** Manages the users in the client. */
  readonly users = new UserManager(this);

  /** Manages the events in the client. */
  readonly events = new EventManager(this);

  /** Manages the webhooks in the client. */
  readonly webhooks = new WebhookManager(this);

  /** Manages the voice connections in the client. */
  readonly voice = new VoiceClient(this);

  /** Manages the user's relationships (friends, blocks, pending). */
  readonly relationships = new RelationshipManager(this);

  /** Manages server bans. */
  readonly bans = new ServerBanManager(this);

  /** Manages the authenticated user's bots. */
  readonly bots = new BotManager(this);

  /** Manages the authenticated user's sessions. */
  readonly sessions = new SessionManager(this);

  /** Manages the authenticated user's account settings. */
  readonly account = new AccountManager(this);

  /** Manages multi-factor authentication (MFA) for the authenticated user. */
  readonly mfa = new MFAManager(this);

  /** The authenticated user, or `null` if not logged in. */
  user: ClientUser | null = null;

  /** The timestamp when the client became ready, or `null` if not ready. */
  readyAt: Date | null = null;

  /**
   * Creates a new Client instance.
   * Automatically configures the client for selfbot mode (X-Session-Token).
   *
   * @param {clientOptions} [options={}] - The options for configuring the client.
   */
  constructor(options: clientOptions = {}) {
    super(options);
  }

  /**
   * Initializes the client by fetching API configuration.
   * Called automatically by login().
   * @private
   */
  async init(): Promise<void> {
    this.debug("Initializing client...");
    if (process.env.NODE_ENV === "DEV") {
      console.info(
        "Development mode enabled: displaying additional debug info.",
      );
    }
    try {
      await this.api.getConfig();
    } catch (error) {
      this.emit("error", error);
      throw error;
    }
  }

  /**
   * Gets the timestamp when the client became ready.
   *
   * @returns {number | null} The ready timestamp in milliseconds, or `null` if not ready.
   */
  get readyTimestamp(): number | null {
    return this.readyAt ? this.readyAt.getTime() : null;
  }

  /**
   * Gets the uptime of the client in milliseconds.
   *
   * @returns {number | null} The uptime in milliseconds, or `null` if the client is not ready.
   */
  get upTime(): number | null {
    return this.readyAt ? Date.now() - this.readyAt.getTime() : null;
  }

  /**
   * Gets the WebSocket ping in milliseconds.
   *
   * @returns {number} The ping in milliseconds, or 0 if not connected.
   */
  get ping(): number {
    return this.ws.ping;
  }

  /**
   * Logs the selfbot into the API using the provided session token.
   *
   * @param {string} token - The user session token (obtain from browser localStorage).
   * @returns {Promise<string>} A promise that resolves with the token when the selfbot is logged in and ready.
   * @throws {Error} Throws an error if the session token is not provided or is invalid.
   *
   * @example
   * ```typescript
   * await client.login("your-session-token-here");
   * ```
   */
  async login(token: string): Promise<string> {
    if (!token) {
      throw new Error("Session token is required. Get it from browser localStorage.");
    }

    // Validate session token format
    if (token.length < 10) {
      throw new Error("Invalid session token format. Token appears too short.");
    }

    this.token = token;

    this.debug("Logging in with session token...");
    try {
      await this.ws.connect();
    } catch (error) {
      this.debug(`Error connecting to WebSocket: ${error}`);
      throw error;
    }

    // NOTE: readyAt is now set when the READY event is received in webSocket.ts
    // (previously it was set here, which was too early)
    return token;
  }

  /**
   * Destroys the client, disconnecting it from the API and clearing its state.
   *
   * @returns {Promise<void>} A promise that resolves when the client is destroyed.
   *
   * @example
   * ```typescript
   * await client.destroy();
   * ```
   */
  async destroy(): Promise<void> {
    this.token = null;
    this.user = null;
    this.readyAt = null;
    await this.ws.destroy(true);
  }

  /**
   * Checks if the client is ready.
   *
   * @returns {boolean} `true` if the client is ready, otherwise `false`.
   *
   * @example
   * ```typescript
   * if (client.isReady()) {
   *   console.log("Client is ready!");
   * }
   * ```
   */
  isReady(): boolean {
    return this.readyAt !== null;
  }

  /**
   * Gets whether this client is a selfbot.
   * Always returns true since this is a selfbot-only package.
   *
   * @returns {boolean} Always true.
   */
  get isSelfbot(): boolean {
    return true;
  }

  // ─── Selfbot-specific convenience methods ──────────────────────────────────

  /**
   * Creates a new server.
   *
   * @param name - The name of the server.
   * @param options - Additional options for server creation.
   * @returns The created server.
   *
   * @example
   * ```typescript
   * const server = await client.createServer("My Server", {
   *   description: "A cool server",
   *   nsfw: false,
   * });
   * ```
   */
  async createServer(
    name: string,
    options?: { description?: string; nsfw?: boolean; icon?: string },
  ): Promise<import("../struct/server").Server> {
    const data: any = await this.api.post("/servers/create", {
      name,
      ...options,
    });
    // API returns { server, channels } — we need to extract and cache both
    if (data?.channels && Array.isArray(data.channels)) {
      for (const ch of data.channels) {
        this.channels._add(ch);
      }
    }
    const serverData = data?.server ?? data;
    return this.servers._add(serverData as any);
  }

  /**
   * Fetches an invite by its code.
   *
   * @param code - The invite code.
   * @returns The invite.
   */
  async fetchInvite(code: string): Promise<import("../struct/invite").Invite> {
    const { Invite } = await import("../struct/invite");
    const data = await this.api.get(`/invites/${code}`);
    return new Invite(this, data as any);
  }

  /**
   * Accepts an invite by its code.
   *
   * @param code - The invite code.
   * @returns A promise that resolves when the invite is accepted.
   */
  async acceptInvite(code: string): Promise<void> {
    await this.api.post(`/invites/${code}`);
  }

  /**
   * Deletes an invite by its code.
   *
   * @param code - The invite code.
   * @returns A promise that resolves when the invite is deleted.
   */
  async deleteInvite(code: string): Promise<void> {
    await this.api.delete(`/invites/${code}`);
  }

  /**
   * Fetches the DM channels for the current user.
   *
   * @returns Array of DM channel data.
   */
  async fetchDMs(): Promise<any[]> {
    return this.api.get("/users/dms");
  }

  /**
   * Sends a friend request to a user by username.
   *
   * @param username - The username of the user to add.
   * @returns A promise that resolves when the request is sent.
   */
  async sendFriendRequest(username: string): Promise<void> {
    await this.api.post("/users/friend", { username });
  }

  /**
   * Fetches mutual friends, servers, and groups with a user.
   *
   * @param userId - The ID of the user.
   * @returns Mutual data.
   */
  async fetchMutual(userId: string): Promise<any> {
    return this.api.get(`/users/${userId}/mutual`);
  }

  /**
   * Fetches the current user's sessions.
   *
   * @returns Array of session data.
   */
  async fetchSessions(): Promise<any[]> {
    return this.api.get("/auth/session/all");
  }

  /**
   * Fetches sync settings.
   *
   * @param keys - Array of setting keys to fetch. If not provided, fetches all.
   * @returns Sync settings data.
   */
  async fetchSettings(keys?: string[]): Promise<any> {
    return this.api.post("/sync/settings/fetch", { keys: keys ?? [] });
  }

  /**
   * Sets a sync setting.
   *
   * @param key - The setting key.
   * @param value - The setting value.
   * @returns A promise that resolves when the setting is updated.
   */
  async setSetting(key: string, value: any): Promise<void> {
    await this.api.post("/sync/settings/set", { key, value });
  }

  /**
   * Fetches unreads.
   *
   * @returns Unread data.
   */
  async fetchUnreads(): Promise<any> {
    return this.api.get("/sync/unreads");
  }
}

/** @deprecated Use Client instead */
export const client = Client;
