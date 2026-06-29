---
title: "Class: Role"
---

# Class: Role

Defined in: [src/struct/role.ts:11](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/role.ts#L11)

Represents a role in a server.

## Extends

- [`Base`](Base.md)

## Constructors

### Constructor

> **new Role**(`server`, `data`): `Role`

Defined in: [src/struct/role.ts:33](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/role.ts#L33)

Creates a new Role instance.

#### Parameters

##### server

[`Server`](Server.md)

The server this role belongs to.

##### data

`object` & `object`

The raw data for the role from the API.

#### Returns

`Role`

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

### color

> **color**: `string` \| `null` = `null`

Defined in: [src/struct/role.ts:16](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/role.ts#L16)

The color of the role, or `null` if no color is set.

***

### hoist

> **hoist**: `boolean` = `false`

Defined in: [src/struct/role.ts:19](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/role.ts#L19)

Whether the role is displayed separately in the member list.

***

### id

> **id**: `string`

Defined in: [src/struct/base.ts:14](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/base.ts#L14)

The unique identifier for the object.

#### Inherited from

[`Base`](Base.md).[`id`](Base.md#id)

***

### name

> **name**: `string`

Defined in: [src/struct/role.ts:13](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/role.ts#L13)

The name of the role.

***

### overwrite

> **overwrite**: [`Overwrite`](../interfaces/Overwrite.md)

Defined in: [src/struct/role.ts:25](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/role.ts#L25)

The permissions overwrite for the role.

***

### rank

> **rank**: `number`

Defined in: [src/struct/role.ts:22](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/role.ts#L22)

The rank of the role, used for ordering.

***

### server

> **server**: [`Server`](Server.md)

Defined in: [src/struct/role.ts:34](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/role.ts#L34)

The server this role belongs to.

## Accessors

### createdAt

#### Get Signature

> **get** **createdAt**(): [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

Defined in: [src/struct/role.ts:83](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/role.ts#L83)

Gets the date when the role was created.

##### Returns

[`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

The creation date of the role.

***

### createdTimestamp

#### Get Signature

> **get** **createdTimestamp**(): `number`

Defined in: [src/struct/role.ts:92](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/role.ts#L92)

Gets the timestamp of when the role was created.

##### Returns

`number`

The creation timestamp of the role in milliseconds.

***

### permissions

#### Get Signature

> **get** **permissions**(): [`Overwrite`](../interfaces/Overwrite.md)

Defined in: [src/struct/role.ts:101](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/role.ts#L101)

Gets the permissions overwrite for the role.

##### Returns

[`Overwrite`](../interfaces/Overwrite.md)

The permissions overwrite for the role.

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

### delete()

> **delete**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/role.ts:116](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/role.ts#L116)

Deletes the role from the server.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the role is deleted.

#### Example

```typescript
await role.delete();
console.log("Role deleted successfully.");
```

***

### edit()

> **edit**(`data`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Role`\>

Defined in: [src/struct/role.ts:120](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/role.ts#L120)

#### Parameters

##### data

[`editableRole`](../type-aliases/editableRole.md)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Role`\>

***

### equals()

> **equals**(`obj?`): `boolean`

Defined in: [src/struct/base.ts:29](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/base.ts#L29)

Compares this object with another to determine if they are equal.

#### Parameters

##### obj?

`Role` \| `null`

The object to compare with.

#### Returns

`boolean`

`true` if the objects are equal, otherwise `false`.

#### Inherited from

[`Base`](Base.md).[`equals`](Base.md#equals)

***

### toString()

> **toString**(): `string`

Defined in: [src/struct/role.ts:129](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/role.ts#L129)

Converts the role to a string representation.

#### Returns

`string`

A string representation of the role in the format `<@&roleId>`.
