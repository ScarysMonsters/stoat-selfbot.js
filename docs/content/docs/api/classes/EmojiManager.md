---
title: "Class: EmojiManager"
---

# Class: EmojiManager

Defined in: [src/managers/emojiManager.ts:10](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/emojiManager.ts#L10)

Manages emojis for a server.

## Extends

- [`BaseManager`](BaseManager.md)\<[`Emoji`](Emoji.md), `any`\>

## Constructors

### Constructor

> **new EmojiManager**(`client`, `serverId`): `EmojiManager`

Defined in: [src/managers/emojiManager.ts:14](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/emojiManager.ts#L14)

#### Parameters

##### client

[`Client`](Client.md)

##### serverId

`string`

#### Returns

`EmojiManager`

#### Overrides

[`BaseManager`](BaseManager.md).[`constructor`](BaseManager.md#constructor)

## Properties

### cache

> `readonly` **cache**: [`Collection`](Collection.md)\<`string`, [`Emoji`](Emoji.md)\>

Defined in: [src/managers/baseManager.ts:18](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/baseManager.ts#L18)

Insertion ordered cache of items this manager holds.

#### Inherited from

[`BaseManager`](BaseManager.md).[`cache`](BaseManager.md#cache)

***

### holds

> **holds**: *typeof* [`Emoji`](Emoji.md) = `Emoji`

Defined in: [src/managers/emojiManager.ts:11](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/emojiManager.ts#L11)

The constructor for the class this manager holds.

#### Overrides

[`BaseManager`](BaseManager.md).[`holds`](BaseManager.md#holds-1)

***

### defaultMaxSize

> `static` **defaultMaxSize**: `number` = `-1`

Defined in: [src/managers/baseManager.ts:15](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/baseManager.ts#L15)

Shared default max size for all managers (can be changed globally). -1 = unlimited.

#### Inherited from

[`BaseManager`](BaseManager.md).[`defaultMaxSize`](BaseManager.md#defaultmaxsize)

## Accessors

### size

#### Get Signature

> **get** **size**(): `number`

Defined in: [src/managers/baseManager.ts:139](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/baseManager.ts#L139)

Returns the number of items in the cache.

##### Returns

`number`

#### Inherited from

[`BaseManager`](BaseManager.md).[`size`](BaseManager.md#size)

## Methods

### clear()

> **clear**(): `void`

Defined in: [src/managers/baseManager.ts:162](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/baseManager.ts#L162)

Clears the entire cache.

#### Returns

`void`

#### Inherited from

[`BaseManager`](BaseManager.md).[`clear`](BaseManager.md#clear)

***

### create()

> **create**(`name`, `image`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Emoji`](Emoji.md)\>

Defined in: [src/managers/emojiManager.ts:45](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/emojiManager.ts#L45)

Creates a new emoji in this server.
Uploads the image to CDN first, then creates the emoji via API.

#### Parameters

##### name

`string`

The name of the emoji.

##### image

`string` \| `Buffer`\<`ArrayBufferLike`\>

The image data (Buffer or string).

##### options?

Additional options for the emoji.

###### nsfw?

`boolean`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Emoji`](Emoji.md)\>

A promise that resolves with the created emoji.

***

### delete()

> **delete**(`emojiId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/emojiManager.ts:78](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/emojiManager.ts#L78)

Deletes an emoji by ID.

DELETE /custom/emoji/{id}

#### Parameters

##### emojiId

`string`

The ID of the emoji to delete.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### edit()

> **edit**(`emojiId`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/emojiManager.ts:90](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/emojiManager.ts#L90)

Edits an emoji by ID.

PUT /custom/emoji/{id}

#### Parameters

##### emojiId

`string`

The ID of the emoji to edit.

##### options

The edit options.

###### name?

`string`

###### nsfw?

`boolean`

###### parent?

`object`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### fetchAll()

> **fetchAll**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`Emoji`](Emoji.md)\>\>

Defined in: [src/managers/emojiManager.ts:25](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/emojiManager.ts#L25)

Fetches all emojis for this server.

GET /servers/{serverId}/emojis

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`Emoji`](Emoji.md)\>\>

A promise that resolves with a map of emojis.

***

### get()

> **get**(`id`): [`Emoji`](Emoji.md) \| `undefined`

Defined in: [src/managers/baseManager.ts:155](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/baseManager.ts#L155)

Gets an item from the cache by ID.

#### Parameters

##### id

`string`

The ID of the item.

#### Returns

[`Emoji`](Emoji.md) \| `undefined`

#### Inherited from

[`BaseManager`](BaseManager.md).[`get`](BaseManager.md#get)

***

### has()

> **has**(`id`): `boolean`

Defined in: [src/managers/baseManager.ts:147](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/baseManager.ts#L147)

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

> **resolve**(`resolvable`): [`Emoji`](Emoji.md) \| `null`

Defined in: [src/managers/baseManager.ts:108](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/baseManager.ts#L108)

Resolves a resolvable to the held object.

##### Parameters

###### resolvable

[`Emoji`](Emoji.md)

A held object, ID string, or raw data.

##### Returns

[`Emoji`](Emoji.md) \| `null`

The held object or null.

##### Inherited from

[`BaseManager`](BaseManager.md).[`resolve`](BaseManager.md#resolve)

#### Call Signature

> **resolve**(`resolvable`): [`Emoji`](Emoji.md) \| `null`

Defined in: [src/managers/baseManager.ts:109](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/baseManager.ts#L109)

Resolves a resolvable to the held object.

##### Parameters

###### resolvable

`string`

A held object, ID string, or raw data.

##### Returns

[`Emoji`](Emoji.md) \| `null`

The held object or null.

##### Inherited from

[`BaseManager`](BaseManager.md).[`resolve`](BaseManager.md#resolve)

#### Call Signature

> **resolve**(`resolvable`): [`Emoji`](Emoji.md) \| `null`

Defined in: [src/managers/baseManager.ts:110](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/baseManager.ts#L110)

Resolves a resolvable to the held object.

##### Parameters

###### resolvable

`any`

A held object, ID string, or raw data.

##### Returns

[`Emoji`](Emoji.md) \| `null`

The held object or null.

##### Inherited from

[`BaseManager`](BaseManager.md).[`resolve`](BaseManager.md#resolve)

***

### resolveId()

> **resolveId**(`resolvable`): `string` \| `null`

Defined in: [src/managers/baseManager.ts:122](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/baseManager.ts#L122)

Resolves a resolvable to the ID string.

#### Parameters

##### resolvable

`any`

A held object, ID string, or raw data.

#### Returns

`string` \| `null`

The ID string or null.

#### Inherited from

[`BaseManager`](BaseManager.md).[`resolveId`](BaseManager.md#resolveid)

***

### setMaxSize()

> **setMaxSize**(`size`): `void`

Defined in: [src/managers/baseManager.ts:79](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/baseManager.ts#L79)

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

> **valueOf**(): [`Collection`](Collection.md)\<`string`, [`Emoji`](Emoji.md)\>

Defined in: [src/managers/baseManager.ts:166](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/baseManager.ts#L166)

#### Returns

[`Collection`](Collection.md)\<`string`, [`Emoji`](Emoji.md)\>

#### Inherited from

[`BaseManager`](BaseManager.md).[`valueOf`](BaseManager.md#valueof)
