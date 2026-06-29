import { Base } from "./base";
import type { Client } from "../client/client";
import type { User } from "./user";
import type { Relationship as APIRelationship } from "revolt-api";
import { RelationshipStatus } from "../utils/constants";
import { UUID } from "../utils/index";

/**
 * Represents a relationship between the client user and another user.
 * Relationships can be: Friend, Blocked, Incoming, Outgoing, Implicit.
 *
 * Inspired by discord.js-selfbot-v13's Relationship system.
 *
 * @extends Base
 */
export class Relationship extends Base {
  /** The status of the relationship. */
  status: RelationshipStatus = RelationshipStatus.NONE;

  /** The ID of the target user. */
  targetId!: string;

  /**
   * Creates a new Relationship instance.
   *
   * @param {Client} client - The client instance.
   * @param {APIRelationship} data - The raw relationship data from the API.
   */
  constructor(client: Client, data: APIRelationship) {
    super(client);
    this._patch(data);
  }

  /**
   * Updates the relationship with new data.
   *
   * @param {APIRelationship} data - The raw relationship data from the API.
   * @returns {this} This relationship instance.
   * @protected
   */
  protected _patch(data: APIRelationship): this {
    super._patch(data);

    if (data._id) {
      this.targetId = data._id;
    }

    if (data.status) {
      this.status = this._mapStatus(data.status);
    }

    return this;
  }

  /**
   * Maps an API relationship status string to the local RelationshipStatus enum.
   *
   * @param {string} status - The raw status string from the API.
   * @returns {RelationshipStatus} The mapped relationship status.
   * @private
   */
  private _mapStatus(status: string): RelationshipStatus {
    const mapping: Record<string, RelationshipStatus> = {
      None: RelationshipStatus.NONE,
      User: RelationshipStatus.USER,
      Friend: RelationshipStatus.FRIEND,
      Blocked: RelationshipStatus.BLOCKED,
      BlockedOther: RelationshipStatus.BLOCKED,
      Incoming: RelationshipStatus.PENDING_INCOMING,
      PendingIncoming: RelationshipStatus.PENDING_INCOMING,
      Outgoing: RelationshipStatus.PENDING_OUTGOING,
      PendingOutgoing: RelationshipStatus.PENDING_OUTGOING,
      Implicit: RelationshipStatus.IMPLICIT,
    };
    return mapping[status] ?? (status as RelationshipStatus);
  }

  /**
   * Gets the target user of this relationship.
   * Returns `null` if the user is not cached.
   */
  get user(): User | null {
    return this.client.users.cache.get(this.targetId) ?? null;
  }

  /**
   * Gets the relationship type as a human-readable string.
   */
  get type(): string {
    const names: Record<RelationshipStatus, string> = {
      [RelationshipStatus.NONE]: "None",
      [RelationshipStatus.USER]: "User",
      [RelationshipStatus.FRIEND]: "Friend",
      [RelationshipStatus.BLOCKED]: "Blocked",
      [RelationshipStatus.PENDING_INCOMING]: "Pending Incoming",
      [RelationshipStatus.PENDING_OUTGOING]: "Pending Outgoing",
      [RelationshipStatus.IMPLICIT]: "Implicit",
    };
    return names[this.status] ?? "Unknown";
  }

  /**
   * Gets the creation date of the target user (derived from their ID).
   */
  get createdAt(): Date {
    return UUID.timestampOf(this.targetId);
  }

  /**
   * Whether this relationship is a friendship.
   */
  get isFriend(): boolean {
    return this.status === RelationshipStatus.FRIEND;
  }

  /**
   * Whether this relationship is a block.
   */
  get isBlocked(): boolean {
    return this.status === RelationshipStatus.BLOCKED;
  }

  /**
   * Whether this is a pending incoming friend request.
   */
  get isPendingIncoming(): boolean {
    return this.status === RelationshipStatus.PENDING_INCOMING;
  }

  /**
   * Whether this is a pending outgoing friend request.
   */
  get isPendingOutgoing(): boolean {
    return this.status === RelationshipStatus.PENDING_OUTGOING;
  }

  /**
   * Whether this is an implicit relationship (e.g. shared server or group).
   */
  get isImplicit(): boolean {
    return this.status === RelationshipStatus.IMPLICIT;
  }

  /**
   * Fetches the full user data for the target of this relationship.
   *
   * @returns {Promise<User>} A promise that resolves with the target user.
   *
   * @example
   * ```typescript
   * const targetUser = await relationship.fetchUser();
   * ```
   */
  async fetchUser(): Promise<User> {
    return this.client.users.fetch(this.targetId);
  }

  /**
   * Accepts this friend request.
   * Only works if the status is PendingIncoming.
   */
  async accept(): Promise<void> {
    if (this.status !== RelationshipStatus.PENDING_INCOMING) {
      throw new Error("Can only accept pending incoming friend requests");
    }
    await this.client.api.put(`/users/${this.targetId}/friend`);
  }

  /**
   * Declines or removes this friend request/relationship.
   */
  async remove(): Promise<void> {
    await this.client.api.delete(`/users/${this.targetId}/friend`);
  }

  /**
   * Blocks the target user.
   */
  async block(): Promise<void> {
    await this.client.api.put(`/users/${this.targetId}/block`);
  }

  /**
   * Unblocks the target user.
   */
  async unblock(): Promise<void> {
    await this.client.api.delete(`/users/${this.targetId}/block`);
  }

  toString(): string {
    return `Relationship { target: ${this.targetId}, status: ${this.type} }`;
  }
}
