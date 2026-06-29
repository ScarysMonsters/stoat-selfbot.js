import { Event, Events } from "./event";

/**
 * Represents the event handler for the Auth WebSocket event.
 * Fired when an authentication action is required (e.g., MFA challenge).
 * @private
 * @extends Event
 */
export class Auth extends Event {
  /**
   * Handles the auth event.
   *
   * @param {any} data - The data associated with the auth event (e.g., MFA ticket).
   * @returns {Promise<void>}
   */
  async handle(data: any): Promise<void> {
    this.client.emit(Events.AUTH, data);
  }
}
