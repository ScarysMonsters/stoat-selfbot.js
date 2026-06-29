---
title: "Class: RelationshipManager"
---

# Class: RelationshipManager

Defined in: [src/managers/relationshipManager.ts:12](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/relationshipManager.ts#L12)

Manages the client user's relationships (friends, blocked users, pending requests).
Inspired by discord.js-selfbot-v13's RelationshipManager.

## Extends

- [`BaseManager`](BaseManager.md)\<[`Relationship`](Relationship.md)\>

## Constructors

### Constructor

> **new RelationshipManager**(`client`): `RelationshipManager`

Defined in: [src/managers/relationshipManager.ts:15](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/relationshipManager.ts#L15)

#### Parameters

##### client

[`Client`](Client.md)

#### Returns

`RelationshipManager`

#### Overrides

[`BaseManager`](BaseManager.md).[`constructor`](BaseManager.md#constructor)

## Properties

### cache

> `readonly` **cache**: [`Collection`](Collection.md)\<`string`, [`Relationship`](Relationship.md)\>

Defined in: [src/managers/baseManager.ts:18](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/baseManager.ts#L18)

Insertion ordered cache of items this manager holds.

#### Inherited from

[`BaseManager`](BaseManager.md).[`cache`](BaseManager.md#cache)

***

### holds

> `readonly` **holds**: `null` = `null`

Defined in: [src/managers/relationshipManager.ts:13](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/relationshipManager.ts#L13)

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

### blocked

#### Get Signature

> **get** **blocked**(): [`Relationship`](Relationship.md)[]

Defined in: [src/managers/relationshipManager.ts:49](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/relationshipManager.ts#L49)

Gets all blocked users.

##### Returns

[`Relationship`](Relationship.md)[]

***

### friends

#### Get Signature

> **get** **friends**(): [`Relationship`](Relationship.md)[]

Defined in: [src/managers/relationshipManager.ts:40](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/relationshipManager.ts#L40)

Gets all friends.

##### Returns

[`Relationship`](Relationship.md)[]

***

### pendingIncoming

#### Get Signature

> **get** **pendingIncoming**(): [`Relationship`](Relationship.md)[]

Defined in: [src/managers/relationshipManager.ts:58](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/relationshipManager.ts#L58)

Gets all pending incoming friend requests.

##### Returns

[`Relationship`](Relationship.md)[]

***

### pendingOutgoing

#### Get Signature

> **get** **pendingOutgoing**(): [`Relationship`](Relationship.md)[]

Defined in: [src/managers/relationshipManager.ts:67](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/relationshipManager.ts#L67)

Gets all pending outgoing friend requests.

##### Returns

[`Relationship`](Relationship.md)[]

***

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

### acceptFriendRequest()

> **acceptFriendRequest**(`userId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/relationshipManager.ts:85](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/relationshipManager.ts#L85)

Accepts a friend request.

#### Parameters

##### userId

`string`

The user ID whose request to accept.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### blockUser()

> **blockUser**(`userId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/relationshipManager.ts:101](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/relationshipManager.ts#L101)

Blocks a user.

#### Parameters

##### userId

`string`

The user ID to block.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### clear()

> **clear**(): `void`

Defined in: [src/managers/baseManager.ts:162](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/baseManager.ts#L162)

Clears the entire cache.

#### Returns

`void`

#### Inherited from

[`BaseManager`](BaseManager.md).[`clear`](BaseManager.md#clear)

***

### fetchMutual()

> **fetchMutual**(`userId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `servers`: `string`[]; `users`: `string`[]; \}\>

Defined in: [src/managers/relationshipManager.ts:117](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/relationshipManager.ts#L117)

Fetches mutual friends, servers, and groups with a user.

#### Parameters

##### userId

`string`

The user ID.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `servers`: `string`[]; `users`: `string`[]; \}\>

***

### get()

> **get**(`id`): [`Relationship`](Relationship.md) \| `undefined`

Defined in: [src/managers/baseManager.ts:155](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/baseManager.ts#L155)

Gets an item from the cache by ID.

#### Parameters

##### id

`string`

The ID of the item.

#### Returns

[`Relationship`](Relationship.md) \| `undefined`

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

### isBlocked()

> **isBlocked**(`userId`): `boolean`

Defined in: [src/managers/relationshipManager.ts:134](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/relationshipManager.ts#L134)

Checks if a user is blocked.

#### Parameters

##### userId

`string`

The user ID.

#### Returns

`boolean`

***

### isFriend()

> **isFriend**(`userId`): `boolean`

Defined in: [src/managers/relationshipManager.ts:125](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/relationshipManager.ts#L125)

Checks if a user is a friend.

#### Parameters

##### userId

`string`

The user ID.

#### Returns

`boolean`

***

### removeFriend()

> **removeFriend**(`userId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/relationshipManager.ts:93](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/relationshipManager.ts#L93)

Removes a friend or declines a friend request.

#### Parameters

##### userId

`string`

The user ID to remove.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### resolve()

#### Call Signature

> **resolve**(`resolvable`): [`Relationship`](Relationship.md) \| `null`

Defined in: [src/managers/baseManager.ts:108](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/baseManager.ts#L108)

Resolves a resolvable to the held object.

##### Parameters

###### resolvable

[`Relationship`](Relationship.md)

A held object, ID string, or raw data.

##### Returns

[`Relationship`](Relationship.md) \| `null`

The held object or null.

##### Inherited from

[`BaseManager`](BaseManager.md).[`resolve`](BaseManager.md#resolve)

#### Call Signature

> **resolve**(`resolvable`): [`Relationship`](Relationship.md) \| `null`

Defined in: [src/managers/baseManager.ts:109](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/baseManager.ts#L109)

Resolves a resolvable to the held object.

##### Parameters

###### resolvable

`string`

A held object, ID string, or raw data.

##### Returns

[`Relationship`](Relationship.md) \| `null`

The held object or null.

##### Inherited from

[`BaseManager`](BaseManager.md).[`resolve`](BaseManager.md#resolve)

#### Call Signature

> **resolve**(`resolvable`): [`Relationship`](Relationship.md) \| `null`

Defined in: [src/managers/baseManager.ts:110](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/baseManager.ts#L110)

Resolves a resolvable to the held object.

##### Parameters

###### resolvable

`unknown`

A held object, ID string, or raw data.

##### Returns

[`Relationship`](Relationship.md) \| `null`

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

`unknown`

A held object, ID string, or raw data.

#### Returns

`string` \| `null`

The ID string or null.

#### Inherited from

[`BaseManager`](BaseManager.md).[`resolveId`](BaseManager.md#resolveid)

***

### sendFriendRequest()

> **sendFriendRequest**(`username`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/relationshipManager.ts:77](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/relationshipManager.ts#L77)

Sends a friend request by username.

#### Parameters

##### username

`string`

The username to send the friend request to.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

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

### unblockUser()

> **unblockUser**(`userId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/relationshipManager.ts:109](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/relationshipManager.ts#L109)

Unblocks a user.

#### Parameters

##### userId

`string`

The user ID to unblock.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### valueOf()

> **valueOf**(): [`Collection`](Collection.md)\<`string`, [`Relationship`](Relationship.md)\>

Defined in: [src/managers/baseManager.ts:166](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/baseManager.ts#L166)

#### Returns

[`Collection`](Collection.md)\<`string`, [`Relationship`](Relationship.md)\>

#### Inherited from

[`BaseManager`](BaseManager.md).[`valueOf`](BaseManager.md#valueof)
