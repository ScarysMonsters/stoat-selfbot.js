import { clientOptions } from "../client/baseClient";
import { UUID } from "./UUID";

/**
 * Enum representing the client events that can be emitted (discord.js style naming).
 * These map to the user-facing event names (camelCase).
 * @private
 */
export enum Events {
  CHANNEL_CREATE = "channelCreate",
  CHANNEL_DELETE = "channelDelete",
  CHANNEL_UPDATE = "channelUpdate",
  CHANNEL_ACK = "channelAck",
  DEBUG = "debug",
  ERROR = "error",
  GROUP_JOIN = "groupJoin",
  GROUP_LEAVE = "groupLeave",
  MESSAGE_CREATE = "messageCreate",
  MESSAGE_DELETE = "messageDelete",
  MESSAGE_DELETE_BULK = "messageDeleteBulk",
  MESSAGE_UPDATE = "messageUpdate",
  MESSAGE_REACTION_ADD = "messageReactionAdd",
  MESSAGE_REACTION_REMOVE = "messageReactionRemove",
  MESSAGE_PIN = "messagePin",
  MESSAGE_UNPIN = "messageUnpin",
  RAW = "raw",
  READY = "ready",
  ROLE_CREATE = "roleCreate",
  ROLE_DELETE = "roleDelete",
  ROLE_UPDATE = "roleUpdate",
  SERVER_CREATE = "serverCreate",
  SERVER_DELETE = "serverDelete",
  SERVER_MEMBER_JOIN = "guildMemberAdd",
  SERVER_MEMBER_LEAVE = "guildMemberRemove",
  SERVER_MEMBER_UPDATE = "guildMemberUpdate",
  SERVER_UPDATE = "serverUpdate",
  SERVER_BAN_ADD = "serverBanAdd",
  SERVER_BAN_REMOVE = "serverBanRemove",
  TYPING_START = "typingStart",
  TYPING_STOP = "typingStop",
  USER_UPDATE = "userUpdate",
  USER_RELATIONSHIP = "userRelationship",
  WEBHOOKS_CREATE = "webhookCreate",
  WEBHOOKS_DELETE = "webhookDelete",
  WEBHOOKS_UPDATE = "webhookUpdate",
  USER_VOICE_STATE_UPDATE = "voiceStateUpdate",
  VOICE_CHANNEL_JOIN = "voiceChannelJoin",
  VOICE_CHANNEL_LEAVE = "voiceChannelLeave",
  EMOJI_CREATE = "emojiCreate",
  EMOJI_UPDATE = "emojiUpdate",
  EMOJI_DELETE = "emojiDelete",
  SERVER_ROLE_CREATE = "serverRoleCreate",
  LOGOUT = "logout",
  AUTH = "auth",
  USER_PLATFORM_WIPE = "userPlatformWipe",
  MESSAGE_APPEND = "messageAppend",
}

/**
 * Enum representing the WebSocket events used for communication.
 * These match the Stoat/Revolt gateway event type strings exactly.
 * @private
 */
export enum WSEvents {
  AUTHENTICATE = "Authenticate",
  AUTHENTICATED = "Authenticated",
  BEGIN_TYPING = "BeginTyping",
  BULK = "Bulk",
  CHANNEL_ACK = "ChannelAck",
  CHANNEL_CREATE = "ChannelCreate",
  CHANNEL_DELETE = "ChannelDelete",
  CHANNEL_GROUP_JOIN = "ChannelGroupJoin",
  CHANNEL_GROUP_LEAVE = "ChannelGroupLeave",
  CHANNEL_START_TYPING = "ChannelStartTyping",
  CHANNEL_STOP_TYPING = "ChannelStopTyping",
  CHANNEL_UPDATE = "ChannelUpdate",
  END_TYPING = "EndTyping",
  ERROR = "Error",
  EMOJI_CREATE = "EmojiCreate",
  EMOJI_UPDATE = "EmojiUpdate",
  EMOJI_DELETE = "EmojiDelete",
  MESSAGE = "Message",
  MESSAGE_APPEND = "MessageAppend",
  MESSAGE_BULK_DELETE = "BulkMessageDelete",
  MESSAGE_DELETE = "MessageDelete",
  MESSAGE_REACT = "MessageReact",
  MESSAGE_UNREACT = "MessageUnreact",
  MESSAGE_REMOVE_REACTION = "MessageRemoveReaction",
  MESSAGE_UPDATE = "MessageUpdate",
  PING = "Ping",
  PONG = "Pong",
  READY = "Ready",
  SERVER_CREATE = "ServerCreate",
  SERVER_DELETE = "ServerDelete",
  SERVER_MEMBER_JOIN = "ServerMemberJoin",
  SERVER_MEMBER_LEAVE = "ServerMemberLeave",
  SERVER_MEMBER_UPDATE = "ServerMemberUpdate",
  SERVER_ROLE_CREATE = "ServerRoleCreate",
  SERVER_ROLE_DELETE = "ServerRoleDelete",
  SERVER_ROLE_UPDATE = "ServerRoleUpdate",
  SERVER_UPDATE = "ServerUpdate",
  USER_RELATIONSHIP = "UserRelationship",
  USER_UPDATE = "UserUpdate",
  USER_PLATFORM_WIPE = "UserPlatformWipe",
  WEBHOOKS_CREATE = "WebhooksCreate",
  WEBHOOKS_DELETE = "WebhooksDelete",
  WEBHOOKS_UPDATE = "WebhooksUpdate",
  VOICE_STATE_UPDATE = "VoiceStateUpdate",
  VOICE_CHANNEL_JOIN = "VoiceChannelJoin",
  VOICE_CHANNEL_LEAVE = "VoiceChannelLeave",
  LOGOUT = "Logout",
  AUTH = "Auth",
}

/**
 * Enum representing the types of channels supported by the client.
 * Matches Stoat/Revolt channel_type values.
 */
export enum ChannelTypes {
  DM = "DirectMessage",
  GROUP = "GroupDM",
  TEXT = "TextChannel",
  VOICE = "VoiceChannel",
  NOTES = "SavedMessages",
}

/**
 * Enum representing the relationship status between users.
 */
export enum RelationshipStatus {
  NONE = "None",
  USER = "User",
  FRIEND = "Friend",
  BLOCKED = "Blocked",
  PENDING_INCOMING = "PendingIncoming",
  PENDING_OUTGOING = "PendingOutgoing",
  IMPLICIT = "Implicit",
}

/**
 * The default options for configuring the selfbot client.
 */
export const DEFAULT_CLIENT_OPTIONS: clientOptions = {
  fetchMembers: true,
  rest: {
    timeout: 15000,
    retries: 3,
  },
  MessageCache: {
    maxSize: 1000,
  },
  ws: {
    heartbeatInterval: 30000,
    reconnect: true,
  },
};

// ─── Stoat API URLs ──────────────────────────────────────────────────────────

/** The base API URL for interacting with the Stoat API. */
export const apiUrl = "https://api.stoat.chat";

/** The WebSocket URL for real-time events. */
export const wsUrl = "wss://events.stoat.chat";

/** The CDN URL for file uploads and serving. */
export const cdnUrl = "https://cdn.stoatusercontent.com";

/** The proxy URL for external content. */
export const proxyUrl = "https://external.stoatusercontent.com";

/** The Stoat web app URL. */
export const appUrl = "https://stoat.chat";

/** The system user ID used for identifying system messages. */
export const SYSTEM_USER_ID = "0".repeat(UUID.TIME_LENGTH + UUID.RANDOM_LENGTH);
