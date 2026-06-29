// Static event map for robust registration
import { BulkMessageDelete } from "./bulkMessageDelete";
import { ChannelCreate } from "./channelCreate";
import { ChannelDelete } from "./channelDelete";
import { ChannelGroupJoin } from "./channelGroupJoin";
import { ChannelGroupLeave } from "./channelGroupLeave";
import { ChannelStartTyping } from "./channelStarttyping";
import { ChannelStopTyping } from "./channelStopTyping";
import { ChannelUpdate } from "./channelUpdate";
import { ChannelAck } from "./channelAck";
import { Message as MessageReceved } from "./message";
import { MessageAppend } from "./messageAppend";
import { MessageDelete } from "./messageDelete";
import { MessageUpdate } from "./messageUpdate";
import { MessageReact } from "./messageReact";
import { MessageUnreact } from "./messageUnreact";
import { ServerCreate } from "./serverCreate";
import { ServerDelete } from "./serverDelete";
import { ServerMemberJoin } from "./serverMemberJoin";
import { ServerMemberLeave } from "./serverMemberLeave";
import { ServerMemberUpdate } from "./serverMemberUpdate";
import { ServerRoleDelete } from "./serverRoleDelete";
import { ServerRoleUpdate } from "./serverRoleUpdate";
import { ServerUpdate } from "./serverupdate";
import { UserUpdate } from "./userUpdate";
import { UserRelationship } from "./userRelationship";
import { WebhookCreate } from "./webhookCreate";
import { WebhookDelete } from "./webhookDelete";
import { WebhookUpdate } from "./webhookUpdate";
import { UserVoiceStateUpdate } from "./userVoiceStateUpdate";
import { VoiceChannelJoin } from "./voiceChannelJoin";
import { VoiceChannelLeave } from "./voiceChannelLeave";
import { EmojiCreate } from "./emojiCreate";
import { EmojiUpdate } from "./emojiUpdate";
import { EmojiDelete } from "./emojiDelete";
import { ServerRoleCreate } from "./serverRoleCreate";
import { Logout } from "./logout";
import { Auth } from "./auth";
import { UserPlatformWipe } from "./userPlatformWipe";

export const EventMap = {
  BulkMessageDelete: BulkMessageDelete,
  ChannelCreate: ChannelCreate,
  ChannelDelete: ChannelDelete,
  ChannelGroupJoin: ChannelGroupJoin,
  ChannelGroupLeave: ChannelGroupLeave,
  ChannelStartTyping: ChannelStartTyping,
  ChannelStopTyping: ChannelStopTyping,
  ChannelUpdate: ChannelUpdate,
  ChannelAck: ChannelAck,
  Message: MessageReceved,
  MessageAppend: MessageAppend,
  MessageDelete: MessageDelete,
  MessageUpdate: MessageUpdate,
  MessageReact: MessageReact,
  MessageUnreact: MessageUnreact,
  ServerCreate: ServerCreate,
  ServerDelete: ServerDelete,
  ServerMemberJoin: ServerMemberJoin,
  ServerMemberLeave: ServerMemberLeave,
  ServerMemberUpdate: ServerMemberUpdate,
  ServerRoleDelete: ServerRoleDelete,
  ServerRoleUpdate: ServerRoleUpdate,
  ServerUpdate: ServerUpdate,
  UserUpdate: UserUpdate,
  UserRelationship: UserRelationship,
  WebhooksCreate: WebhookCreate,
  WebhooksDelete: WebhookDelete,
  WebhooksUpdate: WebhookUpdate,
  VoiceStateUpdate: UserVoiceStateUpdate,
  VoiceChannelJoin: VoiceChannelJoin,
  VoiceChannelLeave: VoiceChannelLeave,
  EmojiCreate: EmojiCreate,
  EmojiUpdate: EmojiUpdate,
  EmojiDelete: EmojiDelete,
  ServerRoleCreate: ServerRoleCreate,
  Logout: Logout,
  Auth: Auth,
  UserPlatformWipe: UserPlatformWipe,
};
