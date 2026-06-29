---
title: "Class: Category"
---

# Class: Category

Defined in: [src/struct/category.ts:9](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/category.ts#L9)

Represents a category in a server, which groups multiple channels together.

## Extends

- [`Base`](Base.md)

## Constructors

### Constructor

> **new Category**(`server`, `data`): `Category`

Defined in: [src/struct/category.ts:22](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/category.ts#L22)

Creates a new Category instance.

#### Parameters

##### server

[`Server`](Server.md)

The server this category belongs to.

##### data

The raw data for the category from the API.

###### channels

`string`[]

**Description**

Channels in this category

###### id

`string`

**Description**

Unique ID for this category

###### title

`string`

**Description**

Title for this category

#### Returns

`Category`

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructor)

## Properties

### client

> `readonly` **client**: [`Client`](Client.md)

Defined in: [src/struct/base.ts:21](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/base.ts#L21)

The client instance.

#### Inherited from

[`Base`](Base.md).[`client`](Base.md#client)

***

### id

> **id**: `string`

Defined in: [src/struct/base.ts:14](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/base.ts#L14)

The unique identifier for the object.

#### Inherited from

[`Base`](Base.md).[`id`](Base.md#id)

***

### name

> **name**: `string`

Defined in: [src/struct/category.ts:11](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/category.ts#L11)

The name of the category.

***

### server

> `readonly` **server**: [`Server`](Server.md)

Defined in: [src/struct/category.ts:23](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/category.ts#L23)

The server this category belongs to.

## Accessors

### children

#### Get Signature

> **get** **children**(): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`ServerChannel`](ServerChannel.md)\>

Defined in: [src/struct/category.ts:56](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/category.ts#L56)

Retrieves the channels that belong to this category.

##### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`ServerChannel`](ServerChannel.md)\>

A map of channel IDs to their corresponding `ServerChannel` instances.

## Methods

### \_clone()

> **\_clone**(): `this`

Defined in: [src/struct/base.ts:84](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/base.ts#L84)

Creates a deep clone of the object.

#### Returns

`this`

A clone of the object.

#### Inherited from

[`Base`](Base.md).[`_clone`](Base.md#_clone)

***

### \_update()

> **\_update**(`data`, `clear?`): `this`

Defined in: [src/struct/base.ts:56](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/base.ts#L56)

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

Defined in: [src/struct/base.ts:29](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/base.ts#L29)

Compares this object with another to determine if they are equal.

#### Parameters

##### obj?

`Category` \| `null`

The object to compare with.

#### Returns

`boolean`

`true` if the objects are equal, otherwise `false`.

#### Inherited from

[`Base`](Base.md).[`equals`](Base.md#equals)

***

### toString()

> **toString**(): `string`

Defined in: [src/struct/category.ts:72](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/category.ts#L72)

Converts the category to a string representation.

#### Returns

`string`

The name of the category.
