import { Event, Events } from "./event";

/**
 * Represents the event handler for the Logout WebSocket event.
 * Fired when the client is logged out or the session is invalidated.
 * @private
 * @extends Event
 */
export class Logout extends Event {
  /**
   * Handles the logout event.
   *
   * @param {any} data - The data associated with the logout event.
   * @returns {Promise<void>}
   */
  async handle(data: any): Promise<void> {
    this.client.emit(Events.LOGOUT);
  }
}
