import { NotesChannel, Status, User } from "./index";
import type {
  User as APIUser,
  DataEditUser,
  UserProfile,
} from "revolt-api";
import type { Client } from "../client/client";

/**
 * Represents the client user, which is the authenticated user.
 * Extends User with selfbot-specific methods for managing profile and status.
 *
 * @extends User
 */
export class ClientUser extends User {
  /** The notes channel associated with the client user, if any. */
  notes: NotesChannel | null = null;

  /** The bot owner ID, if this account is a bot. */
  owner: string | null = null;

  /** The user's profile content, if any. */
  profileContent: string | null = null;

  /** The user's profile background, if any. */
  profileBackground: string | null = null;

  constructor(client: Client, data: APIUser) {
    super(client, data);
    this._patch(data);
    this.owner = data.bot?.owner || null;
  }

  /**
   * Updates the client user with new data.
   * @protected
   */
  protected _patch(data: APIUser, ...args: any[]): this {
    super._patch(data, ...args);

    if (data.bot?.owner) {
      this.owner = data.bot.owner;
    }

    if (data.discriminator) {
      this.discriminator = data.discriminator;
    }

    if ("display_name" in data) {
      this.displayName = data.display_name ?? null;
    }

    if (Array.isArray(data.relations)) {
      this.relations = data.relations;
    }

    if (typeof data.online === "boolean") {
      this.online = data.online;
    }

    return this;
  }

  /**
   * Updates the username of the client user.
   *
   * @param {string} username - The new username to set.
   * @param {string} [password] - The current password of the user (required for non-bot accounts).
   * @returns {Promise<void>} A promise that resolves when the username has been successfully updated.
   * @throws {Error} Throws an error if the client user is a bot and a password is provided.
   *
   * @example
   * ```typescript
   * await clientUser.setUsername("NewUsername", "CurrentPassword");
   * ```
   */
  async setUsername(username: string, password?: string): Promise<void> {
    if (this.bot && password) {
      throw new Error("Bots do not have passwords");
    }

    await this.client.api.patch("/users/@me/username", {
      username,
      password,
    });
    this.username = username;
  }

  /**
   * Updates the status of the client user.
   *
   * @param {string | null} [text] - The status text to set, or `null` to clear the status.
   * @param {Status} [presence] - The presence status (e.g., Online, Idle, etc.).
   * @returns {Promise<void>} A promise that resolves when the status has been successfully updated.
   *
   * @example
   * ```typescript
   * await clientUser.setStatus("Available", "Online");
   * ```
   */
  async setStatus(text?: string | null, presence?: keyof typeof Status): Promise<void>;
  async setStatus(presence?: Status): Promise<void>;
  async setStatus(text?: unknown, presence?: unknown): Promise<void> {
    // If 'text' is a valid key of Status, treat it as presence
    if (typeof text === "string" && text in Status && !presence) {
      presence = text as keyof typeof Status;
      text = undefined;
    }
    const status = {
      text: (text as string) ?? this.presence.text,
      presence: (presence as string) ?? this.presence.status,
    };
    await this.client.api.patch(`/users/${this.id}`, {
      status,
    });
  }

  /**
   * Edits the client user's profile.
   *
   * @param options The profile fields to edit.
   * @returns A promise that resolves when the profile is updated.
   *
   * @example
   * ```typescript
   * await clientUser.editProfile({
   *   profile: { content: "Hello, I'm using stoat-selfbot.js!" },
   * });
   * ```
   */
  async editProfile(options: DataEditUser): Promise<void> {
    await this.client.api.patch(`/users/${this.id}`, options);
    if (options.profile?.content) this.profileContent = options.profile.content;
    if (options.profile?.background) this.profileBackground = options.profile.background;
    if (options.display_name !== undefined) this.displayName = options.display_name ?? null;
    if (options.avatar === null) this.avatar = null;
  }

  /**
   * Changes the client user's password.
   *
   * @param currentPassword The current password.
   * @param newPassword The new password.
   */
  async changePassword(
    currentPassword: string,
    newPassword: string,
  ): Promise<void> {
    await this.client.api.patch("/auth/account/change/password", {
      currentPassword,
      newPassword,
    });
  }

  /**
   * Changes the client user's email.
   *
   * @param newEmail The new email address.
   * @param currentPassword The current password for verification.
   */
  async changeEmail(newEmail: string, currentPassword: string): Promise<void> {
    await this.client.api.patch("/auth/account/change/email", {
      email: newEmail,
      currentPassword,
    });
  }

  /**
   * Fetches the client user's profile.
   *
   * @returns {Promise<UserProfile>} A promise that resolves with the client user's profile.
   *
   * @example
   * ```typescript
   * const profile = await clientUser.fetchProfile();
   * ```
   */
  async fetchProfile(): Promise<UserProfile> {
    const data = await this.client.api.get<UserProfile>(`/users/${this.id}/profile`);
    this.profile = data;
    return data;
  }

  /**
   * Sets the display name of the client user.
   *
   * @param {string} name - The new display name.
   * @returns {Promise<void>} A promise that resolves when the display name is updated.
   *
   * @example
   * ```typescript
   * await clientUser.setDisplayName("Cool Display Name");
   * ```
   */
  async setDisplayName(name: string): Promise<void> {
    await this.client.api.patch("/users/@me", {
      display_name: name,
    });
    this.displayName = name;
  }

  /**
   * Sets the avatar of the client user.
   *
   * @param {string | null} avatar - The avatar ID to set, or `null` to remove the avatar.
   * @returns {Promise<void>} A promise that resolves when the avatar is updated.
   *
   * @example
   * ```typescript
   * await clientUser.setAvatar("avatar_id_here");
   * await clientUser.setAvatar(null); // Remove avatar
   * ```
   */
  async setAvatar(avatar: string | null): Promise<void> {
    await this.client.api.patch("/users/@me", {
      avatar,
    });
    if (avatar === null) {
      this.avatar = null;
    }
  }

  /**
   * Fetches the client user's flags.
   *
   * @returns The flags value.
   */
  async fetchFlags(): Promise<number> {
    const data = await this.client.api.get<{ flags: number }>(`/users/${this.id}/flags`);
    this.flags = data.flags;
    return data.flags;
  }
}
