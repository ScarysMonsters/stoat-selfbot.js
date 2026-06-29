---
title: "Class: Collection\\<K, V\\>"
---

# Class: Collection\<K, V\>

Defined in: [src/utils/collection.ts:7](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L7)

A discord.js-style Collection class that extends Map with utility methods.

## Extends

- [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`K`, `V`\>

## Type Parameters

### K

`K`

The key type (typically string).

### V

`V`

The value type.

## Constructors

### Constructor

> **new Collection**\<`K`, `V`\>(`entries?`): `Collection`\<`K`, `V`\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.collection.d.ts:50

#### Parameters

##### entries?

readonly readonly \[`K`, `V`\][] \| `null`

#### Returns

`Collection`\<`K`, `V`\>

#### Inherited from

`Map<K, V>.constructor`

### Constructor

> **new Collection**\<`K`, `V`\>(`iterable?`): `Collection`\<`K`, `V`\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.collection.d.ts:49

#### Parameters

##### iterable?

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<readonly \[`K`, `V`\], `any`, `any`\> \| `null`

#### Returns

`Collection`\<`K`, `V`\>

#### Inherited from

`Map<K, V>.constructor`

## Properties

### \[toStringTag\]

> `readonly` **\[toStringTag\]**: `string`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:137

#### Inherited from

`Collection`.[`[toStringTag]`](#tostringtag)

***

### size

> `readonly` **size**: `number`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.collection.d.ts:45

#### Returns

the number of elements in the Map.

#### Inherited from

`Collection`.[`size`](#size)

***

### \[species\]

> `readonly` `static` **\[species\]**: [`MapConstructor`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:319

#### Inherited from

`Map.[species]`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `MapIterator`\<\[`K`, `V`\]\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:143

Returns an iterable of entries in the map.

#### Returns

`MapIterator`\<\[`K`, `V`\]\>

#### Inherited from

`Map.[iterator]`

***

### array()

> **array**(): `V`[]

Defined in: [src/utils/collection.ts:167](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L167)

Returns an array of all values in the Collection (insertion order).

#### Returns

`V`[]

***

### at()

> **at**(`index`): `V` \| `undefined`

Defined in: [src/utils/collection.ts:125](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L125)

Returns the value at the given index (insertion order), or undefined if out of bounds.

#### Parameters

##### index

`number`

Zero-based index.

#### Returns

`V` \| `undefined`

***

### clear()

> **clear**(): `void`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.collection.d.ts:20

#### Returns

`void`

#### Inherited from

`Map.clear`

***

### clone()

> **clone**(): `Collection`\<`K`, `V`\>

Defined in: [src/utils/collection.ts:174](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L174)

Creates a shallow clone of this Collection.

#### Returns

`Collection`\<`K`, `V`\>

***

### concat()

> **concat**(...`collections`): `Collection`\<`K`, `V`\>

Defined in: [src/utils/collection.ts:183](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L183)

Combines this Collection with others, returning a new Collection.
Later collections' entries overwrite earlier ones when keys collide.

#### Parameters

##### collections

...`Collection`\<`K`, `V`\>[]

Collections to concatenate.

#### Returns

`Collection`\<`K`, `V`\>

***

### delete()

> **delete**(`key`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.collection.d.ts:24

#### Parameters

##### key

`K`

#### Returns

`boolean`

true if an element in the Map existed and has been removed, or false if the element does not exist.

#### Inherited from

`Map.delete`

***

### difference()

> **difference**(`other`): `Collection`\<`K`, `V`\>

Defined in: [src/utils/collection.ts:295](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L295)

Returns a new Collection with items whose keys exist in this but not in the other.

#### Parameters

##### other

`Collection`\<`K`, `V`\>

The other Collection to compute the difference with.

#### Returns

`Collection`\<`K`, `V`\>

***

### entries()

> **entries**(): `MapIterator`\<\[`K`, `V`\]\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:148

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`MapIterator`\<\[`K`, `V`\]\>

#### Inherited from

`Map.entries`

***

### equals()

> **equals**(`collection`): `boolean`

Defined in: [src/utils/collection.ts:197](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L197)

Checks if this Collection equals another by comparing keys and values.

#### Parameters

##### collection

`Collection`\<`K`, `V`\>

The Collection to compare against.

#### Returns

`boolean`

***

### every()

> **every**(`fn`): `boolean`

Defined in: [src/utils/collection.ts:60](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L60)

Checks whether every item passes the test.

#### Parameters

##### fn

(`value`, `key`, `collection`) => `boolean`

Test function called with (value, key, collection).

#### Returns

`boolean`

***

### filter()

> **filter**(`fn`): `Collection`\<`K`, `V`\>

Defined in: [src/utils/collection.ts:12](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L12)

Identifies items that pass a test, returning a new Collection with only those items.

#### Parameters

##### fn

(`value`, `key`, `collection`) => `boolean`

Test function called with (value, key, collection).

#### Returns

`Collection`\<`K`, `V`\>

***

### find()

> **find**(`fn`): `V` \| `undefined`

Defined in: [src/utils/collection.ts:26](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L26)

Searches for a single item that passes the test and returns its value.

#### Parameters

##### fn

(`value`, `key`, `collection`) => `boolean`

Test function called with (value, key, collection).

#### Returns

`V` \| `undefined`

***

### first()

#### Call Signature

> **first**(): `V` \| `undefined`

Defined in: [src/utils/collection.ts:93](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L93)

Returns the first value in the Collection, or the first `count` values as an array.

##### Returns

`V` \| `undefined`

#### Call Signature

> **first**(`count`): `V`[]

Defined in: [src/utils/collection.ts:94](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L94)

Returns the first value in the Collection, or the first `count` values as an array.

##### Parameters

###### count

`number`

##### Returns

`V`[]

***

### flatMap()

> **flatMap**\<`T`\>(`fn`): `Collection`\<`K`, `T`\>

Defined in: [src/utils/collection.ts:266](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L266)

Maps each item to a Collection and flattens the results into a single Collection.

#### Type Parameters

##### T

`T`

#### Parameters

##### fn

(`value`, `key`, `collection`) => `Collection`\<`K`, `T`\>

Mapping function that returns a Collection.

#### Returns

`Collection`\<`K`, `T`\>

***

### forEach()

> **forEach**(`callbackfn`, `thisArg?`): `void`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.collection.d.ts:28

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

##### callbackfn

(`value`, `key`, `map`) => `void`

##### thisArg?

`any`

#### Returns

`void`

#### Inherited from

`Map.forEach`

***

### get()

> **get**(`key`): `V` \| `undefined`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.collection.d.ts:33

Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

#### Parameters

##### key

`K`

#### Returns

`V` \| `undefined`

Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.

#### Inherited from

`Map.get`

***

### has()

> **has**(`key`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.collection.d.ts:37

#### Parameters

##### key

`K`

#### Returns

`boolean`

boolean indicating whether an element with the specified key exists or not.

#### Inherited from

`Map.has`

***

### intersect()

> **intersect**(`other`): `Collection`\<`K`, `V`\>

Defined in: [src/utils/collection.ts:281](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L281)

Returns a new Collection with items whose keys exist in both Collections.

#### Parameters

##### other

`Collection`\<`K`, `V`\>

The other Collection to intersect with.

#### Returns

`Collection`\<`K`, `V`\>

***

### keyArray()

> **keyArray**(): `K`[]

Defined in: [src/utils/collection.ts:160](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L160)

Returns an array of all keys in the Collection (insertion order).

#### Returns

`K`[]

***

### keys()

> **keys**(): `MapIterator`\<`K`\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:153

Returns an iterable of keys in the map

#### Returns

`MapIterator`\<`K`\>

#### Inherited from

`Map.keys`

***

### last()

#### Call Signature

> **last**(): `V` \| `undefined`

Defined in: [src/utils/collection.ts:112](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L112)

Returns the last value in the Collection, or the last `count` values as an array.

##### Returns

`V` \| `undefined`

#### Call Signature

> **last**(`count`): `V`[]

Defined in: [src/utils/collection.ts:113](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L113)

Returns the last value in the Collection, or the last `count` values as an array.

##### Parameters

###### count

`number`

##### Returns

`V`[]

***

### map()

> **map**\<`T`\>(`fn`): `T`[]

Defined in: [src/utils/collection.ts:37](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L37)

Maps each item to a new value, returning an array of results.

#### Type Parameters

##### T

`T`

#### Parameters

##### fn

(`value`, `key`, `collection`) => `T`

Mapping function called with (value, key, collection).

#### Returns

`T`[]

***

### partition()

> **partition**(`fn`): \[`Collection`\<`K`, `V`\>, `Collection`\<`K`, `V`\>\]

Defined in: [src/utils/collection.ts:249](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L249)

Partitions the Collection into two Collections based on the test.

#### Parameters

##### fn

(`value`, `key`, `collection`) => `boolean`

Test function called with (value, key, collection).

#### Returns

\[`Collection`\<`K`, `V`\>, `Collection`\<`K`, `V`\>\]

A tuple of [truthy Collection, falsy Collection].

***

### random()

#### Call Signature

> **random**(): `V` \| `undefined`

Defined in: [src/utils/collection.ts:133](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L133)

Returns a random value from the Collection, or `count` random values as an array.

##### Returns

`V` \| `undefined`

#### Call Signature

> **random**(`count`): `V`[]

Defined in: [src/utils/collection.ts:134](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L134)

Returns a random value from the Collection, or `count` random values as an array.

##### Parameters

###### count

`number`

##### Returns

`V`[]

***

### reduce()

> **reduce**\<`T`\>(`fn`, `initialValue?`): `T`

Defined in: [src/utils/collection.ts:72](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L72)

Reduces the Collection to a single value.

#### Type Parameters

##### T

`T`

#### Parameters

##### fn

(`accumulator`, `value`, `key`, `collection`) => `T`

Reducer function called with (accumulator, value, key, collection).

##### initialValue?

`T`

The initial value for the accumulator.

#### Returns

`T`

***

### set()

> **set**(`key`, `value`): `this`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.collection.d.ts:41

Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

#### Parameters

##### key

`K`

##### value

`V`

#### Returns

`this`

#### Inherited from

`Map.set`

***

### some()

> **some**(`fn`): `boolean`

Defined in: [src/utils/collection.ts:49](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L49)

Checks whether at least one item passes the test.

#### Parameters

##### fn

(`value`, `key`, `collection`) => `boolean`

Test function called with (value, key, collection).

#### Returns

`boolean`

***

### sort()

> **sort**(`compareFunction?`): `Collection`\<`K`, `V`\>

Defined in: [src/utils/collection.ts:210](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L210)

Sorts the Collection in place by a compare function (default: ascending by value).

#### Parameters

##### compareFunction?

(`a`, `b`, `keyA?`, `keyB?`) => `number`

Function to determine sort order.

#### Returns

`Collection`\<`K`, `V`\>

***

### sweep()

> **sweep**(`fn`): `number`

Defined in: [src/utils/collection.ts:231](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L231)

Removes items that pass the test, returning the number of removed items.

#### Parameters

##### fn

(`value`, `key`, `collection`) => `boolean`

Test function called with (value, key, collection).

#### Returns

`number`

***

### tap()

> **tap**(`fn`): `this`

Defined in: [src/utils/collection.ts:309](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L309)

Runs a function on this Collection and returns the Collection (for chaining).

#### Parameters

##### fn

(`collection`) => `void`

Function called with the Collection.

#### Returns

`this`

***

### toJSON()

> **toJSON**(): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `V`\>

Defined in: [src/utils/collection.ts:317](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L317)

Returns a JSON-friendly object representation.

#### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `V`\>

***

### toString()

> **toString**(): `string`

Defined in: [src/utils/collection.ts:329](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L329)

Returns a string representation of this Collection.

#### Returns

`string`

***

### values()

> **values**(): `MapIterator`\<`V`\>

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:158

Returns an iterable of values in the map

#### Returns

`MapIterator`\<`V`\>

#### Inherited from

`Map.values`

***

### combineEntries()

> `static` **combineEntries**\<`K`, `V`\>(`entries`, `combine`): `Collection`\<`K`, `V`\>

Defined in: [src/utils/collection.ts:341](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/collection.ts#L341)

Combines entries that share the same key using a combine function.
If duplicate keys are found, the combine function is called to merge values.

#### Type Parameters

##### K

`K`

##### V

`V`

#### Parameters

##### entries

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<\[`K`, `V`\]\>

An iterable of [key, value] pairs.

##### combine

(`first`, `second`, `key`) => `V`

Function to combine values for duplicate keys.

#### Returns

`Collection`\<`K`, `V`\>
