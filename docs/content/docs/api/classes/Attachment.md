---
title: "Class: Attachment"
---

# Class: Attachment

Defined in: [src/struct/attachment.ts:10](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/attachment.ts#L10)

Represents an attachment, such as a file or image, in a message or channel.

## Extends

- [`Base`](Base.md)

## Constructors

### Constructor

> **new Attachment**(`client`, `data`): `Attachment`

Defined in: [src/struct/attachment.ts:29](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/attachment.ts#L29)

Creates a new Attachment instance.

#### Parameters

##### client

[`Client`](Client.md)

The client instance.

##### data

The raw data for the attachment from the API.

###### _id

`string`

**Description**

Unique Id

###### content_type

`string`

**Description**

Raw content type of this file

###### deleted?

`boolean` \| `null`

**Description**

Whether this file was deleted

###### filename

`string`

**Description**

Original filename

###### message_id?

`string` \| `null`

###### metadata

\{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}

**Description**

Parsed metadata of this file

###### object_id?

`string` \| `null`

**Description**

Id of the object this file is associated with

###### reported?

`boolean` \| `null`

**Description**

Whether this file was reported

###### server_id?

`string` \| `null`

###### size

`number`

Format: int

**Description**

Size of this file (in bytes)

###### tag

`string`

**Description**

Tag / bucket this file was uploaded to

###### user_id?

`string` \| `null`

#### Returns

`Attachment`

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

### filename

> **filename**: `string`

Defined in: [src/struct/attachment.ts:12](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/attachment.ts#L12)

The filename of the attachment.

***

### id

> **id**: `string`

Defined in: [src/struct/base.ts:14](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/base.ts#L14)

The unique identifier for the object.

#### Inherited from

[`Base`](Base.md).[`id`](Base.md#id)

***

### metadata

> **metadata**: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}

Defined in: [src/struct/attachment.ts:21](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/attachment.ts#L21)

Metadata associated with the attachment (e.g., dimensions for images).

#### Union Members

##### Type Literal

\{ `type`: `"File"`; \}

***

##### Type Literal

\{ `type`: `"Text"`; \}

***

##### Type Literal

\{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \}

##### height

> **height**: `number`

Format: uint

##### type

> **type**: `"Image"`

##### width

> **width**: `number`

Format: uint

***

##### Type Literal

\{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \}

##### height

> **height**: `number`

Format: uint

##### type

> **type**: `"Video"`

##### width

> **width**: `number`

Format: uint

***

##### Type Literal

\{ `type`: `"Audio"`; \}

***

### size

> **size**: `number`

Defined in: [src/struct/attachment.ts:18](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/attachment.ts#L18)

The size of the attachment in bytes.

***

### type

> **type**: `string`

Defined in: [src/struct/attachment.ts:15](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/attachment.ts#L15)

The MIME type of the attachment (e.g., `image/png`, `application/pdf`).

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

`Attachment` \| `null`

The object to compare with.

#### Returns

`boolean`

`true` if the objects are equal, otherwise `false`.

#### Inherited from

[`Base`](Base.md).[`equals`](Base.md#equals)
