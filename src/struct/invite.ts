import { Base } from "./base";
import type { Invite as APIInvite } from "revolt-api";
import type { Server, User } from "./index";
import type { Client } from "../client/client";

/**
 * Represents an invite to a server or channel.
 *
 * @extends Base
 */
export class Invite extends Base {
  /** The type of the invite (e.g., "Server" or "Group"). */
  type: string | null = null;

  /** The ID of the server associated with the invite, if any. */
  serverId: string | null = null;

  /** The name of the server associated with the invite, if any. */
  serverName: string | null = null;

  /** The ID of the user who created the invite. */
  inviterId: string | null = null;

  /** The ID of the channel associated with the invite. */
  channelId!: string;

  /** The name of the channel associated with the invite, if any. */
  channelName: string | null = null;

  /** The icon of the server associated with the invite, if any. */
  serverIcon: string | null = null;

  /** The banner of the server associated with the invite, if any. */
  serverBanner: string | null = null;

  /**
   * Creates a new Invite instance.
   *
   * @param {Client} client - The client instance.
   * @param {APIInvite} data - The raw data for the invite from the API.
   */
  constructor(client: Client, data: APIInvite) {
    super(client);
    this._patch(data);
  }

  /**
   * Updates the invite instance with new data from the API.
   *
   * @param {APIInvite} data - The raw data for the invite from the API.
   * @returns {this} The updated invite instance.
   * @protected
   */
  protected _patch(data: APIInvite): this {
    super._patch(data);

    if (data.channel) this.channelId = data.channel;
    if (data.creator) this.inviterId = data.creator; // FIX: was data.channel before

    if ("server" in data) {
      const serverData = (data as any).server;
      if (serverData) {
        this.type = "Server";
        this.serverId = serverData._id ?? serverData.id ?? null;
        this.serverName = serverData.name ?? null;
        if (serverData.icon) this.serverIcon = serverData.icon;
        if (serverData.banner) this.serverBanner = serverData.banner;
      }
    }

    if ("channel_name" in data) {
      this.channelName = (data as any).channel_name ?? null;
    }

    if ("server_icon" in data) {
      this.serverIcon = (data as any).server_icon ?? this.serverIcon;
    }

    return this;
  }

  /**
   * Retrieves the server associated with the invite.
   *
   * @returns {Server | null} The server associated with the invite, or `null` if not found.
   */
  get server(): Server | null {
    return this.serverId
      ? this.client.servers.cache.get(this.serverId) ?? null
      : null;
  }

  /**
   * Retrieves the channel associated with the invite.
   *
   * @returns {Channel | null} The channel associated with the invite, or `null` if not found.
   */
  get channel() {
    return this.client.channels.cache.get(this.channelId) ?? null;
  }

  /**
   * Retrieves the user who created the invite.
   *
   * @returns {User | null} The user who created the invite, or `null` if not found.
   */
  get inviter(): User | null {
    return this.inviterId
      ? this.client.users.cache.get(this.inviterId) ?? null
      : null;
  }

  /**
   * Fetches the invite data from the API.
   *
   * @returns {Promise<Invite>} The updated invite.
   */
  async fetch(): Promise<Invite> {
    const data = await this.client.api.get(`/invites/${this.id}`);
    return this._patch(data as APIInvite);
  }

  /**
   * Accepts/joins the invite.
   *
   * @returns {Promise<void>} A promise that resolves when the invite is accepted.
   */
  async accept(): Promise<void> {
    await this.client.api.post(`/invites/${this.id}`);
  }

  /**
   * Deletes the invite.
   *
   * @returns {Promise<void>} A promise that resolves when the invite is deleted.
   */
  async delete(): Promise<void> {
    await this.client.api.delete(`/invites/${this.id}`);
  }

  /**
   * Gets the URL for this invite.
   *
   * @returns {string} The invite URL.
   */
  get url(): string {
    return `https://stoat.chat/invite/${this.id}`;
  }

  toString(): string {
    return this.url;
  }
}
