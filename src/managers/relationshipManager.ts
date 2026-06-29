import { BaseManager } from "./baseManager";
import type { Client } from "../client/client";
import type { Relationship } from "../struct/relationship";
import { RelationshipStatus } from "../utils/constants";

/**
 * Manages the client user's relationships (friends, blocked users, pending requests).
 * Inspired by discord.js-selfbot-v13's RelationshipManager.
 *
 * @extends BaseManager
 */
export class RelationshipManager extends BaseManager<Relationship> {
  readonly holds = null; // Relationships are constructed manually

  constructor(client: Client) {
    super(client);
  }

  /**
   * Adds a relationship to the cache.
   * @param data The raw relationship data.
   * @returns The cached relationship.
   * @private
   */
  _add(data: any): Relationship {
    const { Relationship } = require("../struct/relationship");
    const existing = this.cache.get(data._id);
    if (existing) {
      (existing as any).status = data.status;
      return existing;
    }
    const relationship = new Relationship(this.client, data);
    this.cache.set(relationship.targetId ?? relationship.id, relationship);
    return relationship;
  }

  /**
   * Gets all friends.
   */
  get friends(): Relationship[] {
    return [...this.cache.values()].filter(
      (r) => r.status === RelationshipStatus.FRIEND,
    );
  }

  /**
   * Gets all blocked users.
   */
  get blocked(): Relationship[] {
    return [...this.cache.values()].filter(
      (r) => r.status === RelationshipStatus.BLOCKED,
    );
  }

  /**
   * Gets all pending incoming friend requests.
   */
  get pendingIncoming(): Relationship[] {
    return [...this.cache.values()].filter(
      (r) => r.status === RelationshipStatus.PENDING_INCOMING,
    );
  }

  /**
   * Gets all pending outgoing friend requests.
   */
  get pendingOutgoing(): Relationship[] {
    return [...this.cache.values()].filter(
      (r) => r.status === RelationshipStatus.PENDING_OUTGOING,
    );
  }

  /**
   * Sends a friend request by username.
   * @param username The username to send the friend request to.
   */
  async sendFriendRequest(username: string): Promise<void> {
    await this.client.api.post("/users/friend", { username });
  }

  /**
   * Accepts a friend request.
   * @param userId The user ID whose request to accept.
   */
  async acceptFriendRequest(userId: string): Promise<void> {
    await this.client.api.put(`/users/${userId}/friend`);
  }

  /**
   * Removes a friend or declines a friend request.
   * @param userId The user ID to remove.
   */
  async removeFriend(userId: string): Promise<void> {
    await this.client.api.delete(`/users/${userId}/friend`);
  }

  /**
   * Blocks a user.
   * @param userId The user ID to block.
   */
  async blockUser(userId: string): Promise<void> {
    await this.client.api.put(`/users/${userId}/block`);
  }

  /**
   * Unblocks a user.
   * @param userId The user ID to unblock.
   */
  async unblockUser(userId: string): Promise<void> {
    await this.client.api.delete(`/users/${userId}/block`);
  }

  /**
   * Fetches mutual friends, servers, and groups with a user.
   * @param userId The user ID.
   */
  async fetchMutual(userId: string): Promise<{ users: string[]; servers: string[] }> {
    return this.client.api.get(`/users/${userId}/mutual`);
  }

  /**
   * Checks if a user is a friend.
   * @param userId The user ID.
   */
  isFriend(userId: string): boolean {
    const r = this.cache.get(userId);
    return r?.status === RelationshipStatus.FRIEND;
  }

  /**
   * Checks if a user is blocked.
   * @param userId The user ID.
   */
  isBlocked(userId: string): boolean {
    const r = this.cache.get(userId);
    return r?.status === RelationshipStatus.BLOCKED;
  }
}
