---
title: "Class: MessageStruct"
---

# Class: MessageStruct

Defined in: [src/struct/message.ts:28](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L28)

Represents a message in a channel.

## Extends

- [`Base`](Base.md)

## Constructors

### Constructor

> **new MessageStruct**(`client`, `data`): `MessageStruct`

Defined in: [src/struct/message.ts:71](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L71)

Creates a new Message instance.

#### Parameters

##### client

[`Client`](Client.md)

The client instance.

##### data

The raw data for the message from the API.

###### _id

`string`

**Description**

Unique Id

###### attachments?

`object`[] \| `null`

**Description**

Array of attachments

###### author

`string`

**Description**

Id of the user or webhook that sent this message

###### channel

`string`

**Description**

Id of the channel this message was sent in

###### content?

`string` \| `null`

**Description**

Message content

###### edited?

`string` \| `null`

**Description**

Time at which this message was last edited

###### embeds?

(\{ `colour?`: `string` \| `null`; `description?`: `string` \| `null`; `icon_url?`: `string` \| `null`; `image?`: \{ `height`: `number`; `size`: `"Large"` \| `"Preview"`; `url`: `string`; `width`: `number`; \} \| `null`; `original_url?`: `string` \| `null`; `site_name?`: `string` \| `null`; `special?`: \{ `type`: `"None"`; \} \| \{ `type`: `"GIF"`; \} \| \{ `id`: `string`; `timestamp?`: `string` \| `null`; `type`: `"YouTube"`; \} \| \{ `content_type`: `"Channel"`; `id`: `string`; `type`: `"Lightspeed"`; \} \| \{ `content_type`: `"Video"` \| `"Channel"` \| `"Clip"`; `id`: `string`; `type`: `"Twitch"`; \} \| \{ `content_type`: `string`; `id`: `string`; `type`: `"Spotify"`; \} \| \{ `type`: `"Soundcloud"`; \} \| \{ `content_type`: `"Album"` \| `"Track"`; `id`: `string`; `type`: `"Bandcamp"`; \} \| \{ `album_id`: `string`; `track_id?`: `string` \| `null`; `type`: `"AppleMusic"`; \} \| \{ `id`: `string`; `type`: `"Streamable"`; \} \| `null`; `title?`: `string` \| `null`; `type`: `"Website"`; `url?`: `string` \| `null`; `video?`: \{ `height`: `number`; `url`: `string`; `width`: `number`; \} \| `null`; \} \| \{ `height`: `number`; `size`: `"Large"` \| `"Preview"`; `type`: `"Image"`; `url`: `string`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `url`: `string`; `width`: `number`; \} \| \{ `colour?`: `string` \| `null`; `description?`: `string` \| `null`; `icon_url?`: `string` \| `null`; `media?`: \{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`; `title?`: `string` \| `null`; `type`: `"Text"`; `url?`: `string` \| `null`; \} \| \{ `type`: `"None"`; \})[] \| `null`

**Description**

Attached embeds to this message

###### flags?

`number`

Format: uint32

**Description**

Bitfield of message flags

https://docs.rs/revolt-models/latest/revolt_models/v0/enum.MessageFlags.html

###### interactions?

\{ `reactions?`: `string`[] \| `null`; `restrict_reactions?`: `boolean`; \}

**Description**

Information about how this message should be interacted with

###### interactions.reactions?

`string`[] \| `null`

**Description**

Reactions which should always appear and be distinct

###### interactions.restrict_reactions?

`boolean`

**Description**

Whether reactions should be restricted to the given list

Can only be set to true if reactions list is of at least length 1

###### masquerade?

\{ `avatar?`: `string` \| `null`; `colour?`: `string` \| `null`; `name?`: `string` \| `null`; \} \| `null`

**Description**

Name and / or avatar overrides for this message

###### member?

\{ `_id`: \{ `server`: `string`; `user`: `string`; \}; `avatar?`: \{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`; `joined_at`: `string`; `nickname?`: `string` \| `null`; `roles?`: `string`[]; `timeout?`: `string` \| `null`; \} \| `null`

**Description**

The member that sent this message

###### mentions?

`string`[] \| `null`

**Description**

Array of user ids mentioned in this message

###### nonce?

`string` \| `null`

**Description**

Unique value generated by client sending this message

###### pinned?

`boolean` \| `null`

**Description**

Whether or not the message in pinned

###### reactions?

\{\[`key`: `string`\]: `string`[]; \}

**Description**

Hashmap of emoji IDs to array of user IDs

###### replies?

`string`[] \| `null`

**Description**

Array of message ids this message is replying to

###### role_mentions?

`string`[] \| `null`

**Description**

Array of role ids mentioned in this message

###### system?

\{ `content`: `string`; `type`: `"text"`; \} \| \{ `by`: `string`; `id`: `string`; `type`: `"user_added"`; \} \| \{ `by`: `string`; `id`: `string`; `type`: `"user_remove"`; \} \| \{ `id`: `string`; `type`: `"user_joined"`; \} \| \{ `id`: `string`; `type`: `"user_left"`; \} \| \{ `id`: `string`; `type`: `"user_kicked"`; \} \| \{ `id`: `string`; `type`: `"user_banned"`; \} \| \{ `by`: `string`; `name`: `string`; `type`: `"channel_renamed"`; \} \| \{ `by`: `string`; `type`: `"channel_description_changed"`; \} \| \{ `by`: `string`; `type`: `"channel_icon_changed"`; \} \| \{ `from`: `string`; `to`: `string`; `type`: `"channel_ownership_changed"`; \} \| \{ `by`: `string`; `id`: `string`; `type`: `"message_pinned"`; \} \| \{ `by`: `string`; `id`: `string`; `type`: `"message_unpinned"`; \} \| `null`

**Description**

System message

###### user?

\{ `_id`: `string`; `avatar?`: \{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`; `badges?`: `number`; `bot?`: \{ `owner`: `string`; \} \| `null`; `discriminator`: `string`; `display_name?`: `string` \| `null`; `flags?`: `number`; `online`: `boolean`; `privileged?`: `boolean`; `relations?`: `object`[]; `relationship`: `"User"` \| `"None"` \| `"Friend"` \| `"Blocked"` \| `"Outgoing"` \| `"Incoming"` \| `"BlockedOther"`; `status?`: \{ `presence?`: `"Online"` \| `"Idle"` \| `"Focus"` \| `"Busy"` \| `"Invisible"` \| `null`; `text?`: `string` \| `null`; \} \| `null`; `username`: `string`; \} \| `null`

**Description**

The user that sent this message

###### webhook?

\{ `avatar?`: `string` \| `null`; `name`: `string`; \} \| `null`

**Description**

The webhook that sent this message

#### Returns

`MessageStruct`

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructor)

## Properties

### attachments

> **attachments**: `object`[] = `[]`

Defined in: [src/struct/message.ts:45](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L45)

An array of file attachments included in the message.

#### \_id

> **\_id**: `string`

##### Description

Unique Id

#### content\_type

> **content\_type**: `string`

##### Description

Raw content type of this file

#### deleted?

> `optional` **deleted?**: `boolean` \| `null`

##### Description

Whether this file was deleted

#### filename

> **filename**: `string`

##### Description

Original filename

#### message\_id?

> `optional` **message\_id?**: `string` \| `null`

#### metadata

> **metadata**: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}

##### Union Members

###### Type Literal

\{ `type`: `"File"`; \}

***

###### Type Literal

\{ `type`: `"Text"`; \}

***

###### Type Literal

\{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \}

###### height

> **height**: `number`

Format: uint

###### type

> **type**: `"Image"`

###### width

> **width**: `number`

Format: uint

***

###### Type Literal

\{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \}

###### height

> **height**: `number`

Format: uint

###### type

> **type**: `"Video"`

###### width

> **width**: `number`

Format: uint

***

###### Type Literal

\{ `type`: `"Audio"`; \}

##### Description

Parsed metadata of this file

#### object\_id?

> `optional` **object\_id?**: `string` \| `null`

##### Description

Id of the object this file is associated with

#### reported?

> `optional` **reported?**: `boolean` \| `null`

##### Description

Whether this file was reported

#### server\_id?

> `optional` **server\_id?**: `string` \| `null`

#### size

> **size**: `number`

Format: int

##### Description

Size of this file (in bytes)

#### tag

> **tag**: `string`

##### Description

Tag / bucket this file was uploaded to

#### user\_id?

> `optional` **user\_id?**: `string` \| `null`

***

### authorId

> **authorId**: `string` = `""`

Defined in: [src/struct/message.ts:39](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L39)

The ID of the user who authored the message.

***

### channelId

> **channelId**: `string` = `""`

Defined in: [src/struct/message.ts:36](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L36)

The ID of the channel where the message was sent.

***

### client

> `readonly` **client**: [`Client`](Client.md)

Defined in: [src/struct/base.ts:21](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/base.ts#L21)

The client instance.

#### Inherited from

[`Base`](Base.md).[`client`](Base.md#client)

***

### content

> **content**: `string` = `""`

Defined in: [src/struct/message.ts:33](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L33)

The content of the message.

***

### editedTimestamp

> **editedTimestamp**: `number` \| `null` = `null`

Defined in: [src/struct/message.ts:51](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L51)

The timestamp of when the message was last edited, or `null` if not edited.

***

### embeds

> **embeds**: (\{ `colour?`: `string` \| `null`; `description?`: `string` \| `null`; `icon_url?`: `string` \| `null`; `image?`: \{ `height`: `number`; `size`: `"Large"` \| `"Preview"`; `url`: `string`; `width`: `number`; \} \| `null`; `original_url?`: `string` \| `null`; `site_name?`: `string` \| `null`; `special?`: \{ `type`: `"None"`; \} \| \{ `type`: `"GIF"`; \} \| \{ `id`: `string`; `timestamp?`: `string` \| `null`; `type`: `"YouTube"`; \} \| \{ `content_type`: `"Channel"`; `id`: `string`; `type`: `"Lightspeed"`; \} \| \{ `content_type`: `"Video"` \| `"Channel"` \| `"Clip"`; `id`: `string`; `type`: `"Twitch"`; \} \| \{ `content_type`: `string`; `id`: `string`; `type`: `"Spotify"`; \} \| \{ `type`: `"Soundcloud"`; \} \| \{ `content_type`: `"Album"` \| `"Track"`; `id`: `string`; `type`: `"Bandcamp"`; \} \| \{ `album_id`: `string`; `track_id?`: `string` \| `null`; `type`: `"AppleMusic"`; \} \| \{ `id`: `string`; `type`: `"Streamable"`; \} \| `null`; `title?`: `string` \| `null`; `type`: `"Website"`; `url?`: `string` \| `null`; `video?`: \{ `height`: `number`; `url`: `string`; `width`: `number`; \} \| `null`; \} \| \{ `height`: `number`; `size`: `"Large"` \| `"Preview"`; `type`: `"Image"`; `url`: `string`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `url`: `string`; `width`: `number`; \} \| \{ `colour?`: `string` \| `null`; `description?`: `string` \| `null`; `icon_url?`: `string` \| `null`; `media?`: \{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`; `title?`: `string` \| `null`; `type`: `"Text"`; `url?`: `string` \| `null`; \} \| \{ `type`: `"None"`; \})[] = `[]`

Defined in: [src/struct/message.ts:42](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L42)

An array of embeds included in the message.

***

### id

> **id**: `string`

Defined in: [src/struct/base.ts:14](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/base.ts#L14)

The unique identifier for the object.

#### Inherited from

[`Base`](Base.md).[`id`](Base.md#id)

***

### masquerade?

> `optional` **masquerade?**: `object`

Defined in: [src/struct/message.ts:60](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L60)

Masquerade information for the message, Name and / or avatar override information

#### avatar?

> `optional` **avatar?**: `string` \| `null`

##### Description

Replace the avatar shown on this message (URL to image file)

#### colour?

> `optional` **colour?**: `string` \| `null`

##### Description

Replace the display role colour shown on this message

Must have `ManageRole` permission to use

#### name?

> `optional` **name?**: `string` \| `null`

##### Description

Replace the display name shown on this message

***

### mentions

> **mentions**: [`Mentions`](Mentions.md)

Defined in: [src/struct/message.ts:48](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L48)

Mentions included in the message.

***

### pinned

> **pinned**: `boolean` = `false`

Defined in: [src/struct/message.ts:57](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L57)

Whether this message is pinned.

***

### reactions

> **reactions**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, `string`[]\>

Defined in: [src/struct/message.ts:54](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L54)

the reactions and count on a message

***

### type

> **type**: `"TEXT"` \| `"USER_ADDED"` \| `"USER_REMOVE"` \| `"USER_JOINED"` \| `"USER_LEFT"` \| `"USER_KICKED"` \| `"USER_BANNED"` \| `"CHANNEL_RENAMED"` \| `"CHANNEL_DESCRIPTION_CHANGED"` \| `"CHANNEL_ICON_CHANGED"` \| `"CHANNEL_OWNERSHIP_CHANGED"` \| `"MESSAGE_PINNED"` \| `"MESSAGE_UNPINNED"` = `"TEXT"`

Defined in: [src/struct/message.ts:30](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L30)

The type of the message (e.g., TEXT, SYSTEM).

***

### webhook?

> `optional` **webhook?**: `object`

Defined in: [src/struct/message.ts:63](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L63)

Webhook information for the message, Name and / or avatar override information

#### avatar

> **avatar**: `string` \| `null`

#### name

> **name**: `string`

## Accessors

### author

#### Get Signature

> **get** **author**(): [`User`](User.md) \| [`ServerMember`](ServerMember.md) \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`User`](User.md) & `object`\> \| `null`

Defined in: [src/struct/message.ts:179](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L179)

Retrieves the author of the message.

##### Returns

[`User`](User.md) \| [`ServerMember`](ServerMember.md) \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`User`](User.md) & `object`\> \| `null`

The user who authored the message, or `null` if not found.

***

### channel

#### Get Signature

> **get** **channel**(): [`TextChannel`](TextChannel.md) \| [`GroupChannel`](GroupChannel.md) \| [`DMChannel`](DMChannel.md) \| [`VoiceChannel`](VoiceChannel.md)

Defined in: [src/struct/message.ts:206](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L206)

Retrieves the channel where the message was sent.

##### Returns

[`TextChannel`](TextChannel.md) \| [`GroupChannel`](GroupChannel.md) \| [`DMChannel`](DMChannel.md) \| [`VoiceChannel`](VoiceChannel.md)

The channel instance.

***

### createdAt

#### Get Signature

> **get** **createdAt**(): [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

Defined in: [src/struct/message.ts:143](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L143)

Gets the creation date of the message.

##### Returns

[`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

The date when the message was created.

***

### createdTimestamp

#### Get Signature

> **get** **createdTimestamp**(): `number`

Defined in: [src/struct/message.ts:152](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L152)

Gets the creation timestamp of the message in milliseconds.

##### Returns

`number`

The timestamp of when the message was created.

***

### editedAt

#### Get Signature

> **get** **editedAt**(): [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) \| `null`

Defined in: [src/struct/message.ts:161](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L161)

Gets the date when the message was last edited.

##### Returns

[`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) \| `null`

The date of the last edit, or `null` if not edited.

***

### member

#### Get Signature

> **get** **member**(): [`ServerMember`](ServerMember.md) \| `null`

Defined in: [src/struct/message.ts:247](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L247)

Retrieves the server member who authored the message, if any.

##### Returns

[`ServerMember`](ServerMember.md) \| `null`

The server member instance, or `null` if not found.

***

### server

#### Get Signature

> **get** **server**(): [`Server`](Server.md) \| `null`

Defined in: [src/struct/message.ts:238](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L238)

Retrieves the server associated with the message, if any.

##### Returns

[`Server`](Server.md) \| `null`

The server instance, or `null` if not found.

***

### serverId

#### Get Signature

> **get** **serverId**(): `string` \| `null`

Defined in: [src/struct/message.ts:228](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L228)

Retrieves the server ID associated with the message, if any.

##### Returns

`string` \| `null`

The server ID, or `null` if the message is not in a server.

***

### system

#### Get Signature

> **get** **system**(): `boolean`

Defined in: [src/struct/message.ts:170](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L170)

Checks if the message is a system message.

##### Returns

`boolean`

`true` if the message is a system message, otherwise `false`.

***

### url

#### Get Signature

> **get** **url**(): `string`

Defined in: [src/struct/message.ts:256](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L256)

Gets the URL of the message.

##### Returns

`string`

The URL of the message.

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

### ack()

> **ack**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/message.ts:267](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L267)

Acknowledges the message.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the message is acknowledged.

***

### addReaction()

> **addReaction**(`emoji`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/message.ts:322](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L322)

Adds a reaction to the message.

#### Parameters

##### emoji

`string`

The emoji to react with.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the reaction is added.

***

### delete()

> **delete**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/message.ts:276](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L276)

Deletes the message.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the message is deleted.

***

### edit()

> **edit**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/message.ts:303](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L303)

Edits the message.

#### Parameters

##### options

`string` \| [`MessageEditOptions`](../interfaces/MessageEditOptions.md)

The new content or edit options.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the message is edited.

***

### equals()

> **equals**(`obj?`): `boolean`

Defined in: [src/struct/base.ts:29](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/base.ts#L29)

Compares this object with another to determine if they are equal.

#### Parameters

##### obj?

`MessageStruct` \| `null`

The object to compare with.

#### Returns

`boolean`

`true` if the objects are equal, otherwise `false`.

#### Inherited from

[`Base`](Base.md).[`equals`](Base.md#equals)

***

### fetch()

> **fetch**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`MessageStruct`\>

Defined in: [src/struct/message.ts:312](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L312)

Fetches the latest data for the message.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`MessageStruct`\>

A promise that resolves with the updated message instance.

***

### inServer()

> **inServer**(): `this is MessageStruct & { channel: TextChannel; server: Server; serverId: string }`

Defined in: [src/struct/message.ts:385](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L385)

Checks if the message is in a server.

#### Returns

`this is MessageStruct & { channel: TextChannel; server: Server; serverId: string }`

`true` if the message is in a server, otherwise `false`.

***

### pin()

> **pin**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/message.ts:361](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L361)

Pins this message to the channel.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the message is pinned.

***

### removeAllReactions()

> **removeAllReactions**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/message.ts:352](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L352)

Removes all reactions from the message.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when all reactions are removed.

***

### removeReaction()

> **removeReaction**(`emoji`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/message.ts:335](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L335)

Removes a reaction from the message.

#### Parameters

##### emoji

`string`

The emoji to remove the reaction for.

##### options?

Options for removing the reaction.

###### remove_all?

`boolean`

Whether to remove all of the specified reaction for the message.

###### user_id?

`string`

The user ID to remove the reaction for. If not provided, removes the reaction for the current user.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the reaction is removed.

***

### reply()

> **reply**(`content`, `mention?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`MessageStruct`\>

Defined in: [src/struct/message.ts:287](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L287)

Replies to the message.

#### Parameters

##### content

`string` \| [`MessageOptions`](../interfaces/MessageOptions.md)

The content of the reply.

##### mention?

`boolean` = `true`

Whether to mention the original message author.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`MessageStruct`\>

A promise that resolves with the sent reply message.

***

### toString()

> **toString**(): `string`

Defined in: [src/struct/message.ts:398](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L398)

Converts the message to a string representation.

#### Returns

`string`

The content of the message.

***

### unpin()

> **unpin**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/message.ts:373](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/message.ts#L373)

Unpins this message from the channel.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the message is unpinned.
