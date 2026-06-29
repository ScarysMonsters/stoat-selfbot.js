import type { Channel as APIChannel } from "revolt-api";
import { BaseManager } from "./baseManager";
import {
  Channel,
  DMChannel,
  GroupChannel,
  NotesChannel,
  TextChannel,
  VoiceChannel,
} from "../struct/index";

export type ChannelResolvable = Channel | APIChannel | string;

export class ChannelManager extends BaseManager<Channel, APIChannel> {
  /** @private */
  holds = null;

  /** @private */
  _add(data: APIChannel & { voice?: any }): Channel {
    let channel: Channel;

    const channelType = data.channel_type as string;

    switch (channelType) {
      case "TextChannel":
        if (data.voice !== undefined) {
          channel = new VoiceChannel(this.client, data as any);
        } else {
          channel = new TextChannel(this.client, data as any);
        }
        break;
      case "VoiceChannel":
        channel = new VoiceChannel(this.client, data as any);
        break;
      case "DirectMessage":
        channel = new DMChannel(this.client, data as any);
        break;
      case "Group":
      case "GroupDM":
        channel = new GroupChannel(this.client, data as any);
        break;
      case "SavedMessages":
        channel = new NotesChannel(this.client, data as any);
        if (this.client.user) this.client.user.notes = channel as NotesChannel;
        break;
      default:
        throw new Error(`Unknown Channel Type: ${data}`);
    }

    this.cache.set(channel.id, channel);

    return channel;
  }

  _remove(id: string): boolean {
    const channel = this.cache.get(id);

    if (channel?.inServer()) {
      channel.server?.channels.cache.delete(id);
    }

    return super._remove(id);
  }

  /**
   * used to delete a channel
   *
   * @param channel The channel to delete
   * @returns A promise that resolves when the channel is deleted
   */
  async delete(channel: ChannelResolvable): Promise<void> {
    const id = this.resolveId(channel);
    if (!id) {
      throw new TypeError("INVALID_TYPE");
    }
    await this.client.api.delete(`/channels/${id}`);
  }

  /**
   * used to fetch a channel
   *
   * @param channel The channel to fetch
   * @param force Whether to force fetch the channel using the api or return it form cache if able
   * @returns A promise that resolves with the fetched channel
   */
  async fetch(
    channel: ChannelResolvable,
    { force = true } = {},
  ): Promise<Channel> {
    const id = this.resolveId(channel);

    if (!id) {
      throw new TypeError("INVALID_TYPE");
    }

    if (!force) {
      const channel = this.cache.get(id);
      if (channel) return channel;
    }

    const data = (await this.client.api.get(`/channels/${id}`)) as APIChannel;

    return this._add(data);
  }

  /**
   * resolves a channel from a string or a channel object
   * @param channel The channel to resolve
   * @returns the resolved channel or null if not found
   */
  resolve(channel: ChannelResolvable): Channel | null {
    if (channel instanceof Channel) return channel;
    return super.resolve(channel as any);
  }

  /**
   * resolves a channel id from a string or a channel object
   * @param channel The channel to resolve
   * @returns the resolved channel id or null if not found
   */
  resolveId(channel: ChannelResolvable): string | null {
    if (channel instanceof Channel) return channel.id;
    return super.resolveId(channel);
  }

  /**
   * Creates a new group DM channel.
   *
   * @param options Options for creating the group.
   * @param options.name The name of the group.
   * @param options.description The description of the group (optional).
   * @param options.recipients An array of user IDs to add to the group (optional).
   * @param options.nsfw Whether the group is NSFW (optional).
   * @returns A promise that resolves with the created group channel.
   */
  async createGroup(options: {
    name: string;
    description?: string;
    recipients?: string[];
    nsfw?: boolean;
  }): Promise<GroupChannel> {
    const data = (await this.client.api.post("/channels/create", {
      name: options.name,
      description: options.description,
      users: options.recipients ?? [],
      nsfw: options.nsfw,
    })) as APIChannel;
    return this._add(data) as GroupChannel;
  }

  /**
   * Fetches all DM channels for the current user.
   *
   * @returns A promise that resolves with an array of DM channels.
   */
  async fetchDMs(): Promise<DMChannel[]> {
    const data = (await this.client.api.get("/users/dms")) as APIChannel[];
    return data.map((raw) => this._add(raw) as DMChannel);
  }
}
