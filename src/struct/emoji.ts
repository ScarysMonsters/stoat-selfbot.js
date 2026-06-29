import { Base } from "./base";
import type { Client } from "../client/client";
import type { Server } from "./server";
import type { User } from "./user";
import { UUID, cdnUrl } from "../utils/index";

/**
 * Represents an emoji in the client.
 *
 * @extends Base
 */
export class Emoji extends Base {
  /** The parent object of the emoji, which can be a server or other entity. */
  parent?: { type: string; id: string } | null = null;

  /** The ID of the user who created the emoji, or `null` if not available. */
  creator_id?: string | null = null;

  /** The name of the emoji, or `null` if not set. */
  name?: string | null = null;

  /** Whether the emoji is marked as NSFW. */
  nsfw = false;

  /** Whether the emoji is animated. */
  animated = false;

  /**
   * Creates a new Emoji instance.
   *
   * @param {Client} client - The client instance.
   * @param {any} data - The raw data for the emoji.
   */
  constructor(client: Client, data: any) {
    super(client);
    this._patch(data);
  }

  /**
   * Updates the emoji instance with new data.
   * @param data The raw emoji data.
   * @returns This emoji instance.
   * @protected
   */
  protected _patch(data: any): this {
    super._patch(data);

    if (data.parent) {
      this.parent = data.parent;
    }

    if (data.creator_id) {
      this.creator_id = data.creator_id;
    }

    if ("name" in data) {
      this.name = data.name ?? null;
    }

    if (typeof data.nsfw === "boolean") {
      this.nsfw = data.nsfw;
    }

    if (typeof data.animated === "boolean") {
      this.animated = data.animated;
    }

    return this;
  }

  /**
   * Retrieves the user who created the emoji.
   *
   * @returns {User | null} The creator of the emoji, or `null` if not found.
   */
  get creator(): User | null {
    return this.client.users.cache.get(this.creator_id!) ?? null;
  }

  /**
   * Retrieves the server associated with the emoji, if any.
   *
   * @returns {Server | null} The server instance, or `null` if the emoji is not associated with a server.
   */
  get server(): Server | null {
    if (!this.parent) return null;
    return this.client.servers.cache.get(this.parent.id) ?? null;
  }

  /**
   * Gets the URL for the emoji image.
   *
   * @returns {string} The URL to the emoji image.
   */
  get url(): string {
    const baseCdn = this.client.options.rest?.instanceCDNURL ?? cdnUrl;
    return `${baseCdn}/emojis/${this.id}`;
  }

  /** Edits this emoji.
   *
   * @param options The edit options.
   * @returns A promise that resolves when the emoji is updated.
   */
  async edit(options: { name?: string; parent?: object; nsfw?: boolean }): Promise<void> {
    await this.client.api.put(`/custom/emoji/${this.id}`, options);
    if (options.name) this.name = options.name;
    if (options.parent) this.parent = options.parent as { type: string; id: string };
    if (typeof options.nsfw === "boolean") this.nsfw = options.nsfw;
  }

  /**
   * Deletes this emoji.
   *
   * @returns A promise that resolves when the emoji is deleted.
   */
  async delete(): Promise<void> {
    await this.client.api.delete(`/custom/emoji/${this.id}`);
    this.server?.emojis._remove(this.id);
  }

  /**
   * Gets the creation date of the emoji.
   *
   * @returns {Date} The date when the emoji was created.
   */
  get createdAt(): Date {
    return UUID.timestampOf(this.id);
  }

  /**
   * Gets the creation timestamp of the emoji in milliseconds.
   *
   * @returns {number} The timestamp of when the emoji was created.
   */
  get createdTimestamp(): number {
    return this.createdAt.getTime();
  }

  /**
   * Returns the emoji string for use in messages.
   */
  toString(): string {
    return `:${this.name}:`;
  }
}
