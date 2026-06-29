import type {
  Server as APIServer,
  FieldsServer,
  DataEditServer,
  SystemMessageChannels,
} from "revolt-api";
import { Attachment, Base, Category, Emoji, ServerMember, User } from "./index";
import type { Client } from "../client/client";
import {
  EmojiManager,
  RoleManager,
  ServerChannelManager,
  ServerMemberManager,
} from "../managers/index";
import { FullPermissions, UUID } from "../utils/index";

/**
 * Represents a server (guild) in the client.
 *
 * @extends Base
 */
export class Server extends Base {
  /** The name of the server. */
  name!: string;

  /** The description of the server, or `null` if none is set. */
  description: string | null = null;

  /** The ID of the user who owns the server. */
  ownerId!: string;

  /** Manages the members of the server. */
  members = new ServerMemberManager(this);

  /** Manages the channels of the server. */
  channels = new ServerChannelManager(this);

  /** Manages the roles of the server. */
  roles = new RoleManager(this);

  /** The icon of the server, or `null` if none is set. */
  icon: Attachment | null = null;

  /** The banner of the server, or `null` if none is set. */
  banner: Attachment | null = null;

  /** Whether analytics are enabled for the server. */
  analytics = false;

  /** Whether the server is discoverable. */
  discoverable = false;

  /** Whether the server is marked as NSFW (Not Safe For Work). */
  nsfw = false;

  /** The default permissions for the server. */
  permissions!: FullPermissions;

  /** The categories in the server. */
  categories = new Map<string, Category>();

  /** Manages the emojis of the server. */
  emojis: EmojiManager;

  /** The system message channels for the server. */
  systemMessages: SystemMessageChannels | null = null;

  /**
   * Creates a new Server instance.
   *
   * @param {client} client - The client instance.
   * @param {APIServer} data - The raw data for the server from the API.
   */
  constructor(client: Client, data: APIServer) {
    super(client);
    this.emojis = new EmojiManager(client, this.id);
    this._patch(data);
  }

  /**
   * Updates the server instance with new data from the API.
   *
   * @param {APIServer} data - The raw data for the server from the API.
   * @param {FieldsServer[]} [clear=[]] - Fields to clear in the server.
   * @returns {this} The updated server instance.
   * @protected
   */
  protected _patch(data: APIServer, clear: FieldsServer[] = []): this {
    super._patch(data);

    if (Array.isArray(data.categories)) {
      this.categories.clear();
      for (const cat of data.categories) {
        const category = new Category(this, cat);
        this.categories.set(category.id, category);
      }
    }

    if (data.icon) {
      this.icon = new Attachment(this.client, data.icon);
    }

    if (data.banner) {
      this.banner = new Attachment(this.client, data.banner);
    }

    if (data.owner) {
      this.ownerId = data.owner;
    }

    if (data.name) {
      this.name = data.name;
    }

    if ("description" in data) {
      this.description = data.description ?? null;
    }

    if (Array.isArray(data.channels)) {
      for (const id of data.channels) {
        const channel = this.client.channels.cache.get(id);
        if (channel?.inServer()) this.channels.cache.set(channel.id, channel);
      }
    }

    if (typeof data.roles === "object") {
      for (const [id, raw] of Object.entries(data.roles)) {
        this.roles._add(Object.assign(raw, { id }));
      }
    }

    if (typeof data.default_permissions === "number") {
      this.permissions = new FullPermissions(data.default_permissions).freeze();
    }

    if (typeof data.analytics === "boolean") this.analytics = data.analytics;
    if (typeof data.discoverable === "boolean") {
      this.discoverable = data.discoverable;
    }
    if (typeof data.nsfw === "boolean") this.nsfw = data.nsfw;

    if ("system_messages" in data) {
      this.systemMessages = data.system_messages ?? null;
    }

    for (const field of clear) {
      if (field === "Icon") this.icon = null;
      if (field === "Description") this.description = null;
      if (field === "Banner") this.banner = null;
    }

    return this;
  }

  /**
   * Retrieves the current user's member instance in the server.
   *
   * @returns {ServerMember | null} The current user's member instance, or `null` if not found.
   */
  get me(): ServerMember | null {
    return this.members.cache.get(this.client.user?.id as string) ?? null;
  }

  /**
   * Gets the creation date of the server.
   *
   * @returns {Date} The date when the server was created.
   */
  get createdAt(): Date {
    return UUID.timestampOf(this.id);
  }

  /**
   * Gets the creation timestamp of the server in milliseconds.
   *
   * @returns {number} The timestamp of when the server was created.
   */
  get createdTimestamp(): number {
    return this.createdAt.getTime();
  }

  /**
   * Retrieves the owner of the server.
   *
   * @returns {User | null} The owner of the server, or `null` if not found.
   */
  get owner(): User | null {
    return this.client.users.cache.get(this.ownerId) ?? null;
  }

  /**
   * Gets the URL of the server icon.
   *
   * @returns {string | null} The icon URL, or `null` if no icon is set.
   */
  iconURL(): string | null {
    if (!this.icon?.id) return null;
    const baseCdn = this.client.options.rest?.instanceCDNURL ?? "https://cdn.stoatusercontent.com";
    return `${baseCdn}/icons/${this.icon.id}`;
  }

  /**
   * Gets the URL of the server banner.
   *
   * @returns {string | null} The banner URL, or `null` if no banner is set.
   */
  bannerURL(): string | null {
    if (!this.banner?.id) return null;
    const baseCdn = this.client.options.rest?.instanceCDNURL ?? "https://cdn.stoatusercontent.com";
    return `${baseCdn}/banners/${this.banner.id}`;
  }

  /**
   * Edits the server.
   *
   * @param {DataEditServer} options - The options to edit the server with.
   * @returns {Promise<this>} The updated server instance.
   */
  async edit(options: DataEditServer): Promise<this> {
    await this.client.api.patch(`/servers/${this.id}`, options);
    return this;
  }

  /**
   * Leaves the server.
   *
   * @returns {Promise<void>}
   */
  async leave(): Promise<void> {
    await this.client.api.delete(`/servers/${this.id}`);
  }

  /**
   * Deletes the server (alias for leave).
   *
   * @returns {Promise<void>}
   */
  async delete(): Promise<void> {
    return this.leave();
  }

  /**
   * Sets the icon of the server.
   *
   * @param {string | null} icon - The new icon, or `null` to remove it.
   * @returns {Promise<this>}
   */
  async setIcon(icon: string | null): Promise<this> {
    await this.edit({ icon: icon ?? undefined, remove: icon === null ? ["Icon"] : undefined });
    return this;
  }

  /**
   * Sets the banner of the server.
   *
   * @param {string | null} banner - The new banner, or `null` to remove it.
   * @returns {Promise<this>}
   */
  async setBanner(banner: string | null): Promise<this> {
    await this.edit({ banner: banner ?? undefined, remove: banner === null ? ["Banner"] : undefined });
    return this;
  }

  /**
   * Sets the description of the server.
   *
   * @param {string | null} description - The new description, or `null` to remove it.
   * @returns {Promise<this>}
   */
  async setDescription(description: string | null): Promise<this> {
    await this.edit({ description: description ?? undefined, remove: description === null ? ["Description"] : undefined });
    return this;
  }

  /**
   * Sets whether the server is NSFW.
   *
   * @param {boolean} nsfw - Whether the server should be NSFW.
   * @returns {Promise<this>}
   */
  async setNSFW(nsfw: boolean): Promise<this> {
    await this.client.api.patch(`/servers/${this.id}`, { nsfw } as any);
    return this;
  }

  /**
   * Sets the default permissions for the server.
   *
   * @param {number} permissions - The default permissions value.
   * @returns {Promise<this>}
   */
  async setDefaultPermissions(permissions: number): Promise<this> {
    await this.client.api.patch(`/servers/${this.id}`, { default_permissions: permissions } as any);
    return this;
  }

  /**
   * Creates a new emoji in this server.
   *
   * @param name The name of the emoji.
   * @param image The image data (file path, URL, or buffer).
   * @param options Additional options for the emoji.
   * @returns The created emoji.
   */
  async createEmoji(
    name: string,
    image: Buffer | string,
    options?: { nsfw?: boolean },
  ): Promise<Emoji> {
    return this.emojis.create(name, image, options);
  }

  /**
   * Fetches all emojis for this server.
   *
   * @returns Map of emojis.
   */
  async fetchEmojis(): Promise<Map<string, Emoji>> {
    return this.emojis.fetchAll();
  }

  /**
   * Fetches all bans for this server.
   *
   * @returns Array of ban data.
   */
  async fetchBans(): Promise<any[]> {
    return this.client.bans.fetch(this.id);
  }

  /**
   * Bans a user from this server.
   *
   * @param userId The user ID to ban.
   * @param reason The reason for the ban (optional).
   */
  async ban(userId: string, reason?: string): Promise<void> {
    await this.client.bans.ban(this.id, userId, reason);
  }

  /**
   * Unbans a user from this server.
   *
   * @param userId The user ID to unban.
   */
  async unban(userId: string): Promise<void> {
    await this.client.bans.unban(this.id, userId);
  }

  /**
   * Fetches all invites for this server.
   *
   * @returns Array of invite data.
   */
  async fetchInvites(): Promise<any[]> {
    return this.client.api.get(`/servers/${this.id}/invites`);
  }

  /**
   * Marks all channels in this server as read.
   */
  async ack(): Promise<void> {
    await this.client.api.put(`/servers/${this.id}/ack`);
  }

  /**
   * Marks all channels in this server as read.
   * @alias ack
   */
  async markAsRead(): Promise<void> {
    return this.ack();
  }

  /**
   * Converts the server to a string representation.
   *
   * @returns {string} The name of the server.
   */
  toString(): string {
    return this.name;
  }
}
