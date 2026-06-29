import { EventEmitter } from "node:events";
import type { Client } from "../client/client";
import type { MessageStruct } from "../struct/message";
import { Events } from "../utils/constants";

/**
 * Options for creating a MessageCollector.
 */
export interface MessageCollectorOptions {
  /** The channel ID(s) to collect messages from. */
  channelIds?: string[];
  /** The maximum number of messages to collect. */
  max?: number;
  /** The maximum duration in milliseconds before the collector ends. */
  time?: number;
  /** An idle timeout in milliseconds after which the collector ends. */
  idle?: number;
  /** A filter function to apply to incoming messages. */
  filter?: (message: MessageStruct) => boolean | Promise<boolean>;
}

/**
 * Represents a collector that collects messages based on a filter.
 * Inspired by discord.js-selfbot-v13's MessageCollector.
 *
 * @example
 * ```typescript
 * const collector = new MessageCollector(client, {
 *   channelIds: ['channel_id'],
 *   filter: (msg) => msg.content.startsWith('!'),
 *   max: 10,
 *   time: 60000,
 * });
 *
 * collector.on('collect', (message) => {
 *   console.log('Collected:', message.content);
 * });
 *
 * collector.on('end', (collected, reason) => {
 *   console.log(`Collector ended with ${collected.size} messages. Reason: ${reason}`);
 * });
 * ```
 */
export class MessageCollector extends EventEmitter {
  /** The client instance. */
  readonly client: Client;

  /** The collected messages. */
  readonly collected = new Map<string, MessageStruct>();

  /** The options for the collector. */
  readonly options: MessageCollectorOptions;

  /** Whether the collector has ended. */
  ended = false;

  /** Timer for the overall time limit. */
  private _timeout?: ReturnType<typeof setTimeout>;

  /** Timer for the idle timeout. */
  private _idleTimeout?: ReturnType<typeof setTimeout>;

  /** The reason the collector ended. */
  private _endReason?: string;

  constructor(client: Client, options: MessageCollectorOptions = {}) {
    super();
    this.client = client;
    this.options = options;

    // Bind event handlers
    this._handleMessage = this._handleMessage.bind(this);

    // Register event listeners
    this.client.on(Events.MESSAGE_CREATE, this._handleMessage);

    // Set up timers
    if (options.time) {
      this._timeout = setTimeout(() => this.stop("time"), options.time);
    }
    if (options.idle) {
      this._idleTimeout = setTimeout(() => this.stop("idle"), options.idle);
    }
  }

  /**
   * Handles incoming messages.
   * @private
   */
  private async _handleMessage(message: MessageStruct): Promise<void> {
    if (this.ended) return;

    // Filter by channel if specified
    if (this.options.channelIds?.length && !this.options.channelIds.includes(message.channelId)) {
      return;
    }

    // Apply filter
    if (this.options.filter) {
      try {
        const passes = await this.options.filter(message);
        if (!passes) return;
      } catch {
        return;
      }
    }

    // Add to collected
    this.collected.set(message.id, message);
    this.emit("collect", message);

    // Reset idle timer
    if (this.options.idle) {
      clearTimeout(this._idleTimeout);
      this._idleTimeout = setTimeout(() => this.stop("idle"), this.options.idle);
    }

    // Check max
    if (this.options.max && this.collected.size >= this.options.max) {
      this.stop("max");
    }
  }

  /**
   * Stops the collector.
   * @param reason The reason for stopping.
   */
  stop(reason?: string): void {
    if (this.ended) return;
    this.ended = true;
    this._endReason = reason ?? "user";

    // Clean up timers
    clearTimeout(this._timeout);
    clearTimeout(this._idleTimeout);

    // Remove event listener
    this.client.off(Events.MESSAGE_CREATE, this._handleMessage);

    this.emit("end", this.collected, this._endReason);
  }

  /**
   * Gets the reason the collector ended.
   */
  get endReason(): string | undefined {
    return this._endReason;
  }
}

/**
 * Convenience method to collect messages matching a filter.
 * Returns a Promise that resolves with the first matching message.
 *
 * @param client The client instance.
 * @param options Options including filter and timeout.
 * @returns A promise resolving to the first matching message, or null on timeout.
 *
 * @example
 * ```typescript
 * const msg = await awaitMessage(client, {
 *   channelIds: ['channel_id'],
 *   filter: (m) => m.content === 'confirm',
 *   time: 30000,
 * });
 * if (msg) {
 *   console.log('Got confirmation!');
 * }
 * ```
 */
export function awaitMessage(
  client: Client,
  options: MessageCollectorOptions & { time?: number } = {},
): Promise<MessageStruct | null> {
  return new Promise((resolve) => {
    const collector = new MessageCollector(client, {
      ...options,
      max: 1,
    });

    collector.on("collect", (message) => {
      resolve(message);
      collector.stop("found");
    });

    collector.on("end", () => {
      resolve(null);
    });
  });
}
