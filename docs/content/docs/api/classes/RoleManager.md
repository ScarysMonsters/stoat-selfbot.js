---
title: "Class: RoleManager"
---

# Class: RoleManager

Defined in: [src/managers/roleManager.ts:23](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/roleManager.ts#L23)

Abstract base class for all managers.
Provides caching with configurable max size and LRU eviction.

Inspired by discord.js-selfbot-v13's DataManager/CachedManager pattern.

## Extends

- [`BaseManager`](BaseManager.md)\<[`Role`](Role.md), [`Role`](../stoat-selfbot.js/namespaces/API/type-aliases/Role.md) & `object`\>

## Constructors

### Constructor

> **new RoleManager**(`server`): `RoleManager`

Defined in: [src/managers/roleManager.ts:26](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/roleManager.ts#L26)

#### Parameters

##### server

[`Server`](Server.md)

#### Returns

`RoleManager`

#### Overrides

[`BaseManager`](BaseManager.md).[`constructor`](BaseManager.md#constructor)

## Properties

### cache

> `readonly` **cache**: [`Collection`](Collection.md)\<`string`, [`Role`](Role.md)\>

Defined in: [src/managers/baseManager.ts:18](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/baseManager.ts#L18)

Insertion ordered cache of items this manager holds.

#### Inherited from

[`BaseManager`](BaseManager.md).[`cache`](BaseManager.md#cache)

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

> **create**(`name`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Role`](Role.md)\>

Defined in: [src/managers/roleManager.ts:43](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/roleManager.ts#L43)

Creates a new role in the server.

#### Parameters

##### name

`string`

The name of the role to create

##### options?

[`RoleCreateOptions`](../interfaces/RoleCreateOptions.md)

Additional options for the role

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Role`](Role.md)\>

The created role

***

### delete()

> **delete**(`role`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/roleManager.ts:56](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/roleManager.ts#L56)

Deletes a role from the server.

#### Parameters

##### role

[`RoleResolvable`](../type-aliases/RoleResolvable.md)

The role to delete

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the role is deleted

***

### edit()

> **edit**(`role`, `data`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Role`](Role.md)\>

Defined in: [src/managers/roleManager.ts:75](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/roleManager.ts#L75)

Edits a role in the server.

#### Parameters

##### role

[`RoleResolvable`](../type-aliases/RoleResolvable.md)

The role to edit

##### data

[`editableRole`](../type-aliases/editableRole.md)

Data to edit the role with

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Role`](Role.md)\>

The updated role

#### Throws

If the role ID is invalid

***

### editPermissions()

> **editPermissions**(`roleId`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/roleManager.ts:116](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/roleManager.ts#L116)

Edits the permissions for a role in the server.

#### Parameters

##### roleId

`string`

The ID of the role to edit permissions for

##### options

The permissions to set, with allow and deny arrays

###### allow?

(`"ManageChannel"` \| `"ManageServer"` \| `"ManagePermissions"` \| `"ManageRole"` \| `"ManageCustomisation"` \| `"KickMembers"` \| `"BanMembers"` \| `"TimeoutMembers"` \| `"AssignRoles"` \| `"ChangeNickname"` \| `"ManageNicknames"` \| `"ChangeAvatar"` \| `"RemoveAvatars"` \| `"ViewChannel"` \| `"ReadMessageHistory"` \| `"SendMessage"` \| `"ManageMessages"` \| `"ManageWebhooks"` \| `"InviteOthers"` \| `"SendEmbeds"` \| `"UploadFiles"` \| `"Masquerade"` \| `"React"` \| `"Connect"` \| `"Speak"` \| `"Video"` \| `"MuteMembers"` \| `"DeafenMembers"` \| `"MoveMembers"` \| `"MentionEveryone"` \| `"MentionRoles"` \| `"GrantAll"`)[]

###### deny?

(`"ManageChannel"` \| `"ManageServer"` \| `"ManagePermissions"` \| `"ManageRole"` \| `"ManageCustomisation"` \| `"KickMembers"` \| `"BanMembers"` \| `"TimeoutMembers"` \| `"AssignRoles"` \| `"ChangeNickname"` \| `"ManageNicknames"` \| `"ChangeAvatar"` \| `"RemoveAvatars"` \| `"ViewChannel"` \| `"ReadMessageHistory"` \| `"SendMessage"` \| `"ManageMessages"` \| `"ManageWebhooks"` \| `"InviteOthers"` \| `"SendEmbeds"` \| `"UploadFiles"` \| `"Masquerade"` \| `"React"` \| `"Connect"` \| `"Speak"` \| `"Video"` \| `"MuteMembers"` \| `"DeafenMembers"` \| `"MoveMembers"` \| `"MentionEveryone"` \| `"MentionRoles"` \| `"GrantAll"`)[]

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the permissions are updated

***

### get()

> **get**(`id`): [`Role`](Role.md) \| `undefined`

Defined in: [src/managers/baseManager.ts:155](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/baseManager.ts#L155)

Gets an item from the cache by ID.

#### Parameters

##### id

`string`

The ID of the item.

#### Returns

[`Role`](Role.md) \| `undefined`

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

> **resolve**(`resolvable`): [`Role`](Role.md) \| `null`

Defined in: [src/managers/baseManager.ts:108](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/baseManager.ts#L108)

Resolves a resolvable to the held object.

##### Parameters

###### resolvable

[`Role`](Role.md)

A held object, ID string, or raw data.

##### Returns

[`Role`](Role.md) \| `null`

The held object or null.

##### Inherited from

[`BaseManager`](BaseManager.md).[`resolve`](BaseManager.md#resolve)

#### Call Signature

> **resolve**(`resolvable`): [`Role`](Role.md) \| `null`

Defined in: [src/managers/baseManager.ts:109](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/baseManager.ts#L109)

Resolves a resolvable to the held object.

##### Parameters

###### resolvable

`string`

A held object, ID string, or raw data.

##### Returns

[`Role`](Role.md) \| `null`

The held object or null.

##### Inherited from

[`BaseManager`](BaseManager.md).[`resolve`](BaseManager.md#resolve)

#### Call Signature

> **resolve**(`resolvable`): [`Role`](Role.md) \| `null`

Defined in: [src/managers/baseManager.ts:110](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/baseManager.ts#L110)

Resolves a resolvable to the held object.

##### Parameters

###### resolvable

`object` & `object`

A held object, ID string, or raw data.

##### Returns

[`Role`](Role.md) \| `null`

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

`string` \| [`Role`](Role.md) \| `object` & `object`

A held object, ID string, or raw data.

`string`

***

[`Role`](Role.md)

***

`object` & `object`

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

### setRanks()

> **setRanks**(`roleIds`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/roleManager.ts:104](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/roleManager.ts#L104)

Sets the ranking order of roles in the server.

#### Parameters

##### roleIds

`string`[]

An array of role IDs in the desired order (highest priority first)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the ranks are set

***

### valueOf()

> **valueOf**(): [`Collection`](Collection.md)\<`string`, [`Role`](Role.md)\>

Defined in: [src/managers/baseManager.ts:166](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/baseManager.ts#L166)

#### Returns

[`Collection`](Collection.md)\<`string`, [`Role`](Role.md)\>

#### Inherited from

[`BaseManager`](BaseManager.md).[`valueOf`](BaseManager.md#valueof)
