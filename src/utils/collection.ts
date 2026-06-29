/**
 * A discord.js-style Collection class that extends Map with utility methods.
 *
 * @typeParam K - The key type (typically string).
 * @typeParam V - The value type.
 */
export class Collection<K, V> extends Map<K, V> {
  /**
   * Identifies items that pass a test, returning a new Collection with only those items.
   * @param fn Test function called with (value, key, collection).
   */
  filter(fn: (value: V, key: K, collection: this) => boolean): Collection<K, V> {
    const result = new Collection<K, V>();
    for (const [key, value] of this) {
      if (fn(value, key, this)) {
        result.set(key, value);
      }
    }
    return result;
  }

  /**
   * Searches for a single item that passes the test and returns its value.
   * @param fn Test function called with (value, key, collection).
   */
  find(fn: (value: V, key: K, collection: this) => boolean): V | undefined {
    for (const [key, value] of this) {
      if (fn(value, key, this)) return value;
    }
    return undefined;
  }

  /**
   * Maps each item to a new value, returning an array of results.
   * @param fn Mapping function called with (value, key, collection).
   */
  map<T>(fn: (value: V, key: K, collection: this) => T): T[] {
    const result: T[] = [];
    for (const [key, value] of this) {
      result.push(fn(value, key, this));
    }
    return result;
  }

  /**
   * Checks whether at least one item passes the test.
   * @param fn Test function called with (value, key, collection).
   */
  some(fn: (value: V, key: K, collection: this) => boolean): boolean {
    for (const [key, value] of this) {
      if (fn(value, key, this)) return true;
    }
    return false;
  }

  /**
   * Checks whether every item passes the test.
   * @param fn Test function called with (value, key, collection).
   */
  every(fn: (value: V, key: K, collection: this) => boolean): boolean {
    for (const [key, value] of this) {
      if (!fn(value, key, this)) return false;
    }
    return true;
  }

  /**
   * Reduces the Collection to a single value.
   * @param fn Reducer function called with (accumulator, value, key, collection).
   * @param initialValue The initial value for the accumulator.
   */
  reduce<T>(fn: (accumulator: T, value: V, key: K, collection: this) => T, initialValue?: T): T {
    let accumulator: T = initialValue as T;

    if (accumulator === undefined) {
      const firstEntry = this.entries().next().value;
      if (firstEntry === undefined) {
        throw new TypeError("Reduce of empty Collection with no initial value");
      }
      accumulator = firstEntry[1] as unknown as T;
    }

    for (const [key, value] of this) {
      accumulator = fn(accumulator, value, key, this);
    }

    return accumulator;
  }

  /**
   * Returns the first value in the Collection, or the first `count` values as an array.
   */
  first(): V | undefined;
  first(count: number): V[];
  first(count?: number): V | V[] | undefined {
    if (count === undefined) return this.values().next().value;
    if (typeof count !== "number" || count < 0) throw new TypeError("Count must be a non-negative number");
    count = Math.min(count, this.size);

    const result: V[] = [];
    const iter = this.values();
    for (let i = 0; i < count; i++) {
      const val = iter.next().value;
      if (val !== undefined) result.push(val);
    }
    return result;
  }

  /**
   * Returns the last value in the Collection, or the last `count` values as an array.
   */
  last(): V | undefined;
  last(count: number): V[];
  last(count?: number): V | V[] | undefined {
    const arr = [...this.values()];
    if (count === undefined) return arr[arr.length - 1];
    if (typeof count !== "number" || count < 0) throw new TypeError("Count must be a non-negative number");
    return arr.slice(-count);
  }

  /**
   * Returns the value at the given index (insertion order), or undefined if out of bounds.
   * @param index Zero-based index.
   */
  at(index: number): V | undefined {
    const arr = [...this.values()];
    return arr.at(index);
  }

  /**
   * Returns a random value from the Collection, or `count` random values as an array.
   */
  random(): V | undefined;
  random(count: number): V[];
  random(count?: number): V | V[] | undefined {
    const arr = [...this.values()];
    if (arr.length === 0) return count ? [] : undefined;

    if (count === undefined) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    if (typeof count !== "number" || count < 0) throw new TypeError("Count must be a non-negative number");
    count = Math.min(count, arr.length);

    // Fisher-Yates partial shuffle for random selection
    const result: V[] = [];
    const copy = [...arr];
    for (let i = 0; i < count; i++) {
      const idx = Math.floor(Math.random() * copy.length);
      result.push(copy[idx]);
      copy.splice(idx, 1);
    }
    return result;
  }

  /**
   * Returns an array of all keys in the Collection (insertion order).
   */
  keyArray(): K[] {
    return [...this.keys()];
  }

  /**
   * Returns an array of all values in the Collection (insertion order).
   */
  array(): V[] {
    return [...this.values()];
  }

  /**
   * Creates a shallow clone of this Collection.
   */
  clone(): Collection<K, V> {
    return new Collection(this);
  }

  /**
   * Combines this Collection with others, returning a new Collection.
   * Later collections' entries overwrite earlier ones when keys collide.
   * @param collections Collections to concatenate.
   */
  concat(...collections: Collection<K, V>[]): Collection<K, V> {
    const result = this.clone();
    for (const collection of collections) {
      for (const [key, value] of collection) {
        result.set(key, value);
      }
    }
    return result;
  }

  /**
   * Checks if this Collection equals another by comparing keys and values.
   * @param collection The Collection to compare against.
   */
  equals(collection: Collection<K, V>): boolean {
    if (this === collection) return true;
    if (this.size !== collection.size) return false;
    for (const [key, value] of this) {
      if (!collection.has(key) || collection.get(key) !== value) return false;
    }
    return true;
  }

  /**
   * Sorts the Collection in place by a compare function (default: ascending by value).
   * @param compareFunction Function to determine sort order.
   */
  sort(compareFunction?: (a: V, b: V, keyA?: K, keyB?: K) => number): Collection<K, V> {
    const entries = [...this.entries()];
    entries.sort((a, b) => {
      if (compareFunction) {
        return compareFunction(a[1], b[1], a[0], b[0]);
      }
      return Number(a[1] > b[1]) - Number(a[1] < b[1]);
    });

    // Clear and re-insert in sorted order
    super.clear();
    for (const [key, value] of entries) {
      super.set(key, value);
    }
    return this;
  }

  /**
   * Removes items that pass the test, returning the number of removed items.
   * @param fn Test function called with (value, key, collection).
   */
  sweep(fn: (value: V, key: K, collection: this) => boolean): number {
    const toRemove: K[] = [];
    for (const [key, value] of this) {
      if (fn(value, key, this)) {
        toRemove.push(key);
      }
    }
    for (const key of toRemove) {
      this.delete(key);
    }
    return toRemove.length;
  }

  /**
   * Partitions the Collection into two Collections based on the test.
   * @param fn Test function called with (value, key, collection).
   * @returns A tuple of [truthy Collection, falsy Collection].
   */
  partition(fn: (value: V, key: K, collection: this) => boolean): [Collection<K, V>, Collection<K, V>] {
    const truthy = new Collection<K, V>();
    const falsy = new Collection<K, V>();
    for (const [key, value] of this) {
      if (fn(value, key, this)) {
        truthy.set(key, value);
      } else {
        falsy.set(key, value);
      }
    }
    return [truthy, falsy];
  }

  /**
   * Maps each item to a Collection and flattens the results into a single Collection.
   * @param fn Mapping function that returns a Collection.
   */
  flatMap<T>(fn: (value: V, key: K, collection: this) => Collection<K, T>): Collection<K, T> {
    const result = new Collection<K, T>();
    for (const [key, value] of this) {
      const mapped = fn(value, key, this);
      for (const [mappedKey, mappedValue] of mapped) {
        result.set(mappedKey, mappedValue);
      }
    }
    return result;
  }

  /**
   * Returns a new Collection with items whose keys exist in both Collections.
   * @param other The other Collection to intersect with.
   */
  intersect(other: Collection<K, V>): Collection<K, V> {
    const result = new Collection<K, V>();
    for (const [key, value] of this) {
      if (other.has(key)) {
        result.set(key, value);
      }
    }
    return result;
  }

  /**
   * Returns a new Collection with items whose keys exist in this but not in the other.
   * @param other The other Collection to compute the difference with.
   */
  difference(other: Collection<K, V>): Collection<K, V> {
    const result = new Collection<K, V>();
    for (const [key, value] of this) {
      if (!other.has(key)) {
        result.set(key, value);
      }
    }
    return result;
  }

  /**
   * Runs a function on this Collection and returns the Collection (for chaining).
   * @param fn Function called with the Collection.
   */
  tap(fn: (collection: this) => void): this {
    fn(this);
    return this;
  }

  /**
   * Returns a JSON-friendly object representation.
   */
  toJSON(): Record<string, V> {
    const result: Record<string, V> = {};
    for (const [key, value] of this) {
      const stringKey = typeof key === "string" ? key : String(key);
      result[stringKey] = value;
    }
    return result;
  }

  /**
   * Returns a string representation of this Collection.
   */
  toString(): string {
    return `Collection(${this.size}) [${[...this.entries()]
      .map(([k, v]) => `${String(k)} => ${String(v)}`)
      .join(", ")}]`;
  }

  /**
   * Combines entries that share the same key using a combine function.
   * If duplicate keys are found, the combine function is called to merge values.
   * @param entries An iterable of [key, value] pairs.
   * @param combine Function to combine values for duplicate keys.
   */
  static combineEntries<K, V>(
    entries: Iterable<[K, V]>,
    combine: (first: V, second: V, key: K) => V,
  ): Collection<K, V> {
    const result = new Collection<K, V>();
    for (const [key, value] of entries) {
      const existing = result.get(key);
      if (existing !== undefined) {
        result.set(key, combine(existing, value, key));
      } else {
        result.set(key, value);
      }
    }
    return result;
  }
}
