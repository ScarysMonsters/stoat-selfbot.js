import { BaseManager } from "./baseManager";
import type { Client } from "../client/client";
import type { ServerBan } from "../struct/serverBan";

/**
 * Manages server bans.
 * Provides methods to list, fetch, create, and remove server bans.
 *
 * @extends BaseManager
 */
export class ServerBanManager extends BaseManager<ServerBan> {
  readonly holds = null;

  constructor(client: Client) {
    super(client);
  }

  /**
   * Fetches all bans for a server.
   * @param serverId The server ID.
   * @returns Array of ban data from the API.
   */
  async fetch(serverId: string): Promise<any[]> {
    const data: any = await this.client.api.get(`/servers/${serverId}/bans`);
    const bans = Array.isArray(data) ? data : [];
    for (const ban of bans) {
      this._addBan(serverId, ban);
    }
    return bans;
  }

  /**
   * Bans a user from a server.
   * @param serverId The server ID.
   * @param userId The user ID to ban.
   * @param reason The reason for the ban (optional).
   */
  async ban(serverId: string, userId: string, reason?: string): Promise<void> {
    await this.client.api.put(`/servers/${serverId}/bans/${userId}`, {
      reason,
    });
  }

  /**
   * Unbans a user from a server.
   * @param serverId The server ID.
   * @param userId The user ID to unban.
   */
  async unban(serverId: string, userId: string): Promise<void> {
    await this.client.api.delete(`/servers/${serverId}/bans/${userId}`);
  }

  /**
   * Adds a ban to the internal cache.
   * @param serverId The server ID.
   * @param data The raw ban data.
   * @private
   */
  private _addBan(serverId: string, data: any): ServerBan {
    const { ServerBan } = require("../struct/serverBan");
    const ban = new ServerBan(this.client, { ...data, serverId });
    const key = `${serverId}:${data._id?.user ?? data._id}`;
    this.cache.set(key, ban);
    return ban;
  }
}
