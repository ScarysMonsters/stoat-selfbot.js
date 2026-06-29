---
title: "Class: ServerBanManager"
---

# Class: ServerBanManager

Defined in: [src/managers/serverBanManager.ts:11](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/serverBanManager.ts#L11)

Manages server bans.
Provides methods to list, fetch, create, and remove server bans.

## Extends

- [`BaseManager`](BaseManager.md)\<[`ServerBan`](ServerBan.md)\>

## Constructors

### Constructor

> **new ServerBanManager**(`client`): `ServerBanManager`

Defined in: [src/managers/serverBanManager.ts:14](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/serverBanManager.ts#L14)

#### Parameters

##### client

[`Client`](Client.md)

#### Returns

`ServerBanManager`

#### Overrides

[`BaseManager`](BaseManager.md).[`constructor`](BaseManager.md#constructor)

## Properties

### cache

> `readonly` **cache**: [`Collection`](Collection.md)\<`string`, [`ServerBan`](ServerBan.md)\>

Defined in: [src/managers/baseManager.ts:18](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L18)

Insertion ordered cache of items this manager holds.

#### Inherited from

[`BaseManager`](BaseManager.md).[`cache`](BaseManager.md#cache)

***

### holds

> `readonly` **holds**: `null` = `null`

Defined in: [src/managers/serverBanManager.ts:12](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/serverBanManager.ts#L12)

The constructor for the class this manager holds.

#### Overrides

[`BaseManager`](BaseManager.md).[`holds`](BaseManager.md#holds-1)

***

### defaultMaxSize

> `static` **defaultMaxSize**: `number` = `-1`

Defined in: [src/managers/baseManager.ts:15](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L15)

Shared default max size for all managers (can be changed globally). -1 = unlimited.

#### Inherited from

[`BaseManager`](BaseManager.md).[`defaultMaxSize`](BaseManager.md#defaultmaxsize)

## Accessors

### size

#### Get Signature

> **get** **size**(): `number`

Defined in: [src/managers/baseManager.ts:139](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L139)

Returns the number of items in the cache.

##### Returns

`number`

#### Inherited from

[`BaseManager`](BaseManager.md).[`size`](BaseManager.md#size)

## Methods

### ban()

> **ban**(`serverId`, `userId`, `reason?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/serverBanManager.ts:38](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/serverBanManager.ts#L38)

Bans a user from a server.

#### Parameters

##### serverId

`string`

The server ID.

##### userId

`string`

The user ID to ban.

##### reason?

`string`

The reason for the ban (optional).

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### clear()

> **clear**(): `void`

Defined in: [src/managers/baseManager.ts:162](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L162)

Clears the entire cache.

#### Returns

`void`

#### Inherited from

[`BaseManager`](BaseManager.md).[`clear`](BaseManager.md#clear)

***

### fetch()

> **fetch**(`serverId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`[]\>

Defined in: [src/managers/serverBanManager.ts:23](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/serverBanManager.ts#L23)

Fetches all bans for a server.

#### Parameters

##### serverId

`string`

The server ID.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`[]\>

Array of ban data from the API.

***

### get()

> **get**(`id`): [`ServerBan`](ServerBan.md) \| `undefined`

Defined in: [src/managers/baseManager.ts:155](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L155)

Gets an item from the cache by ID.

#### Parameters

##### id

`string`

The ID of the item.

#### Returns

[`ServerBan`](ServerBan.md) \| `undefined`

#### Inherited from

[`BaseManager`](BaseManager.md).[`get`](BaseManager.md#get)

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

#### Inherited from

[`BaseManager`](BaseManager.md).[`has`](BaseManager.md#has)

***

### resolve()

#### Call Signature

> **resolve**(`resolvable`): [`ServerBan`](ServerBan.md) \| `null`

Defined in: [src/managers/baseManager.ts:108](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L108)

Resolves a resolvable to the held object.

##### Parameters

###### resolvable

[`ServerBan`](ServerBan.md)

A held object, ID string, or raw data.

##### Returns

[`ServerBan`](ServerBan.md) \| `null`

The held object or null.

##### Inherited from

[`BaseManager`](BaseManager.md).[`resolve`](BaseManager.md#resolve)

#### Call Signature

> **resolve**(`resolvable`): [`ServerBan`](ServerBan.md) \| `null`

Defined in: [src/managers/baseManager.ts:109](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L109)

Resolves a resolvable to the held object.

##### Parameters

###### resolvable

`string`

A held object, ID string, or raw data.

##### Returns

[`ServerBan`](ServerBan.md) \| `null`

The held object or null.

##### Inherited from

[`BaseManager`](BaseManager.md).[`resolve`](BaseManager.md#resolve)

#### Call Signature

> **resolve**(`resolvable`): [`ServerBan`](ServerBan.md) \| `null`

Defined in: [src/managers/baseManager.ts:110](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L110)

Resolves a resolvable to the held object.

##### Parameters

###### resolvable

`unknown`

A held object, ID string, or raw data.

##### Returns

[`ServerBan`](ServerBan.md) \| `null`

The held object or null.

##### Inherited from

[`BaseManager`](BaseManager.md).[`resolve`](BaseManager.md#resolve)

***

### resolveId()

> **resolveId**(`resolvable`): `string` \| `null`

Defined in: [src/managers/baseManager.ts:122](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L122)

Resolves a resolvable to the ID string.

#### Parameters

##### resolvable

`unknown`

A held object, ID string, or raw data.

#### Returns

`string` \| `null`

The ID string or null.

#### Inherited from

[`BaseManager`](BaseManager.md).[`resolveId`](BaseManager.md#resolveid)

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

#### Inherited from

[`BaseManager`](BaseManager.md).[`setMaxSize`](BaseManager.md#setmaxsize)

***

### unban()

> **unban**(`serverId`, `userId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/serverBanManager.ts:49](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/serverBanManager.ts#L49)

Unbans a user from a server.

#### Parameters

##### serverId

`string`

The server ID.

##### userId

`string`

The user ID to unban.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### valueOf()

> **valueOf**(): [`Collection`](Collection.md)\<`string`, [`ServerBan`](ServerBan.md)\>

Defined in: [src/managers/baseManager.ts:166](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L166)

#### Returns

[`Collection`](Collection.md)\<`string`, [`ServerBan`](ServerBan.md)\>

#### Inherited from

[`BaseManager`](BaseManager.md).[`valueOf`](BaseManager.md#valueof)
