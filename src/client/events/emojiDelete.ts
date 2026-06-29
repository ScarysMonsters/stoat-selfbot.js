import { Event, Events } from "./event";

/**
 * Event handler for EmojiDelete WebSocket event.
 * @private
 * @extends Event
 */
export class EmojiDelete extends Event {
  async handle(data: any): Promise<unknown> {
    const server = this.client.servers.cache.get(data.parent?.id);
    let emoji = null;
    if (server) {
      emoji = server.emojis.get(data._id) ?? { ...data, _id: data._id };
      server.emojis.delete(data._id);
    }

    this.client.emit(Events.EMOJI_DELETE, emoji ?? { ...data, _id: data._id });
    return {};
  }
}
