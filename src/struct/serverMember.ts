import type { Member as APIMember, FieldsMember, DataMemberEdit } from "revolt-api";
import { Base } from "./base";
import { Attachment, Server, User, Role, Presence } from "./index";
import type { Client } from "../client/client";
import { FullPermissions, FullPermissionsResolvable, Badges } from "../utils";

/**
 * Represents a member of a server.
 *
 * @extends Base
 */
export class ServerMember extends Base {
  /** The ID of the server this member belongs to. */
  serverId!: string;

  /** The nickname of the member, or `null` if none is set. */
  nickname: string | null = null;

  /** The avatar of the member, or `null` if none is set. */
  avatar: Attachment | null = null;

  /** Role IDs assigned to the member */
  roleIds: string[] = [];

  /** Resolved roles assigned to the member (resolved from roleIds + server cache) */
  get roles(): Role[] {
    const server = this.client.servers.cache.get(this.serverId);
    if (!server) return [];
    return this.roleIds
      .map((id) => server.roles.cache.get(id))
      .filter((r): r is Role => r !== undefined);
  }

  /**
   * Creates a new ServerMember instance.
   *
   * @param {client} client - The client instance.
   * @param {APIMember} data - The raw data for the server member from the API.
   */
  constructor(client: Client, data: APIMember) {
    super(client);
    this._patch(data);
  }

  /**
   * Updates the server member instance with new data from the API.
   *
   * @param {APIMember} data - The raw data for the server member from the API.
   * @param {FieldsMember[]} [clear=[]] - Fields to clear in the server member.
   * @returns {this} The updated server member instance.
   * @protected
   */
  protected _patch(data: APIMember, clear: FieldsMember[] = []): this {
    super._patch(data);

    if ("nickname" in data) {
      this.nickname = data.nickname ?? null;
    }

    if (data.avatar) {
      this.avatar = new Attachment(this.client, data.avatar);
    }

    if (data._id) {
      this.serverId = data._id.server;
      this.id = data._id.user;
    }

    if (Array.isArray(data.roles)) {
      this.roleIds = data.roles;
    }

    for (const field of clear) {
      if (field === "Avatar") this.avatar = null;
      if (field === "Nickname") this.nickname = null;
    }

    return this;
  }

  /**
   * Edits this server member directly via the API.
   *
   * @param {DataMemberEdit} options - The options to edit the member with.
   * @returns {Promise<void>}
   */
  async edit(options: DataMemberEdit): Promise<void> {
    await this.client.api.patch(`/servers/${this.serverId}/members/${this.id}`, options);
  }

  /**
   * Sets the nickname of the server member.
   *
   * @param {string | null} nickname - The new nickname to set, or `null` to clear.
   * @returns {Promise<this>} A promise that resolves with the updated server member instance.
   *
   * @example
   * ```typescript
   * await member.setNickname("NewNickname");
   * ```
   */
  async setNickname(nickname: string | null): Promise<this> {
    await this.edit({ nickname: nickname ?? undefined });
    this.nickname = nickname;
    return this;
  }

  /**
   * adds a role to the server member.
   * @param roleId - The ID of the role to add to the member.
   * @returns
   */
  async addRole(roleId: string): Promise<this> {
    if (this.roleIds.includes(roleId)) {
      return this; // Role already exists, no need to add it again
    }
    await this.edit({ roles: [...this.roleIds, roleId] as any });
    this.roleIds = [...this.roleIds, roleId];
    return this;
  }

  /**
   * Removes a role from the server member.
   *
   * @param {string} roleId - The ID of the role to remove from the member.
   * @returns {Promise<this>} A promise that resolves with the updated server member instance.
   *
   * @example
   * ```typescript
   * await member.removeRole("roleId");
   * ```
   */
  async removeRole(roleId: string): Promise<this> {
    if (!this.roleIds.includes(roleId)) {
      return this; // Role does not exist, no need to remove it
    }
    const newRoles = this.roleIds.filter((id) => id !== roleId);
    await this.edit({ roles: newRoles as any });
    this.roleIds = newRoles;
    return this;
  }

  /**
   * Bans the server member.
   *
   * @param {string} [reason] - The reason for the ban.
   * @returns {Promise<void>} A promise that resolves when the member is banned.
   *
   * @example
   * ```typescript
   * await member.ban("Violation of rules");
   * ```
   */
  ban(reason?: string): Promise<void> {
    return this.server.members.ban(this, reason);
  }

  /**
   * Kicks the server member.
   *
   * @returns {Promise<void>} A promise that resolves when the member is kicked.
   *
   * @example
   * ```typescript
   * await member.kick();
   * ```
   */
  kick(): Promise<void> {
    return this.server.members.kick(this);
  }

  /**
   * Leaves the server.
   *
   * @returns {Promise<void>} A promise that resolves when the member leaves the server.
   *
   * @example
   * ```typescript
   * await member.leave();
   * ```
   */
  leave(): Promise<void> {
    return this.client.servers.delete(this.serverId);
  }

  /**
   * Gets the effective permissions for this server member based on their roles.
   *
   * The permissions are calculated by:
   * 1. Starting with a base FullPermissions with no permissions
   * 2. For each role the member has, applying the role's allow permissions
   * 3. For each role the member has, removing the role's deny permissions
   *
   * @returns {FullPermissions} The effective permissions for this member
   *
   * @example
   * ```typescript
   * const permissions = member.getPermissions();
   * console.log(permissions.has('MANAGE_MESSAGES')); // true or false
   * ```
   */
  permissions(): FullPermissions {
    // Start with no permissions
    let permissions = new FullPermissions();

    // Apply allow permissions from all roles
    for (const role of this.roles) {
      if (role.overwrite?.allow) {
        permissions = permissions.add(role.overwrite.allow);
      }
    }

    // Remove deny permissions from all roles
    for (const role of this.roles) {
      if (role.overwrite?.deny) {
        permissions = permissions.remove(role.overwrite.deny);
      }
    }

    return permissions;
  }

  /**
   * Checks if this server member has a specific permission.
   *
   * @param {string | number | FullPermissions} permission - The permission to check for
   * @returns {boolean} Whether the member has the permission
   *
   * @example
   * ```typescript
   * if (member.hasPermission('MANAGE_MESSAGES')) {
   *   // Member can manage messages
   * }
   * ```
   *
   * note this works on the same basis as stoats permissions checking
   */
  hasPermission(permission: FullPermissionsResolvable): boolean {
    if (this.client.servers.cache.get(this.serverId)?.ownerId === this.id)
      return true;
    return this.permissions().has(permission);
  }

  //   async displayAvatarURL(options?: { size: number }): Promise<string> {
  //     return await this.user.displayAvatarURL(options);
  //   }

  /**
   * Retrieves the user associated with this server member.
   *
   * @returns {User} The user instance.
   */
  get user(): User {
    return this.client.users.cache.get(this.id)!;
  }

  /**
   * Gets the username of the user.
   *
   * @returns {string} The username of the user.
   */
  get username(): string {
    return this.user.username;
  }

  /**
   * Gets whether the user is a bot.
   *
   * @returns {boolean} Whether the user is a bot.
   */
  get bot(): boolean {
    return this.user.bot ?? false;
  }

  /**
   * Retrieves the server this member belongs to.
   *
   * @returns {Server} The server instance.
   */
  get server(): Server {
    return this.client.servers.cache.get(this.serverId)!;
  }

  /**
   * Converts the server member to a string representation.
   *
   * @returns {string} A string representation of the server member in the format `<@userId>`.
   */
  toString(): string {
    return `<@${this.id}>`;
  }

  /**
   * Sets a timeout for the server member.
   * @param duration - The duration of the timeout as a Date object.
   * @returns A promise that resolves when the timeout is set.
   */
  timeout(duration: Date): Promise<void> {
    return this.server.members.edit(this, { timeout: duration });
  }
}
