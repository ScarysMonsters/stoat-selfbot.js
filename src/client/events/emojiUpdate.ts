import { Event, Events } from "./event";
import { Emoji } from "../../struct/emoji";

/**
 * Event handler for EmojiUpdate WebSocket event.
 * Emits the old and new emoji data for comparison (discord.js style).
 * @private
 * @extends Event
 */
export class EmojiUpdate extends Event {
  async handle(data: any): Promise<unknown> {
    const server = this.client.servers.cache.get(data.parent?.id);

    let oldEmoji: Emoji | null = null;
    if (server) {
      oldEmoji = server.emojis.cache.get(data._id) ?? null;
      server.emojis._add(data);
    }

    const newEmoji = { ...data, _id: data._id } as Emoji;
    // If no old emoji, use an empty object as the old version
    this.client.emit(Events.EMOJI_UPDATE, newEmoji, (oldEmoji ?? {}) as Emoji);
    return {};
  }
}
