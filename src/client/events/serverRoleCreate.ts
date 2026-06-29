import { Event, Events } from "./event";
import { Role } from "../../struct/role";

/**
 * Represents the event handler for server role creations.
 * @private
 * @extends Event
 */
export class ServerRoleCreate extends Event {
  /**
   * Handles the server role creation event.
   *
   * @param {{ id: string; role: any; role_id: string }} data - The data for the event, containing the server ID, role data, and role ID.
   * @returns {Promise<void>}
   */
  async handle(data: { id: string; role: any; role_id: string }): Promise<void> {
    const server = this.client.servers.cache.get(data.id);
    if (server) {
      const role = server.roles._add({ ...data.role, id: data.role_id });
      this.client.emit(Events.ROLE_CREATE, role);
    }
  }
}
