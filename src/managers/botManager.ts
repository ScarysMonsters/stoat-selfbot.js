import type { Client } from "../client/client";
import { Collection } from "../utils/collection";

/**
 * Represents raw bot data from the API.
 */
export interface BotData {
  id: string;
  owner: string;
  token: string;
  public: boolean;
  name?: string;
  description?: string;
  interactions_url?: string;
}

/**
 * Manages bot accounts for the authenticated user.
 * Provides methods to create, fetch, edit, and delete bots.
 *
 * @example
 * ```typescript
 * // Create a new bot
 * const bot = await client.bots.create("My Bot", { public: false });
 * console.log(`Created bot: ${bot.name} (${bot.id})`);
 *
 * // Fetch all owned bots
 * const bots = await client.bots.fetchAll();
 * console.log(`You own ${bots.size} bots`);
 *
 * // Edit a bot
 * await client.bots.edit(bot.id, { description: "A cool bot" });
 *
 * // Delete a bot
 * await client.bots.delete(bot.id);
 * ```
 */
export class BotManager {
  readonly client: Client;
  readonly cache = new Collection<string, BotData>();

  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Fetches all bots owned by the authenticated user.
   * Caches the results.
   *
   * @returns A collection of bot data keyed by bot ID.
   */
  async fetchAll(): Promise<Collection<string, BotData>> {
    const data: any = await this.client.api.get("/bots/@me");
    const bots = Array.isArray(data) ? data : [];
    this.cache.clear();
    for (const bot of bots) {
      const botData = bot as BotData;
      this.cache.set(botData.id, botData);
    }
    return this.cache;
  }

  /**
   * Creates a new bot.
   *
   * @param name - The name of the bot.
   * @param options - Additional options for bot creation.
   * @returns The created bot data.
   */
  async create(name: string, options?: { public?: boolean }): Promise<BotData> {
    const data: any = await this.client.api.post("/bots/create", {
      name,
      ...options,
    });
    const botData = data as BotData;
    this.cache.set(botData.id, botData);
    return botData;
  }

  /**
   * Fetches a specific bot by ID.
   * Caches the result.
   *
   * @param botId - The ID of the bot to fetch.
   * @returns The bot data.
   */
  async fetch(botId: string): Promise<BotData> {
    const data: any = await this.client.api.get(`/bots/${botId}`);
    const botData = data as BotData;
    this.cache.set(botData.id, botData);
    return botData;
  }

  /**
   * Edits a bot's properties.
   *
   * @param botId - The ID of the bot to edit.
   * @param options - The properties to update.
   */
  async edit(
    botId: string,
    options: {
      name?: string;
      public?: boolean;
      description?: string;
      interactions_url?: string;
    },
  ): Promise<void> {
    await this.client.api.patch(`/bots/${botId}`, options);
    // Update cache if the bot is present
    const cached = this.cache.get(botId);
    if (cached) {
      if (options.name !== undefined) cached.name = options.name;
      if (options.public !== undefined) cached.public = options.public;
      if (options.description !== undefined) cached.description = options.description;
      if (options.interactions_url !== undefined) cached.interactions_url = options.interactions_url;
    }
  }

  /**
   * Deletes a bot.
   * Removes the bot from the cache.
   *
   * @param botId - The ID of the bot to delete.
   */
  async delete(botId: string): Promise<void> {
    await this.client.api.delete(`/bots/${botId}`);
    this.cache.delete(botId);
  }

  /**
   * Fetches the invite URL for a bot.
   *
   * @param botId - The ID of the bot.
   * @returns The invite URL string.
   */
  async fetchInvite(botId: string): Promise<string> {
    const data: any = await this.client.api.get(`/bots/${botId}/invite`);
    return typeof data === "string" ? data : (data as any).url ?? String(data);
  }
}
