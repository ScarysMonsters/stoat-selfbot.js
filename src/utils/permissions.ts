import { BitField } from "./bitField";

// ─── Resolvable Types ──────────────────────────────────────────────────────

export type FullPermissionsString = keyof typeof FullPermissions.FLAGS;
export type ChannelPermissionsString = keyof typeof ChannelPermissions.FLAGS;
export type UserPermissionsString = keyof typeof UserPermissions.FLAGS;
export type ServerPermissionsString = keyof typeof ServerPermissions.FLAGS;

export type FullPermissionsResolvable =
  | number
  | FullPermissionsString
  | FullPermissions
  | FullPermissionsResolvable[];
export type ChannelPermissionsResolvable =
  | number
  | ChannelPermissionsString
  | ChannelPermissions
  | ChannelPermissionsResolvable[];
export type UserPermissionsResolvable =
  | number
  | UserPermissionsString
  | UserPermissions
  | UserPermissionsResolvable[];
export type ServerPermissionsResolvable =
  | number
  | ServerPermissionsString
  | ServerPermissions
  | ServerPermissionsResolvable[];

// ─── Declare Interfaces (for type narrowing) ───────────────────────────────

export declare interface FullPermissions {
  serialize(): Record<FullPermissionsString, boolean>;
  any(bit: FullPermissionsResolvable): boolean;
  add(...bits: FullPermissionsResolvable[]): this;
  remove(...bits: FullPermissionsResolvable[]): this;
  has(bit: FullPermissionsResolvable): boolean;
  missing(bit: FullPermissionsResolvable): FullPermissionsString[];
  toArray(): FullPermissionsString[];
}

export declare interface ChannelPermissions {
  serialize(): Record<ChannelPermissionsString, boolean>;
  any(bit: ChannelPermissionsResolvable): boolean;
  add(...bits: ChannelPermissionsResolvable[]): this;
  remove(...bits: ChannelPermissionsResolvable[]): this;
  has(bit: ChannelPermissionsResolvable): boolean;
  missing(bit: ChannelPermissionsResolvable): ChannelPermissionsString[];
  toArray(): ChannelPermissionsString[];
}

export declare interface UserPermissions {
  serialize(): Record<UserPermissionsString, boolean>;
  any(bit: UserPermissionsResolvable): boolean;
  add(...bits: UserPermissionsResolvable[]): this;
  remove(...bits: UserPermissionsResolvable[]): this;
  has(bit: UserPermissionsResolvable): boolean;
  missing(bit: UserPermissionsResolvable): UserPermissionsString[];
  toArray(): UserPermissionsString[];
}

export declare interface ServerPermissions {
  serialize(): Record<ServerPermissionsString, boolean>;
  any(bit: ServerPermissionsResolvable): boolean;
  add(...bits: ServerPermissionsResolvable[]): this;
  remove(...bits: ServerPermissionsResolvable[]): this;
  has(bit: ServerPermissionsResolvable): boolean;
  missing(bit: ServerPermissionsResolvable): ServerPermissionsString[];
  toArray(): ServerPermissionsString[];
}

// ─── Permission Bit Values (aligned with Stoat API) ────────────────────────
// Reference: https://developers.stoat.chat/api-reference
// Stoat uses 1 << N for permissions, matching the Revolt permission model.

/**
 * Full permission flags matching the complete Stoat/Revolt permission system.
 * Uses 1 << N (power of 2) for correct bitfield calculation.
 * These are the canonical permission flags used throughout the API.
 */
export class FullPermissions extends BitField {
  static readonly FLAGS = {
    // ── Generic permissions ──
    /// Manage the channel or channels on the server
    ManageChannel: 1 << 0,
    /// Manage the server
    ManageServer: 1 << 1,
    /// Manage permissions on servers or channels
    ManagePermissions: 1 << 2,
    /// Manage roles on server
    ManageRole: 1 << 3,
    /// Manage server customisation (includes emoji)
    ManageCustomisation: 1 << 4,

    // ── Member permissions ──
    /// Kick other members below their ranking
    KickMembers: 1 << 6,
    /// Ban other members below their ranking
    BanMembers: 1 << 7,
    /// Timeout other members below their ranking
    TimeoutMembers: 1 << 8,
    /// Assign roles to members below their ranking
    AssignRoles: 1 << 9,
    /// Change own nickname
    ChangeNickname: 1 << 10,
    /// Change or remove other's nicknames below their ranking
    ManageNicknames: 1 << 11,
    /// Change own avatar
    ChangeAvatar: 1 << 12,
    /// Remove other's avatars below their ranking
    RemoveAvatars: 1 << 13,

    // ── Channel permissions ──
    /// View a channel
    ViewChannel: 1 << 20,
    /// Read a channel's past message history
    ReadMessageHistory: 1 << 21,
    /// Send a message in a channel
    SendMessage: 1 << 22,
    /// Delete messages in a channel
    ManageMessages: 1 << 23,
    /// Manage webhook entries on a channel
    ManageWebhooks: 1 << 24,
    /// Create invites to this channel
    InviteOthers: 1 << 25,
    /// Send embedded content in this channel
    SendEmbeds: 1 << 26,
    /// Send attachments and media in this channel
    UploadFiles: 1 << 27,
    /// Masquerade messages using custom nickname and avatar
    Masquerade: 1 << 28,
    /// React to messages with emoji
    React: 1 << 29,

    // ── Voice permissions ──
    /// Connect to a voice channel
    Connect: 1 << 30,
    /// Speak in a voice call
    Speak: 1 << 31,
    /// Share video in a voice call
    Video: 1 << 32,
    /// Mute other members with lower ranking in a voice call
    MuteMembers: 1 << 33,
    /// Deafen other members with lower ranking in a voice call
    DeafenMembers: 1 << 34,
    /// Move members between voice channels
    MoveMembers: 1 << 35,

    // ── Mention permissions ──
    /// Mention @everyone or @online
    MentionEveryone: 1 << 37,
    /// Mention a role
    MentionRoles: 1 << 38,

    // ── Grant all permissions ──
    /// Safely grant all permissions
    GrantAll: 0x000f_ffff_ffff_ffff,
  } as const;

  /** All permission bits combined */
  static readonly ALL = Object.values(FullPermissions.FLAGS).reduce(
    (all, p) => all | p,
    0,
  );

  /** Default server permissions */
  static readonly DEFAULT_SERVER = 0;

  /** Default DM permissions */
  static readonly DEFAULT_DM =
    FullPermissions.FLAGS.ViewChannel |
    FullPermissions.FLAGS.SendMessage |
    FullPermissions.FLAGS.SendEmbeds |
    FullPermissions.FLAGS.UploadFiles |
    FullPermissions.FLAGS.Connect |
    FullPermissions.FLAGS.Speak;

  constructor(bits?: FullPermissionsResolvable) {
    super(bits);
  }

  static resolve(bit: FullPermissionsResolvable): number {
    return super.resolve(bit);
  }
}

/**
 * Channel-specific permissions subset.
 * These are the permissions applicable at the channel level.
 */
export class ChannelPermissions extends BitField {
  static readonly FLAGS = {
    /// View a channel
    VIEW_CHANNEL: 1 << 20,
    /// Read a channel's past message history
    READ_MESSAGE_HISTORY: 1 << 21,
    /// Send a message in a channel
    SEND_MESSAGE: 1 << 22,
    /// Delete messages in a channel
    MANAGE_MESSAGES: 1 << 23,
    /// Manage webhook entries on a channel
    MANAGE_WEBHOOKS: 1 << 24,
    /// Create invites to this channel
    INVITE_OTHERS: 1 << 25,
    /// Send embedded content in this channel
    SEND_EMBEDS: 1 << 26,
    /// Send attachments and media in this channel
    UPLOAD_FILES: 1 << 27,
    /// Masquerade messages using custom nickname and avatar
    MASQUERADE: 1 << 28,
    /// React to messages with emoji
    REACT: 1 << 29,
    /// Connect to a voice channel
    CONNECT: 1 << 30,
    /// Speak in a voice call
    SPEAK: 1 << 31,
    /// Manage the channel
    MANAGE_CHANNEL: 1 << 0,
    /// Voice call
    VOICE_CALL: 1 << 30,
  } as const;

  constructor(bits?: ChannelPermissionsResolvable) {
    super(bits);
  }

  static resolve(bit: ChannelPermissionsResolvable): number {
    return super.resolve(bit);
  }
}

/**
 * User-specific permissions.
 * Permissions that apply to user-level interactions.
 */
export class UserPermissions extends BitField {
  static readonly FLAGS = {
    /// Access the platform
    ACCESS: 1 << 0,
    /// View another user's profile
    VIEW_PROFILE: 1 << 1,
    /// Send messages to other users
    SEND_MESSAGES: 1 << 2,
    /// Create invite links
    INVITE: 1 << 3,
  } as const;

  constructor(bits?: UserPermissionsResolvable) {
    super(bits);
  }

  static resolve(bit: UserPermissionsResolvable): number {
    return super.resolve(bit);
  }
}

/**
 * Server-specific permissions subset.
 * Permissions applicable at the server (guild) level.
 */
export class ServerPermissions extends BitField {
  static readonly FLAGS = {
    /// View the server
    VIEW_SERVER: 1 << 20,
    /// Manage roles on the server
    MANAGE_ROLES: 1 << 3,
    /// Manage channels on the server
    MANAGE_CHANNELS: 1 << 0,
    /// Manage the server
    MANAGE_SERVER: 1 << 1,
    /// Manage permissions
    MANAGE_PERMISSIONS: 1 << 2,
    /// Manage server customisation (emoji)
    MANAGE_CUSTOMISATION: 1 << 4,
    /// Kick other members below their ranking
    KICK_MEMBERS: 1 << 6,
    /// Ban other members below their ranking
    BAN_MEMBERS: 1 << 7,
    /// Timeout other members below their ranking
    TIMEOUT_MEMBERS: 1 << 8,
    /// Assign roles to members
    ASSIGN_ROLES: 1 << 9,
    /// Change own nickname
    CHANGE_NICKNAME: 1 << 10,
    /// Change or remove other's nicknames
    MANAGE_NICKNAMES: 1 << 11,
    /// Change own avatar
    CHANGE_AVATAR: 1 << 12,
    /// Remove other's avatars
    REMOVE_AVATARS: 1 << 13,
  } as const;

  constructor(bits?: ServerPermissionsResolvable) {
    super(bits);
  }

  static resolve(bit: ServerPermissionsResolvable): number {
    return super.resolve(bit);
  }
}

/**
 * Default DM channel permissions as a frozen ChannelPermissions instance.
 */
export const DEFAULT_PERMISSION_DM = new ChannelPermissions([
  "VIEW_CHANNEL",
  "SEND_MESSAGE",
  "MANAGE_CHANNEL",
  "CONNECT",
  "SPEAK",
  "SEND_EMBEDS",
  "UPLOAD_FILES",
]).freeze();

/**
 * Default server permission value (as number) matching the Stoat API default.
 */
export const DEFAULT_PERMISSION_SERVER = 0;

/**
 * Helper to compute the effective permission allow/deny for a role override.
 * The Stoat API uses { a: number, d: number } format where:
 *   a = allow bits (1 << N)
 *   d = deny bits (1 << N)
 */
export interface PermissionOverride {
  allow: number;
  deny: number;
}

/**
 * Compute the effective permission for a member given server and channel overrides.
 * Follows the Stoat permission resolution algorithm:
 * 1. Start with server default permissions
 * 2. Apply user's role permissions (OR together all role allows)
 * 3. Apply channel role overrides for each role the member has
 * 4. Apply channel @everyone override
 * 5. Apply channel member-specific override
 *
 * @param base - The server default permission number
 * @param roleAllows - Array of role permission allow values
 * @param channelRoleOverrides - Map of roleId → PermissionOverride for channel
 * @param memberOverride - Member-specific PermissionOverride for channel
 * @returns The computed permission number
 */
export function computePermissions(
  base: number,
  roleAllows: number[] = [],
  channelRoleOverrides: Map<string, PermissionOverride> = new Map(),
  memberOverride?: PermissionOverride,
): number {
  // Start with the server default
  let permissions = base;

  // OR all role allows together
  for (const allow of roleAllows) {
    permissions |= allow;
  }

  // Apply channel overrides for each role
  for (const [roleId, override] of channelRoleOverrides) {
    permissions &= ~override.deny; // Remove denied permissions
    permissions |= override.allow; // Add allowed permissions
  }

  // Apply member-specific override
  if (memberOverride) {
    permissions &= ~memberOverride.deny;
    permissions |= memberOverride.allow;
  }

  // GrantAll overrides everything
  if (permissions & FullPermissions.FLAGS.GrantAll) {
    return FullPermissions.ALL;
  }

  return permissions;
}
