---
title: "Class: ChannelManager"
---

# Class: ChannelManager

Defined in: [src/managers/channelManager.ts:14](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/channelManager.ts#L14)

Abstract base class for all managers.
Provides caching with configurable max size and LRU eviction.

Inspired by discord.js-selfbot-v13's DataManager/CachedManager pattern.

## Extends

- [`BaseManager`](BaseManager.md)\<[`Channel`](Channel.md), [`Channel`](../stoat-selfbot.js/namespaces/API/type-aliases/Channel.md)\>

## Constructors

### Constructor

> **new ChannelManager**(`client`, `maxSize?`): `ChannelManager`

Defined in: [src/managers/baseManager.ts:26](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/baseManager.ts#L26)

#### Parameters

##### client

[`Client`](Client.md)

##### maxSize?

`number` = `BaseManager.defaultMaxSize`

#### Returns

`ChannelManager`

#### Inherited from

[`BaseManager`](BaseManager.md).[`constructor`](BaseManager.md#constructor)

## Properties

### cache

> `readonly` **cache**: [`Collection`](Collection.md)\<`string`, [`Channel`](Channel.md)\>

Defined in: [src/managers/baseManager.ts:18](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/baseManager.ts#L18)

Insertion ordered cache of items this manager holds.

#### Inherited from

[`BaseManager`](BaseManager.md).[`cache`](BaseManager.md#cache)

***

### defaultMaxSize

> `static` **defaultMaxSize**: `number` = `-1`

Defined in: [src/managers/baseManager.ts:15](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/baseManager.ts#L15)

Shared default max size for all managers (can be changed globally). -1 = unlimited.

#### Inherited from

[`BaseManager`](BaseManager.md).[`defaultMaxSize`](BaseManager.md#defaultmaxsize)

## Accessors

### size

#### Get Signature

> **get** **size**(): `number`

Defined in: [src/managers/baseManager.ts:139](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/baseManager.ts#L139)

Returns the number of items in the cache.

##### Returns

`number`

#### Inherited from

[`BaseManager`](BaseManager.md).[`size`](BaseManager.md#size)

## Methods

### clear()

> **clear**(): `void`

Defined in: [src/managers/baseManager.ts:162](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/baseManager.ts#L162)

Clears the entire cache.

#### Returns

`void`

#### Inherited from

[`BaseManager`](BaseManager.md).[`clear`](BaseManager.md#clear)

***

### createGroup()

> **createGroup**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`GroupChannel`](GroupChannel.md)\>

Defined in: [src/managers/channelManager.ts:136](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/channelManager.ts#L136)

Creates a new group DM channel.

#### Parameters

##### options

Options for creating the group.

###### description?

`string`

The description of the group (optional).

###### name

`string`

The name of the group.

###### nsfw?

`boolean`

Whether the group is NSFW (optional).

###### recipients?

`string`[]

An array of user IDs to add to the group (optional).

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`GroupChannel`](GroupChannel.md)\>

A promise that resolves with the created group channel.

***

### delete()

> **delete**(`channel`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/channelManager.ts:71](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/channelManager.ts#L71)

used to delete a channel

#### Parameters

##### channel

[`ChannelResolvable`](../type-aliases/ChannelResolvable.md)

The channel to delete

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the channel is deleted

***

### fetch()

> **fetch**(`channel`, `force?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Channel`](Channel.md)\>

Defined in: [src/managers/channelManager.ts:86](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/channelManager.ts#L86)

used to fetch a channel

#### Parameters

##### channel

[`ChannelResolvable`](../type-aliases/ChannelResolvable.md)

The channel to fetch

##### force?

Whether to force fetch the channel using the api or return it form cache if able

###### force?

`boolean` = `true`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Channel`](Channel.md)\>

A promise that resolves with the fetched channel

***

### fetchDMs()

> **fetchDMs**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`DMChannel`](DMChannel.md)[]\>

Defined in: [src/managers/channelManager.ts:156](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/channelManager.ts#L156)

Fetches all DM channels for the current user.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`DMChannel`](DMChannel.md)[]\>

A promise that resolves with an array of DM channels.

***

### get()

> **get**(`id`): [`Channel`](Channel.md) \| `undefined`

Defined in: [src/managers/baseManager.ts:155](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/baseManager.ts#L155)

Gets an item from the cache by ID.

#### Parameters

##### id

`string`

The ID of the item.

#### Returns

[`Channel`](Channel.md) \| `undefined`

#### Inherited from

[`BaseManager`](BaseManager.md).[`get`](BaseManager.md#get)

***

### has()

> **has**(`id`): `boolean`

Defined in: [src/managers/baseManager.ts:147](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/baseManager.ts#L147)

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

> **resolve**(`channel`): [`Channel`](Channel.md) \| `null`

Defined in: [src/managers/channelManager.ts:111](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/channelManager.ts#L111)

resolves a channel from a string or a channel object

#### Parameters

##### channel

[`ChannelResolvable`](../type-aliases/ChannelResolvable.md)

The channel to resolve

#### Returns

[`Channel`](Channel.md) \| `null`

the resolved channel or null if not found

#### Overrides

[`BaseManager`](BaseManager.md).[`resolve`](BaseManager.md#resolve)

***

### resolveId()

> **resolveId**(`channel`): `string` \| `null`

Defined in: [src/managers/channelManager.ts:121](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/channelManager.ts#L121)

resolves a channel id from a string or a channel object

#### Parameters

##### channel

[`ChannelResolvable`](../type-aliases/ChannelResolvable.md)

The channel to resolve

#### Returns

`string` \| `null`

the resolved channel id or null if not found

#### Overrides

[`BaseManager`](BaseManager.md).[`resolveId`](BaseManager.md#resolveid)

***

### setMaxSize()

> **setMaxSize**(`size`): `void`

Defined in: [src/managers/baseManager.ts:79](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/baseManager.ts#L79)

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

### valueOf()

> **valueOf**(): [`Collection`](Collection.md)\<`string`, [`Channel`](Channel.md)\>

Defined in: [src/managers/baseManager.ts:166](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/baseManager.ts#L166)

#### Returns

[`Collection`](Collection.md)\<`string`, [`Channel`](Channel.md)\>

#### Inherited from

[`BaseManager`](BaseManager.md).[`valueOf`](BaseManager.md#valueof)
