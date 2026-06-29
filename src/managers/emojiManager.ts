import { BaseManager } from "./baseManager";
import { Emoji } from "../struct/emoji";
import type { Client } from "../client/client";

/**
 * Manages emojis for a server.
 *
 * @extends BaseManager
 */
export class EmojiManager extends BaseManager<Emoji, any> {
  holds = Emoji;
  private readonly serverId: string;

  constructor(client: Client, serverId: string) {
    super(client);
    this.serverId = serverId;
  }

  /**
   * Fetches all emojis for this server.
   *
   * GET /servers/{serverId}/emojis
   * @returns A promise that resolves with a map of emojis.
   */
  async fetchAll(): Promise<Map<string, Emoji>> {
    const data: any = await this.client.api.get(
      `/servers/${this.serverId}/emojis`,
    );
    const emojis = Array.isArray(data) ? data : [];
    for (const raw of emojis) {
      this._add(raw);
    }
    return this.cache;
  }

  /**
   * Creates a new emoji in this server.
   * Uploads the image to CDN first, then creates the emoji via API.
   *
   * @param name The name of the emoji.
   * @param image The image data (Buffer or string).
   * @param options Additional options for the emoji.
   * @returns A promise that resolves with the created emoji.
   */
  async create(
    name: string,
    image: Buffer | string,
    options?: { nsfw?: boolean },
  ): Promise<Emoji> {
    // Upload the image to CDN first
    const uploadResult = await this.client.cdn.post<{ id: string }>(
      "/emojis",
      { file: image, name } as any,
    );
    const emojiId = uploadResult.id;

    // Create the emoji via API
    await this.client.api.put(`/custom/emoji/${emojiId}`, {
      name,
      parent: { type: "Server", id: this.serverId },
      nsfw: options?.nsfw ?? false,
    });

    return this._add({
      _id: emojiId,
      name,
      parent: { type: "Server", id: this.serverId },
      nsfw: options?.nsfw ?? false,
    });
  }

  /**
   * Deletes an emoji by ID.
   *
   * DELETE /custom/emoji/{id}
   * @param emojiId The ID of the emoji to delete.
   */
  async delete(emojiId: string): Promise<void> {
    await this.client.api.delete(`/custom/emoji/${emojiId}`);
    this._remove(emojiId);
  }

  /**
   * Edits an emoji by ID.
   *
   * PUT /custom/emoji/{id}
   * @param emojiId The ID of the emoji to edit.
   * @param options The edit options.
   */
  async edit(
    emojiId: string,
    options: { name?: string; parent?: object; nsfw?: boolean },
  ): Promise<void> {
    await this.client.api.put(`/custom/emoji/${emojiId}`, options);
    const cached = this.cache.get(emojiId);
    if (cached) {
      if (options.name) cached.name = options.name;
      if (options.parent) cached.parent = options.parent as { type: string; id: string };
      if (typeof options.nsfw === "boolean") cached.nsfw = options.nsfw;
    }
  }
}
