import { Event, Events } from "./event";

/**
 * Event handler for EmojiCreate WebSocket event.
 * @private
 * @extends Event
 */
export class EmojiCreate extends Event {
  async handle(data: any): Promise<unknown> {
    const server = this.client.servers.cache.get(data.parent?.id);
    if (server) {
      server.emojis._add(data);
    }
    // Create a minimal emoji object for the event
    this.client.emit(Events.EMOJI_CREATE, { ...data, _id: data._id });
    return {};
  }
}
