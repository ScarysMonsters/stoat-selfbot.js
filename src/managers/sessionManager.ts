import type { Client } from "../client/client";
import { Collection } from "../utils/collection";

/**
 * Represents a session's information from the API.
 */
export interface SessionInfo {
  id: string;
  name?: string;
  hostname?: string;
  created_at?: string;
  last_used_at?: string;
  current?: boolean;
}

/**
 * Manages the authenticated user's sessions.
 * Provides methods to list, edit, and delete sessions.
 *
 * @example
 * ```typescript
 * // Fetch all sessions
 * const sessions = await client.sessions.fetchAll();
 * console.log(`You have ${sessions.size} active sessions`);
 *
 * // Edit a session's friendly name
 * await client.sessions.edit(sessionId, { name: "My Laptop" });
 *
 * // Delete (revoke) a session
 * await client.sessions.delete(sessionId);
 *
 * // Logout (revoke current session)
 * await client.sessions.logout();
 * ```
 */
export class SessionManager {
  readonly client: Client;
  readonly cache = new Collection<string, SessionInfo>();

  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Fetches all sessions for the authenticated user.
   * Caches the results.
   *
   * @returns A collection of session info keyed by session ID.
   */
  async fetchAll(): Promise<Collection<string, SessionInfo>> {
    const data: any = await this.client.api.get("/auth/session/all");
    const sessions = Array.isArray(data) ? data : [];
    this.cache.clear();
    for (const session of sessions) {
      const sessionInfo = session as SessionInfo;
      this.cache.set(sessionInfo.id, sessionInfo);
    }
    return this.cache;
  }

  /**
   * Edits a session's properties (e.g. friendly name).
   * Updates the cache if the session is present.
   *
   * @param sessionId - The ID of the session to edit.
   * @param options - The properties to update.
   */
  async edit(sessionId: string, options: { name?: string }): Promise<void> {
    await this.client.api.patch(`/auth/session/${sessionId}`, options);
    // Update cache if the session is present
    const cached = this.cache.get(sessionId);
    if (cached && options.name !== undefined) {
      cached.name = options.name;
    }
  }

  /**
   * Deletes (revokes) a session by ID.
   * Removes the session from the cache.
   *
   * @param sessionId - The ID of the session to delete.
   */
  async delete(sessionId: string): Promise<void> {
    await this.client.api.delete(`/auth/session/${sessionId}`);
    this.cache.delete(sessionId);
  }

  /**
   * Logs out the current session.
   * This effectively revokes the session token used by this client.
   *
   * After calling this, the client will no longer be able to make API requests.
   */
  async logout(): Promise<void> {
    await this.client.api.delete("/auth/session/logout");
    this.cache.clear();
  }
}
