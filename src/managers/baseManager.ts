import type { Client } from "../client/client";
import { Collection } from "../utils/collection";

/**
 * Abstract base class for all managers.
 * Provides caching with configurable max size and LRU eviction.
 *
 * Inspired by discord.js-selfbot-v13's DataManager/CachedManager pattern.
 *
 * @typeParam Holds - The type of objects this manager holds (must have an `id` property).
 * @typeParam R - The raw API data type used to construct objects.
 */
export abstract class BaseManager<Holds extends { id: string }, R = unknown> {
  /** Shared default max size for all managers (can be changed globally). -1 = unlimited. */
  static defaultMaxSize = -1;

  /** Insertion ordered cache of items this manager holds. */
  readonly cache = new Collection<string, Holds>();

  /** Instance level max size. */
  protected maxSize: number;

  /** The constructor for the class this manager holds. */
  abstract readonly holds: (new (...args: any[]) => Holds) | null;

  constructor(
    protected readonly client: Client,
    maxSize = BaseManager.defaultMaxSize,
  ) {
    this.maxSize = maxSize;
  }

  /**
   * Adds a raw object to the cache, constructing the holdable class.
   * If the object already exists in cache, it patches the existing entry.
   * Automatically evicts oldest entries if the max size is exceeded.
   * @param raw The raw API data.
   * @param cache Whether to cache the object (default: true).
   * @param extras Extra arguments to pass to the constructor.
   * @returns The constructed or patched instance.
   * @private
   */
  _add(raw: R, cache = true, { id, extras }: { id?: string; extras?: any[] } = {}): Holds {
    const existing = id ? this.cache.get(id) : null;

    if (existing && cache) {
      // Patch existing entry if _patch method exists
      if (typeof (existing as any)._patch === "function") {
        (existing as any)._patch(raw, ...((extras as any[]) ?? []));
      }
      return existing;
    }

    if (!this.holds) throw new Error("Holds is not defined");
    const obj = new this.holds(this.client, raw, ...((extras as any[]) ?? []));

    if (cache) {
      this.cache.set(obj.id, obj);
      this.enforceMaxSize();
    }

    return obj;
  }

  /**
   * Remove an entry by id.
   * @param id The ID of the entry to remove.
   * @returns True if the entry was removed, false if it didn't exist.
   * @private
   */
  _remove(id: string): boolean {
    return this.cache.delete(id);
  }

  /**
   * Adjust the maximum size for this manager at runtime.
   * @param size The new max size. -1 for unlimited, 0 to disable caching.
   */
  setMaxSize(size: number): void {
    if (!Number.isFinite(size) || size < -1)
      throw new RangeError("maxSize must be a non-negative finite number or -1");
    this.maxSize = size;
    this.enforceMaxSize();
  }

  /**
   * Force eviction until cache size is within the limit.
   * Uses LRU (Least Recently Used) eviction strategy.
   */
  protected enforceMaxSize(): void {
    if (this.maxSize === -1) return;
    if (this.maxSize === 0) {
      this.cache.clear();
      return;
    }
    while (this.cache.size > this.maxSize) {
      const oldestKey = this.cache.keys().next().value as string | undefined;
      if (oldestKey === undefined) break;
      this.cache.delete(oldestKey);
    }
  }

  /**
   * Resolves a resolvable to the held object.
   * @param resolvable A held object, ID string, or raw data.
   * @returns The held object or null.
   */
  resolve(resolvable: Holds): Holds | null;
  resolve(resolvable: string): Holds | null;
  resolve(resolvable: R): Holds | null;
  resolve(resolvable: string | R | Holds): Holds | null {
    const id = this.resolveId(resolvable);
    if (id) return this.cache.get(id) ?? null;
    return null;
  }

  /**
   * Resolves a resolvable to the ID string.
   * @param resolvable A held object, ID string, or raw data.
   * @returns The ID string or null.
   */
  resolveId(resolvable: string | Holds | R): string | null {
    if (resolvable == null) return null;
    if (typeof resolvable === "string") return resolvable;
    if (this.holds && resolvable instanceof this.holds) return resolvable.id;
    // FIX: was missing return for raw objects with _id
    if (typeof resolvable === "object" && "_id" in (resolvable as any)) {
      return (resolvable as any)._id ?? null;
    }
    if (typeof resolvable === "object" && "id" in (resolvable as any)) {
      return (resolvable as any).id ?? null;
    }
    return null;
  }

  /**
   * Returns the number of items in the cache.
   */
  get size(): number {
    return this.cache.size;
  }

  /**
   * Checks if an item with the given ID exists in the cache.
   * @param id The ID to check.
   */
  has(id: string): boolean {
    return this.cache.has(id);
  }

  /**
   * Gets an item from the cache by ID.
   * @param id The ID of the item.
   */
  get(id: string): Holds | undefined {
    return this.cache.get(id);
  }

  /**
   * Clears the entire cache.
   */
  clear(): void {
    this.cache.clear();
  }

  valueOf(): Collection<string, Holds> {
    return this.cache;
  }
}
