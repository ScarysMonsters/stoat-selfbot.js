import { Event, Events } from "./event";
import { RelationshipStatus } from "../../utils/constants";

/**
 * Event handler for UserRelationship WebSocket event.
 * Fired when a user's relationship status changes (friend added, blocked, etc.).
 * @private
 * @extends Event
 */
export class UserRelationship extends Event {
  async handle(data: { _id: string; status: RelationshipStatus }): Promise<unknown> {
    // Update or create the relationship in cache
    const existing = this.client.relationships.cache.get(data._id);
    const user = this.client.users.cache.get(data._id);

    if (existing) {
      // Update the status directly since _patch is protected
      (existing as any).status = data.status;
    } else {
      this.client.relationships._add(data);
    }

    // If the user is now "User" (self), skip
    if (data.status === RelationshipStatus.USER) return {};

    this.client.emit(Events.USER_RELATIONSHIP, user as any, data.status);
    return {};
  }
}
