import { Event, Events } from "./event";

/**
 * Represents the event handler for the UserPlatformWipe WebSocket event.
 * Fired when a user's platform data is wiped.
 * @private
 * @extends Event
 */
export class UserPlatformWipe extends Event {
  /**
   * Handles the user platform wipe event.
   *
   * @param {any} data - The data associated with the platform wipe event.
   * @returns {Promise<void>}
   */
  async handle(data: any): Promise<void> {
    this.client.emit(Events.USER_PLATFORM_WIPE, data);
  }
}
