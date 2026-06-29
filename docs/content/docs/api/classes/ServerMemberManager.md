---
title: "Class: ServerMemberManager"
---

# Class: ServerMemberManager

Defined in: [src/managers/serverMemberManager.ts:14](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/serverMemberManager.ts#L14)

Abstract base class for all managers.
Provides caching with configurable max size and LRU eviction.

Inspired by discord.js-selfbot-v13's DataManager/CachedManager pattern.

## Extends

- [`BaseManager`](BaseManager.md)\<[`ServerMember`](ServerMember.md), [`Member`](../stoat-selfbot.js/namespaces/API/type-aliases/Member.md)\>

## Constructors

### Constructor

> **new ServerMemberManager**(`server`): `ServerMemberManager`

Defined in: [src/managers/serverMemberManager.ts:17](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/serverMemberManager.ts#L17)

#### Parameters

##### server

[`Server`](Server.md)

#### Returns

`ServerMemberManager`

#### Overrides

[`BaseManager`](BaseManager.md).[`constructor`](BaseManager.md#constructor)

## Properties

### cache

> `readonly` **cache**: [`Collection`](Collection.md)\<`string`, [`ServerMember`](ServerMember.md)\>

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

### ban()

> **ban**(`member`, `reason?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/serverMemberManager.ts:49](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/serverMemberManager.ts#L49)

ban selected member in the server

#### Parameters

##### member

[`ServerMemberResolvable`](../type-aliases/ServerMemberResolvable.md)

The member to ban

##### reason?

`string`

the reason for the ban

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the member is banned

***

### clear()

> **clear**(): `void`

Defined in: [src/managers/baseManager.ts:162](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/baseManager.ts#L162)

Clears the entire cache.

#### Returns

`void`

#### Inherited from

[`BaseManager`](BaseManager.md).[`clear`](BaseManager.md#clear)

***

### edit()

> **edit**(`member`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/serverMemberManager.ts:30](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/serverMemberManager.ts#L30)

edit selected member in the server

#### Parameters

##### member

[`ServerMemberResolvable`](../type-aliases/ServerMemberResolvable.md)

The member to edit

##### options

[`EditServerMemberOptions`](../interfaces/EditServerMemberOptions.md)

The options to edit the member with

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the member is edited

***

### fetch()

#### Call Signature

> **fetch**(`member`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ServerMember`](ServerMember.md)\>

Defined in: [src/managers/serverMemberManager.ts:105](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/serverMemberManager.ts#L105)

fetch a member from the server

##### Parameters

###### member

[`ServerMemberResolvable`](../type-aliases/ServerMemberResolvable.md)

The member to fetch

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ServerMember`](ServerMember.md)\>

A promise that resolves with the fetched member

#### Call Signature

> **fetch**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`ServerMember`](ServerMember.md)\>\>

Defined in: [src/managers/serverMemberManager.ts:106](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/serverMemberManager.ts#L106)

fetch a member from the server

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`ServerMember`](ServerMember.md)\>\>

A promise that resolves with the fetched member

***

### get()

> **get**(`id`): [`ServerMember`](ServerMember.md) \| `undefined`

Defined in: [src/managers/baseManager.ts:155](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/baseManager.ts#L155)

Gets an item from the cache by ID.

#### Parameters

##### id

`string`

The ID of the item.

#### Returns

[`ServerMember`](ServerMember.md) \| `undefined`

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

### kick()

> **kick**(`member`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/serverMemberManager.ts:64](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/serverMemberManager.ts#L64)

kick selected member in the server

#### Parameters

##### member

[`ServerMemberResolvable`](../type-aliases/ServerMemberResolvable.md)

The member to kick

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the member is kicked

***

### resolve()

#### Call Signature

> **resolve**(`resolvable`): [`ServerMember`](ServerMember.md) \| `null`

Defined in: [src/managers/baseManager.ts:108](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/baseManager.ts#L108)

Resolves a resolvable to the held object.

##### Parameters

###### resolvable

[`ServerMember`](ServerMember.md)

A held object, ID string, or raw data.

##### Returns

[`ServerMember`](ServerMember.md) \| `null`

The held object or null.

##### Inherited from

[`BaseManager`](BaseManager.md).[`resolve`](BaseManager.md#resolve)

#### Call Signature

> **resolve**(`resolvable`): [`ServerMember`](ServerMember.md) \| `null`

Defined in: [src/managers/baseManager.ts:109](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/baseManager.ts#L109)

Resolves a resolvable to the held object.

##### Parameters

###### resolvable

`string`

A held object, ID string, or raw data.

##### Returns

[`ServerMember`](ServerMember.md) \| `null`

The held object or null.

##### Inherited from

[`BaseManager`](BaseManager.md).[`resolve`](BaseManager.md#resolve)

#### Call Signature

> **resolve**(`resolvable`): [`ServerMember`](ServerMember.md) \| `null`

Defined in: [src/managers/baseManager.ts:110](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/baseManager.ts#L110)

Resolves a resolvable to the held object.

##### Parameters

###### resolvable

A held object, ID string, or raw data.

###### _id

\{ `server`: `string`; `user`: `string`; \}

**Description**

Unique member id

###### _id.server

`string`

**Description**

Server Id

###### _id.user

`string`

**Description**

User Id

###### avatar?

\{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`

**Description**

Avatar attachment

###### joined_at

`string`

**Description**

Time at which this user joined the server

###### nickname?

`string` \| `null`

**Description**

Member's nickname

###### roles?

`string`[]

**Description**

Member's roles

###### timeout?

`string` \| `null`

**Description**

Timestamp this member is timed out until

##### Returns

[`ServerMember`](ServerMember.md) \| `null`

The held object or null.

##### Inherited from

[`BaseManager`](BaseManager.md).[`resolve`](BaseManager.md#resolve)

***

### resolveId()

> **resolveId**(`member`): `string` \| `null`

Defined in: [src/managers/serverMemberManager.ts:144](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/serverMemberManager.ts#L144)

resolves a member from a string or a member object

#### Parameters

##### member

[`ServerMemberResolvable`](../type-aliases/ServerMemberResolvable.md)

The member to resolve

#### Returns

`string` \| `null`

The id of the member or null if it cannot be resolved

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

### timeout()

> **timeout**(`member`, `duration`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/serverMemberManager.ts:91](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/serverMemberManager.ts#L91)

set timeout for a member in the server

#### Parameters

##### member

`string`

The member to set the timeout for

##### duration

[`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

The duration of the timeout as a Date object

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the timeout is set

***

### unban()

> **unban**(`member`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/serverMemberManager.ts:77](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/serverMemberManager.ts#L77)

unban selected member in the server

#### Parameters

##### member

[`ServerMemberResolvable`](../type-aliases/ServerMemberResolvable.md)

The member to unban

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the member is unbanned

***

### valueOf()

> **valueOf**(): [`Collection`](Collection.md)\<`string`, [`ServerMember`](ServerMember.md)\>

Defined in: [src/managers/baseManager.ts:166](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/baseManager.ts#L166)

#### Returns

[`Collection`](Collection.md)\<`string`, [`ServerMember`](ServerMember.md)\>

#### Inherited from

[`BaseManager`](BaseManager.md).[`valueOf`](BaseManager.md#valueof)
