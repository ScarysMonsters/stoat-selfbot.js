import type { Role as APIRole } from "revolt-api";
import { BaseManager } from "./baseManager";
import { Role, Server } from "../struct/index";
import { FullPermissions, UUID } from "../utils/index";
import { editableRole } from "../utils/types";

export type RoleResolvable = Role | string;

export interface RoleCreateOptions {
  /** The colour of the role. */
  colour?: string;
  /** Whether the role is displayed separately in the member list. */
  hoist?: boolean;
  /** The rank of the role, used for ordering. */
  rank?: number;
  /** Permissions to set for the role. */
  permissions?: {
    a?: Array<keyof (typeof FullPermissions)["FLAGS"]>;
    d?: Array<keyof (typeof FullPermissions)["FLAGS"]>;
  };
}

export class RoleManager extends BaseManager<Role, APIRole & { id: string }> {
  /** @private */
  holds = Role;
  constructor(protected readonly server: Server) {
    super(server.client);
  }

  /** @private */
  _add(data: APIRole & { id: string }): Role {
    const role = new Role(this.server, data);
    this.cache.set(role.id, role);
    return role;
  }

  /**
   * Creates a new role in the server.
   * @param name The name of the role to create
   * @param options Additional options for the role
   * @returns The created role
   */
  async create(name: string, options?: RoleCreateOptions): Promise<Role> {
    const { id, role } = await this.client.api.post<{
      id: string;
      role: APIRole;
    }>(`/servers/${this.server.id}/roles`, { name, ...options });
    return this._add(Object.assign(role, { id }));
  }

  /**
   * Deletes a role from the server.
   * @param role The role to delete
   * @returns A promise that resolves when the role is deleted
   */
  async delete(role: RoleResolvable): Promise<void> {
    const id = this.resolveId(role);
    if (!id) throw new TypeError("INVALID_TYPE");
    await this.client.api.delete(`/servers/${this.server.id}/roles/${id}`);
  }

  /**
   * Edits a role in the server.
   * @param role The role to edit
   * @param data Data to edit the role with
   * @param data.permissions The permissions to set for the role, in the format { a: allow, d: deny }
   * @param data.name The name of the role
   * @param data.colour The color of the role, or `null` if no color is set
   * @param data.hoist Whether the role is displayed separately in the member list
   * @param data.rank The rank of the role, used for ordering
   * @param data.remove Fields to remove from the role
   * @returns The updated role
   * @throws {TypeError} If the role ID is invalid
   */
  async edit(role: RoleResolvable, data: editableRole): Promise<Role> {
    const id = this.resolveId(role);
    if (!id) throw new TypeError("INVALID_TYPE");

    if (data.permissions) {
      const permissions = {
        allow: new FullPermissions(data.permissions?.a || []).bitfield,
        deny: new FullPermissions(data.permissions?.d || []).bitfield,
      };

      await this.client.api.put(
        `/servers/${this.server.id}/permissions/${id}`,
        { permissions },
      );
    }
    delete data.permissions;
    const updatedRole = (await this.client.api.patch(
      `/servers/${this.server.id}/roles/${id}`,
      data,
    )) as APIRole;

    return this._add(Object.assign(updatedRole, { id }));
  }

  /**
   * Sets the ranking order of roles in the server.
   * @param roleIds An array of role IDs in the desired order (highest priority first)
   * @returns A promise that resolves when the ranks are set
   */
  async setRanks(roleIds: string[]): Promise<void> {
    await this.client.api.put(`/servers/${this.server.id}/roles/ranks`, {
      roles: roleIds,
    });
  }

  /**
   * Edits the permissions for a role in the server.
   * @param roleId The ID of the role to edit permissions for
   * @param options The permissions to set, with allow and deny arrays
   * @returns A promise that resolves when the permissions are updated
   */
  async editPermissions(
    roleId: string,
    options: {
      allow?: Array<keyof (typeof FullPermissions)["FLAGS"]>;
      deny?: Array<keyof (typeof FullPermissions)["FLAGS"]>;
    },
  ): Promise<void> {
    const permissions = {
      allow: new FullPermissions(options.allow || []).bitfield,
      deny: new FullPermissions(options.deny || []).bitfield,
    };

    await this.client.api.put(
      `/servers/${this.server.id}/permissions/${roleId}`,
      { permissions },
    );
  }
}
