---
title: "Abstract Class: BaseManager\\<Holds, R\\>"
---

# Abstract Class: BaseManager\<Holds, R\>

Defined in: [src/managers/baseManager.ts:13](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L13)

Abstract base class for all managers.
Provides caching with configurable max size and LRU eviction.

Inspired by discord.js-selfbot-v13's DataManager/CachedManager pattern.

## Extended by

- [`ChannelManager`](ChannelManager.md)
- [`EmojiManager`](EmojiManager.md)
- [`MessageManager`](MessageManager.md)
- [`RelationshipManager`](RelationshipManager.md)
- [`RoleManager`](RoleManager.md)
- [`ServerBanManager`](ServerBanManager.md)
- [`ServerChannelManager`](ServerChannelManager.md)
- [`ServerManager`](ServerManager.md)
- [`ServerMemberManager`](ServerMemberManager.md)
- [`UserManager`](UserManager.md)

## Type Parameters

### Holds

`Holds` *extends* `object`

The type of objects this manager holds (must have an `id` property).

### R

`R` = `unknown`

The raw API data type used to construct objects.

## Constructors

### Constructor

> **new BaseManager**\<`Holds`, `R`\>(`client`, `maxSize?`): `BaseManager`\<`Holds`, `R`\>

Defined in: [src/managers/baseManager.ts:26](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L26)

#### Parameters

##### client

[`Client`](Client.md)

##### maxSize?

`number` = `BaseManager.defaultMaxSize`

#### Returns

`BaseManager`\<`Holds`, `R`\>

## Properties

### cache

> `readonly` **cache**: [`Collection`](Collection.md)\<`string`, `Holds`\>

Defined in: [src/managers/baseManager.ts:18](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L18)

Insertion ordered cache of items this manager holds.

***

### holds

> `abstract` `readonly` **holds**: ((...`args`) => `Holds`) \| `null`

Defined in: [src/managers/baseManager.ts:24](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L24)

The constructor for the class this manager holds.

***

### defaultMaxSize

> `static` **defaultMaxSize**: `number` = `-1`

Defined in: [src/managers/baseManager.ts:15](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L15)

Shared default max size for all managers (can be changed globally). -1 = unlimited.

## Accessors

### size

#### Get Signature

> **get** **size**(): `number`

Defined in: [src/managers/baseManager.ts:139](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L139)

Returns the number of items in the cache.

##### Returns

`number`

## Methods

### clear()

> **clear**(): `void`

Defined in: [src/managers/baseManager.ts:162](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L162)

Clears the entire cache.

#### Returns

`void`

***

### get()

> **get**(`id`): `Holds` \| `undefined`

Defined in: [src/managers/baseManager.ts:155](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L155)

Gets an item from the cache by ID.

#### Parameters

##### id

`string`

The ID of the item.

#### Returns

`Holds` \| `undefined`

***

### has()

> **has**(`id`): `boolean`

Defined in: [src/managers/baseManager.ts:147](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L147)

Checks if an item with the given ID exists in the cache.

#### Parameters

##### id

`string`

The ID to check.

#### Returns

`boolean`

***

### resolve()

#### Call Signature

> **resolve**(`resolvable`): `Holds` \| `null`

Defined in: [src/managers/baseManager.ts:108](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L108)

Resolves a resolvable to the held object.

##### Parameters

###### resolvable

`Holds`

A held object, ID string, or raw data.

##### Returns

`Holds` \| `null`

The held object or null.

#### Call Signature

> **resolve**(`resolvable`): `Holds` \| `null`

Defined in: [src/managers/baseManager.ts:109](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L109)

Resolves a resolvable to the held object.

##### Parameters

###### resolvable

`string`

A held object, ID string, or raw data.

##### Returns

`Holds` \| `null`

The held object or null.

#### Call Signature

> **resolve**(`resolvable`): `Holds` \| `null`

Defined in: [src/managers/baseManager.ts:110](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L110)

Resolves a resolvable to the held object.

##### Parameters

###### resolvable

`R`

A held object, ID string, or raw data.

##### Returns

`Holds` \| `null`

The held object or null.

***

### resolveId()

> **resolveId**(`resolvable`): `string` \| `null`

Defined in: [src/managers/baseManager.ts:122](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L122)

Resolves a resolvable to the ID string.

#### Parameters

##### resolvable

`string` \| `Holds` \| `R`

A held object, ID string, or raw data.

#### Returns

`string` \| `null`

The ID string or null.

***

### setMaxSize()

> **setMaxSize**(`size`): `void`

Defined in: [src/managers/baseManager.ts:79](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L79)

Adjust the maximum size for this manager at runtime.

#### Parameters

##### size

`number`

The new max size. -1 for unlimited, 0 to disable caching.

#### Returns

`void`

***

### valueOf()

> **valueOf**(): [`Collection`](Collection.md)\<`string`, `Holds`\>

Defined in: [src/managers/baseManager.ts:166](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L166)

#### Returns

[`Collection`](Collection.md)\<`string`, `Holds`\>
