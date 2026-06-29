---
title: "Class: ServerBan"
---

# Class: ServerBan

Defined in: [src/struct/serverBan.ts:12](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/serverBan.ts#L12)

Represents a ban entry in a server.

## Extends

- [`Base`](Base.md)

## Constructors

### Constructor

> **new ServerBan**(`client`, `data`): `ServerBan`

Defined in: [src/struct/serverBan.ts:28](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/serverBan.ts#L28)

Creates a new ServerBan instance.

#### Parameters

##### client

[`Client`](Client.md)

The client instance.

##### data

`any`

The raw ban data from the API.

#### Returns

`ServerBan`

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructor)

## Properties

### client

> `readonly` **client**: [`Client`](Client.md)

Defined in: [src/struct/base.ts:21](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/base.ts#L21)

The client instance.

#### Inherited from

[`Base`](Base.md).[`client`](Base.md#client)

***

### id

> **id**: `string`

Defined in: [src/struct/base.ts:14](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/base.ts#L14)

The unique identifier for the object.

#### Inherited from

[`Base`](Base.md).[`id`](Base.md#id)

***

### reason

> **reason**: `string` \| `null` = `null`

Defined in: [src/struct/serverBan.ts:20](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/serverBan.ts#L20)

The reason for the ban, or `null` if none was provided.

***

### serverId

> **serverId**: `string`

Defined in: [src/struct/serverBan.ts:14](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/serverBan.ts#L14)

The ID of the server this ban belongs to.

***

### userId

> **userId**: `string`

Defined in: [src/struct/serverBan.ts:17](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/serverBan.ts#L17)

The ID of the banned user.

## Accessors

### createdAt

#### Get Signature

> **get** **createdAt**(): [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

Defined in: [src/struct/serverBan.ts:60](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/serverBan.ts#L60)

Gets the creation date of the ban.

##### Returns

[`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

***

### server

#### Get Signature

> **get** **server**(): [`Server`](Server.md) \| `null`

Defined in: [src/struct/serverBan.ts:67](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/serverBan.ts#L67)

Gets the server this ban belongs to.

##### Returns

[`Server`](Server.md) \| `null`

***

### user

#### Get Signature

> **get** **user**(): [`User`](User.md) \| `null`

Defined in: [src/struct/serverBan.ts:74](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/serverBan.ts#L74)

Gets the banned user.

##### Returns

[`User`](User.md) \| `null`

## Methods

### \_clone()

> **\_clone**(): `this`

Defined in: [src/struct/base.ts:84](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/base.ts#L84)

Creates a deep clone of the object.

#### Returns

`this`

A clone of the object.

#### Inherited from

[`Base`](Base.md).[`_clone`](Base.md#_clone)

***

### \_update()

> **\_update**(`data`, `clear?`): `this`

Defined in: [src/struct/base.ts:56](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/base.ts#L56)

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

### equals()

> **equals**(`obj?`): `boolean`

Defined in: [src/struct/base.ts:29](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/base.ts#L29)

Compares this object with another to determine if they are equal.

#### Parameters

##### obj?

`ServerBan` \| `null`

The object to compare with.

#### Returns

`boolean`

`true` if the objects are equal, otherwise `false`.

#### Inherited from

[`Base`](Base.md).[`equals`](Base.md#equals)

***

### revoke()

> **revoke**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/serverBan.ts:81](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/serverBan.ts#L81)

Revokes (unbans) this ban.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### toString()

> **toString**(): `string`

Defined in: [src/struct/serverBan.ts:85](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/serverBan.ts#L85)

Returns a string representation of an object.

#### Returns

`string`
