import { Base } from "./base";
import type { Client } from "../client/client";
import type { User } from "./user";
import type { Server } from "./server";
import { UUID } from "../utils";

/**
 * Represents a ban entry in a server.
 *
 * @extends Base
 */
export class ServerBan extends Base {
  /** The ID of the server this ban belongs to. */
  serverId!: string;

  /** The ID of the banned user. */
  userId!: string;

  /** The reason for the ban, or `null` if none was provided. */
  reason: string | null = null;

  /**
   * Creates a new ServerBan instance.
   *
   * @param {Client} client - The client instance.
   * @param {any} data - The raw ban data from the API.
   */
  constructor(client: Client, data: any) {
    super(client);
    this._patch(data);
  }

  /**
   * Updates the ban with new data.
   * @param data The raw ban data.
   * @returns This ban instance.
   * @protected
   */
  protected _patch(data: any): this {
    super._patch(data);

    // Ban data comes as { _id: { server, user }, reason }
    if (data._id) {
      if (typeof data._id === "object") {
        this.serverId = data._id.server;
        this.userId = data._id.user;
      }
    }

    if ("reason" in data) {
      this.reason = data.reason ?? null;
    }

    return this;
  }

  /**
   * Gets the creation date of the ban.
   */
  get createdAt(): Date {
    return UUID.timestampOf(this.id);
  }

  /**
   * Gets the server this ban belongs to.
   */
  get server(): Server | null {
    return this.client.servers.cache.get(this.serverId) ?? null;
  }

  /**
   * Gets the banned user.
   */
  get user(): User | null {
    return this.client.users.cache.get(this.userId) ?? null;
  }

  /**
   * Revokes (unbans) this ban.
   */
  async revoke(): Promise<void> {
    await this.client.api.delete(`/servers/${this.serverId}/bans/${this.userId}`);
  }

  toString(): string {
    return `ServerBan { userId: ${this.userId}, serverId: ${this.serverId} }`;
  }
}
