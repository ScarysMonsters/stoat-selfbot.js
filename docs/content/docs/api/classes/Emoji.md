---
title: "Class: Emoji"
---

# Class: Emoji

Defined in: [src/struct/emoji.ts:12](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/emoji.ts#L12)

Represents an emoji in the client.

## Extends

- [`Base`](Base.md)

## Constructors

### Constructor

> **new Emoji**(`client`, `data`): `Emoji`

Defined in: [src/struct/emoji.ts:34](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/emoji.ts#L34)

Creates a new Emoji instance.

#### Parameters

##### client

[`Client`](Client.md)

The client instance.

##### data

`any`

The raw data for the emoji.

#### Returns

`Emoji`

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructor)

## Properties

### animated

> **animated**: `boolean` = `false`

Defined in: [src/struct/emoji.ts:26](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/emoji.ts#L26)

Whether the emoji is animated.

***

### client

> `readonly` **client**: [`Client`](Client.md)

Defined in: [src/struct/base.ts:21](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/base.ts#L21)

The client instance.

#### Inherited from

[`Base`](Base.md).[`client`](Base.md#client)

***

### creator\_id?

> `optional` **creator\_id?**: `string` \| `null` = `null`

Defined in: [src/struct/emoji.ts:17](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/emoji.ts#L17)

The ID of the user who created the emoji, or `null` if not available.

***

### id

> **id**: `string`

Defined in: [src/struct/base.ts:14](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/base.ts#L14)

The unique identifier for the object.

#### Inherited from

[`Base`](Base.md).[`id`](Base.md#id)

***

### name?

> `optional` **name?**: `string` \| `null` = `null`

Defined in: [src/struct/emoji.ts:20](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/emoji.ts#L20)

The name of the emoji, or `null` if not set.

***

### nsfw

> **nsfw**: `boolean` = `false`

Defined in: [src/struct/emoji.ts:23](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/emoji.ts#L23)

Whether the emoji is marked as NSFW.

***

### parent?

> `optional` **parent?**: \{ `id`: `string`; `type`: `string`; \} \| `null` = `null`

Defined in: [src/struct/emoji.ts:14](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/emoji.ts#L14)

The parent object of the emoji, which can be a server or other entity.

## Accessors

### createdAt

#### Get Signature

> **get** **createdAt**(): [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

Defined in: [src/struct/emoji.ts:127](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/emoji.ts#L127)

Gets the creation date of the emoji.

##### Returns

[`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

The date when the emoji was created.

***

### createdTimestamp

#### Get Signature

> **get** **createdTimestamp**(): `number`

Defined in: [src/struct/emoji.ts:136](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/emoji.ts#L136)

Gets the creation timestamp of the emoji in milliseconds.

##### Returns

`number`

The timestamp of when the emoji was created.

***

### creator

#### Get Signature

> **get** **creator**(): [`User`](User.md) \| `null`

Defined in: [src/struct/emoji.ts:76](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/emoji.ts#L76)

Retrieves the user who created the emoji.

##### Returns

[`User`](User.md) \| `null`

The creator of the emoji, or `null` if not found.

***

### server

#### Get Signature

> **get** **server**(): [`Server`](Server.md) \| `null`

Defined in: [src/struct/emoji.ts:85](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/emoji.ts#L85)

Retrieves the server associated with the emoji, if any.

##### Returns

[`Server`](Server.md) \| `null`

The server instance, or `null` if the emoji is not associated with a server.

***

### url

#### Get Signature

> **get** **url**(): `string`

Defined in: [src/struct/emoji.ts:95](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/emoji.ts#L95)

Gets the URL for the emoji image.

##### Returns

`string`

The URL to the emoji image.

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

### delete()

> **delete**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/emoji.ts:117](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/emoji.ts#L117)

Deletes this emoji.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the emoji is deleted.

***

### edit()

> **edit**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/emoji.ts:105](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/emoji.ts#L105)

Edits this emoji.

#### Parameters

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

A promise that resolves when the emoji is updated.

***

### equals()

> **equals**(`obj?`): `boolean`

Defined in: [src/struct/base.ts:29](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/base.ts#L29)

Compares this object with another to determine if they are equal.

#### Parameters

##### obj?

`Emoji` \| `null`

The object to compare with.

#### Returns

`boolean`

`true` if the objects are equal, otherwise `false`.

#### Inherited from

[`Base`](Base.md).[`equals`](Base.md#equals)

***

### toString()

> **toString**(): `string`

Defined in: [src/struct/emoji.ts:143](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/emoji.ts#L143)

Returns the emoji string for use in messages.

#### Returns

`string`
