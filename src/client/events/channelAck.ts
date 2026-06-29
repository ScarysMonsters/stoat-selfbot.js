import { Event, Events } from "./event";

/**
 * Event handler for ChannelAck WebSocket event.
 * Fired when messages in a channel are acknowledged.
 * @private
 * @extends Event
 */
export class ChannelAck extends Event {
  async handle(data: { id: string; channel: string; message: string }): Promise<unknown> {
    const channel = this.client.channels.cache.get(data.channel);
    if (channel) {
      this.client.emit(Events.CHANNEL_ACK, channel, data.message);
    }
    return {};
  }
}
