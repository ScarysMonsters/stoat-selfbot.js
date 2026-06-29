---
title: "Class: UserManager"
---

# Class: UserManager

Defined in: [src/managers/userManager.ts:7](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/userManager.ts#L7)

Abstract base class for all managers.
Provides caching with configurable max size and LRU eviction.

Inspired by discord.js-selfbot-v13's DataManager/CachedManager pattern.

## Extends

- [`BaseManager`](BaseManager.md)\<[`User`](User.md), [`User`](../stoat-selfbot.js/namespaces/API/type-aliases/User.md)\>

## Constructors

### Constructor

> **new UserManager**(`client`, `maxSize?`): `UserManager`

Defined in: [src/managers/baseManager.ts:26](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L26)

#### Parameters

##### client

[`Client`](Client.md)

##### maxSize?

`number` = `BaseManager.defaultMaxSize`

#### Returns

`UserManager`

#### Inherited from

[`BaseManager`](BaseManager.md).[`constructor`](BaseManager.md#constructor)

## Properties

### cache

> `readonly` **cache**: [`Collection`](Collection.md)\<`string`, [`User`](User.md)\>

Defined in: [src/managers/baseManager.ts:18](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L18)

Insertion ordered cache of items this manager holds.

#### Inherited from

[`BaseManager`](BaseManager.md).[`cache`](BaseManager.md#cache)

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

> **fetch**(`user`, `__namedParameters?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`User`](User.md)\>

Defined in: [src/managers/userManager.ts:16](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/userManager.ts#L16)

#### Parameters

##### user

[`UserResolvable`](../type-aliases/UserResolvable.md)

The user to fetch

##### \_\_namedParameters?

###### force?

`boolean` = `false`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`User`](User.md)\>

A promise that resolves when the user is fetched

***

### get()

> **get**(`id`): [`User`](User.md) \| `undefined`

Defined in: [src/managers/baseManager.ts:155](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L155)

Gets an item from the cache by ID.

#### Parameters

##### id

`string`

The ID of the item.

#### Returns

[`User`](User.md) \| `undefined`

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

> **resolve**(`resolvable`): [`User`](User.md) \| `null`

Defined in: [src/managers/userManager.ts:36](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/userManager.ts#L36)

get a user form cache

##### Parameters

###### resolvable

[`User`](User.md) \| [`MessageStruct`](MessageStruct.md)

The user to resolve

##### Returns

[`User`](User.md) \| `null`

The user or null if it cannot be resolved

##### Overrides

[`BaseManager`](BaseManager.md).[`resolve`](BaseManager.md#resolve)

#### Call Signature

> **resolve**(`resolvable`): [`User`](User.md) \| `null`

Defined in: [src/managers/userManager.ts:37](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/userManager.ts#L37)

get a user form cache

##### Parameters

###### resolvable

`string` \| \{ `_id`: `string`; `avatar?`: \{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`; `badges?`: `number`; `bot?`: \{ `owner`: `string`; \} \| `null`; `discriminator`: `string`; `display_name?`: `string` \| `null`; `flags?`: `number`; `online`: `boolean`; `privileged?`: `boolean`; `relations?`: `object`[]; `relationship`: `"User"` \| `"None"` \| `"Friend"` \| `"Blocked"` \| `"Outgoing"` \| `"Incoming"` \| `"BlockedOther"`; `status?`: \{ `presence?`: `"Online"` \| `"Idle"` \| `"Focus"` \| `"Busy"` \| `"Invisible"` \| `null`; `text?`: `string` \| `null`; \} \| `null`; `username`: `string`; \}

The user to resolve

`string`

***

###### Type Literal

\{ `_id`: `string`; `avatar?`: \{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`; `badges?`: `number`; `bot?`: \{ `owner`: `string`; \} \| `null`; `discriminator`: `string`; `display_name?`: `string` \| `null`; `flags?`: `number`; `online`: `boolean`; `privileged?`: `boolean`; `relations?`: `object`[]; `relationship`: `"User"` \| `"None"` \| `"Friend"` \| `"Blocked"` \| `"Outgoing"` \| `"Incoming"` \| `"BlockedOther"`; `status?`: \{ `presence?`: `"Online"` \| `"Idle"` \| `"Focus"` \| `"Busy"` \| `"Invisible"` \| `null`; `text?`: `string` \| `null`; \} \| `null`; `username`: `string`; \}

The user to resolve

###### _id

`string`

**Description**

Unique Id

###### avatar?

\{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`

**Description**

Avatar attachment

###### badges?

`number`

Format: uint32

**Description**

Bitfield of user badges

https://docs.rs/revolt-models/latest/revolt_models/v0/enum.UserBadges.html

###### bot?

\{ `owner`: `string`; \} \| `null`

**Description**

Bot information

###### discriminator

`string`

**Description**

Discriminator

###### display_name?

`string` \| `null`

**Description**

Display name

###### flags?

`number`

Format: uint32

**Description**

Enum of user flags

https://docs.rs/revolt-models/latest/revolt_models/v0/enum.UserFlags.html

###### online

`boolean`

**Description**

Whether this user is currently online

###### privileged?

`boolean`

**Description**

Whether this user is privileged

###### relations?

`object`[]

**Description**

Relationships with other users

###### relationship

`"User"` \| `"None"` \| `"Friend"` \| `"Blocked"` \| `"Outgoing"` \| `"Incoming"` \| `"BlockedOther"`

**Description**

Current session user's relationship with this user

###### status?

\{ `presence?`: `"Online"` \| `"Idle"` \| `"Focus"` \| `"Busy"` \| `"Invisible"` \| `null`; `text?`: `string` \| `null`; \} \| `null`

**Description**

User's current status

###### username

`string`

**Description**

Username

##### Returns

[`User`](User.md) \| `null`

The user or null if it cannot be resolved

##### Overrides

[`BaseManager`](BaseManager.md).[`resolve`](BaseManager.md#resolve)

***

### resolveId()

> **resolveId**(`resolvable`): `string` \| `null`

Defined in: [src/managers/userManager.ts:49](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/userManager.ts#L49)

get a user id form cache

#### Parameters

##### resolvable

[`UserResolvable`](../type-aliases/UserResolvable.md)

The user to resolve

#### Returns

`string` \| `null`

The user id or null if it cannot be resolved

#### Overrides

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

### valueOf()

> **valueOf**(): [`Collection`](Collection.md)\<`string`, [`User`](User.md)\>

Defined in: [src/managers/baseManager.ts:166](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/baseManager.ts#L166)

#### Returns

[`Collection`](Collection.md)\<`string`, [`User`](User.md)\>

#### Inherited from

[`BaseManager`](BaseManager.md).[`valueOf`](BaseManager.md#valueof)
