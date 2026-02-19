import { ChannelManager, ServerManager } from "../managers";
import { UserManager } from "../managers/userManager";
import { WebhookManager } from "../managers/webhookManager";
import { ClientUser } from "../struct/clientUser";
import { BaseClient, clientOptions } from "./baseClient";
import { EventManager } from "./events/eventManager";
import { VoiceClient } from "./voiceClient";
import { WebSocketClient } from "./webSocket";

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
   * Initializes the client.
   * @private
   */
  async init(): Promise<void> {
    this.debug("Initializing client...");
    if (process.env.NODE_ENV === "DEV") {
      console.info(
        "Development mode enabled: displaying additional debug info.",
      );
    }
    await this.api.getConfig();
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
   * Logs the selfbot into the API using the provided session token.
   *
   * @param {string} token - The user session token (obtain from browser localStorage).
   * @returns {Promise<void>} A promise that resolves when the selfbot is logged in.
   * @throws {Error} Throws an error if the session token is not provided or is invalid.
   *
   * @example
   * ```typescript
   * await client.login("your-session-token-here");
   * ```
   */
  async login(token: string): Promise<void> {
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

    this.readyAt = new Date();
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
}

/** @deprecated Use Client instead */
export const client = Client;
