import { Event, Events } from "./event";

/**
 * Represents the data for a message reaction event.
 */
export interface MessageReactData {
  /** The ID of the message being reacted to. */
  id: string;

  /** The ID of the channel containing the message. */
  channel_id: string;

  /** The ID of the user who reacted. */
  user_id: string;

  /** The ID of the emoji used for the reaction. */
  emoji_id: string;
}

/**
 * Represents the event handler for message reactions.
 * @private
 * @extends Event
 */
export class MessageReact extends Event {
  /**
   * Handles the message reaction event.
   *
   * @param {MessageReactData} data - The data for the event, containing the message ID, channel ID, user ID, and emoji ID.
   * @returns {Promise<unknown>} A promise that resolves with an empty object.
   */
  async handle(data: MessageReactData): Promise<unknown> {
    const channel = this.client.channels.cache.get(data.channel_id);

    if (channel?.isText()) {
      let message = channel.messages.cache.get(data.id)
        ? channel.messages.cache.get(data.id)
        : await channel.messages.fetch(data.id);

      if (message) {
        // FIX: Use indexOf properly - indexOf returns -1 when not found, not falsy
        const existingUsers = message.reactions.get(data.emoji_id);
        if (existingUsers && existingUsers.includes(data.user_id)) return {};

        // Add the user to the reaction list
        if (existingUsers) {
          existingUsers.push(data.user_id);
        } else {
          message.reactions.set(data.emoji_id, [data.user_id]);
        }

        this.client.emit(Events.MESSAGE_REACTION_ADD, message, data.emoji_id, data.user_id);
      }
    }

    return {};
  }
}
