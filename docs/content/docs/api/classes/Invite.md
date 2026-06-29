---
title: "Class: Invite"
---

# Class: Invite

Defined in: [src/struct/invite.ts:11](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/invite.ts#L11)

Represents an invite to a server or channel.

## Extends

- [`Base`](Base.md)

## Constructors

### Constructor

> **new Invite**(`client`, `data`): `Invite`

Defined in: [src/struct/invite.ts:42](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/invite.ts#L42)

Creates a new Invite instance.

#### Parameters

##### client

[`Client`](Client.md)

The client instance.

##### data

\{ `_id`: `string`; `channel`: `string`; `creator`: `string`; `server`: `string`; `type`: `"Server"`; \} \| \{ `_id`: `string`; `channel`: `string`; `creator`: `string`; `type`: `"Group"`; \}

The raw data for the invite from the API.

###### Type Literal

\{ `_id`: `string`; `channel`: `string`; `creator`: `string`; `server`: `string`; `type`: `"Server"`; \}

The raw data for the invite from the API.

###### _id

`string`

**Description**

Invite code

###### channel

`string`

**Description**

Id of the server channel this invite points to

###### creator

`string`

**Description**

Id of user who created this invite

###### server

`string`

**Description**

Id of the server this invite points to

###### type

`"Server"`

***

###### Type Literal

\{ `_id`: `string`; `channel`: `string`; `creator`: `string`; `type`: `"Group"`; \}

The raw data for the invite from the API.

###### _id

`string`

**Description**

Invite code

###### channel

`string`

**Description**

Id of the group channel this invite points to

###### creator

`string`

**Description**

Id of user who created this invite

###### type

`"Group"`

#### Returns

`Invite`

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructor)

## Properties

### channelId

> **channelId**: `string`

Defined in: [src/struct/invite.ts:25](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/invite.ts#L25)

The ID of the channel associated with the invite.

***

### channelName

> **channelName**: `string` \| `null` = `null`

Defined in: [src/struct/invite.ts:28](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/invite.ts#L28)

The name of the channel associated with the invite, if any.

***

### client

> `readonly` **client**: [`Client`](Client.md)

Defined in: [src/struct/base.ts:21](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/base.ts#L21)

The client instance.

#### Inherited from

[`Base`](Base.md).[`client`](Base.md#client)

***

### id

> **id**: `string`

Defined in: [src/struct/base.ts:14](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/base.ts#L14)

The unique identifier for the object.

#### Inherited from

[`Base`](Base.md).[`id`](Base.md#id)

***

### inviterId

> **inviterId**: `string` \| `null` = `null`

Defined in: [src/struct/invite.ts:22](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/invite.ts#L22)

The ID of the user who created the invite.

***

### serverBanner

> **serverBanner**: `string` \| `null` = `null`

Defined in: [src/struct/invite.ts:34](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/invite.ts#L34)

The banner of the server associated with the invite, if any.

***

### serverIcon

> **serverIcon**: `string` \| `null` = `null`

Defined in: [src/struct/invite.ts:31](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/invite.ts#L31)

The icon of the server associated with the invite, if any.

***

### serverId

> **serverId**: `string` \| `null` = `null`

Defined in: [src/struct/invite.ts:16](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/invite.ts#L16)

The ID of the server associated with the invite, if any.

***

### serverName

> **serverName**: `string` \| `null` = `null`

Defined in: [src/struct/invite.ts:19](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/invite.ts#L19)

The name of the server associated with the invite, if any.

***

### type

> **type**: `string` \| `null` = `null`

Defined in: [src/struct/invite.ts:13](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/invite.ts#L13)

The type of the invite (e.g., "Server" or "Group").

## Accessors

### channel

#### Get Signature

> **get** **channel**(): [`Channel`](Channel.md) \| `null`

Defined in: [src/struct/invite.ts:98](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/invite.ts#L98)

Retrieves the channel associated with the invite.

##### Returns

[`Channel`](Channel.md) \| `null`

The channel associated with the invite, or `null` if not found.

***

### inviter

#### Get Signature

> **get** **inviter**(): [`User`](User.md) \| `null`

Defined in: [src/struct/invite.ts:107](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/invite.ts#L107)

Retrieves the user who created the invite.

##### Returns

[`User`](User.md) \| `null`

The user who created the invite, or `null` if not found.

***

### server

#### Get Signature

> **get** **server**(): [`Server`](Server.md) \| `null`

Defined in: [src/struct/invite.ts:87](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/invite.ts#L87)

Retrieves the server associated with the invite.

##### Returns

[`Server`](Server.md) \| `null`

The server associated with the invite, or `null` if not found.

***

### url

#### Get Signature

> **get** **url**(): `string`

Defined in: [src/struct/invite.ts:146](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/invite.ts#L146)

Gets the URL for this invite.

##### Returns

`string`

The invite URL.

## Methods

### \_clone()

> **\_clone**(): `this`

Defined in: [src/struct/base.ts:84](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/base.ts#L84)

Creates a deep clone of the object.

#### Returns

`this`

A clone of the object.

#### Inherited from

[`Base`](Base.md).[`_clone`](Base.md#_clone)

***

### \_update()

> **\_update**(`data`, `clear?`): `this`

Defined in: [src/struct/base.ts:56](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/base.ts#L56)

Updates the object with new data and returns a clone of the object.

#### Parameters

##### data

[`PartialObject`](../type-aliases/PartialObject.md)

The data to update the object with.

##### clear?

`string`[]

Fields to clear in the object.

#### Returns

`this`

A clone of the updated object.

#### Inherited from

[`Base`](Base.md).[`_update`](Base.md#_update)

***

### accept()

> **accept**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/invite.ts:128](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/invite.ts#L128)

Accepts/joins the invite.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the invite is accepted.

***

### delete()

> **delete**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/invite.ts:137](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/invite.ts#L137)

Deletes the invite.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the invite is deleted.

***

### equals()

> **equals**(`obj?`): `boolean`

Defined in: [src/struct/base.ts:29](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/base.ts#L29)

Compares this object with another to determine if they are equal.

#### Parameters

##### obj?

`Invite` \| `null`

The object to compare with.

#### Returns

`boolean`

`true` if the objects are equal, otherwise `false`.

#### Inherited from

[`Base`](Base.md).[`equals`](Base.md#equals)

***

### fetch()

> **fetch**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Invite`\>

Defined in: [src/struct/invite.ts:118](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/invite.ts#L118)

Fetches the invite data from the API.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Invite`\>

The updated invite.

***

### toString()

> **toString**(): `string`

Defined in: [src/struct/invite.ts:150](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/invite.ts#L150)

Returns a string representation of an object.

#### Returns

`string`
