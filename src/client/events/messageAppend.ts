import { Event, Events } from "./event";

/**
 * Event handler for MessageAppend WebSocket event.
 * Fired when data is appended to a message (e.g., embeds loaded).
 * @private
 * @extends Event
 */
export class MessageAppend extends Event {
  async handle(data: any): Promise<unknown> {
    const channel = this.client.channels.cache.get(data.channel);
    if (channel?.isText()) {
      const message = channel.messages.cache.get(data.id);
      if (message) {
        // Append embeds to the existing message
        if (Array.isArray(data.append?.embeds)) {
          message.embeds = [...message.embeds, ...data.append.embeds];
        }
      }
    }
    return {};
  }
}
