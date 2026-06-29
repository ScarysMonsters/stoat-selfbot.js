---
title: "Class: MessageManager"
---

# Class: MessageManager

Defined in: [src/managers/messageManager.ts:53](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/messageManager.ts#L53)

Abstract base class for all managers.
Provides caching with configurable max size and LRU eviction.

Inspired by discord.js-selfbot-v13's DataManager/CachedManager pattern.

## Extends

- [`BaseManager`](BaseManager.md)\<[`MessageStruct`](MessageStruct.md), [`Message`](../stoat-selfbot.js/namespaces/API/type-aliases/Message.md)\>

## Constructors

### Constructor

> **new MessageManager**(`channel`, `maxSize?`): `MessageManager`

Defined in: [src/managers/messageManager.ts:56](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/messageManager.ts#L56)

#### Parameters

##### channel

[`Channel`](Channel.md)

##### maxSize?

`number` = `1000`

#### Returns

`MessageManager`

#### Overrides

[`BaseManager`](BaseManager.md).[`constructor`](BaseManager.md#constructor)

## Properties

### cache

> `readonly` **cache**: [`Collection`](Collection.md)\<`string`, [`MessageStruct`](MessageStruct.md)\>

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

### ack()

> **ack**(`message`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/messageManager.ts:126](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/messageManager.ts#L126)

acknowledge a message to mark it as read (not important for bots)

#### Parameters

##### message

[`MessageResolvable`](../type-aliases/MessageResolvable.md)

The message to acknowledge

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Promise that resolves when the message is acknowledged

***

### addReaction()

> **addReaction**(`message`, `emoji`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/messageManager.ts:268](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/messageManager.ts#L268)

add a reaction to a message

#### Parameters

##### message

[`MessageResolvable`](../type-aliases/MessageResolvable.md)

The message to react to. Can be a Message object or a message ID.

##### emoji

`string` \| [`Emoji`](Emoji.md)

emoji to react with. Can be a string or an Emoji object.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Promise that resolves when the reaction is added

***

### bulkDelete()

> **bulkDelete**(`messages`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/messageManager.ts:139](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/messageManager.ts#L139)

bulk delete messages from the channel

#### Parameters

##### messages

`number` \| [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`MessageStruct`](MessageStruct.md)\> \| [`MessageResolvable`](../type-aliases/MessageResolvable.md)[]

The messages to delete. Can be an array of message IDs or a Map of message IDs to Message objects.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Promise that resolves when the messages are deleted

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

### delete()

> **delete**(`message`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/messageManager.ts:161](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/messageManager.ts#L161)

delete a message from the channel

#### Parameters

##### message

[`MessageResolvable`](../type-aliases/MessageResolvable.md)

The message to delete. Can be a Message object or a message ID.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Promise that resolves when the message is deleted

***

### edit()

> **edit**(`message`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/messageManager.ts:178](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/messageManager.ts#L178)

edit a message in the channel

#### Parameters

##### message

[`MessageResolvable`](../type-aliases/MessageResolvable.md)

The message to edit. Can be a Message object or a message ID.

##### options

`string` \| [`MessageEditOptions`](../interfaces/MessageEditOptions.md)

The options to edit the message with. Can be a string or an object with the following properties:
- content: The new content of the message
- attachments: An array of attachment URLs
- embeds: An array of MessageEmbed objects

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Promise that resolves when the message is edited

***

### fetch()

#### Call Signature

> **fetch**(`message`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`MessageStruct`](MessageStruct.md)\>

Defined in: [src/managers/messageManager.ts:228](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/messageManager.ts#L228)

fetch a message from the channel

##### Parameters

###### message

[`MessageResolvable`](../type-aliases/MessageResolvable.md)

The message to fetch. Can be a Message object, a message ID, or an object with the following properties:
- limit: The maximum number of messages to return
- before: The message ID to start fetching from (exclusive)
- after: The message ID to stop fetching at (exclusive)

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`MessageStruct`](MessageStruct.md)\>

Promise that resolves to a Message object or a Map of message IDs to Message objects

#### Call Signature

> **fetch**(`query?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`MessageStruct`](MessageStruct.md)\>\>

Defined in: [src/managers/messageManager.ts:229](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/messageManager.ts#L229)

fetch a message from the channel

##### Parameters

###### query?

[`MessageQueryOptions`](../interfaces/MessageQueryOptions.md)

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`MessageStruct`](MessageStruct.md)\>\>

Promise that resolves to a Message object or a Map of message IDs to Message objects

#### Call Signature

> **fetch**(`limit`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`MessageStruct`](MessageStruct.md)\>\>

Defined in: [src/managers/messageManager.ts:230](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/messageManager.ts#L230)

fetch a message from the channel

##### Parameters

###### limit

`number`

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`MessageStruct`](MessageStruct.md)\>\>

Promise that resolves to a Message object or a Map of message IDs to Message objects

***

### get()

> **get**(`id`): [`MessageStruct`](MessageStruct.md) \| `undefined`

Defined in: [src/managers/baseManager.ts:155](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/baseManager.ts#L155)

Gets an item from the cache by ID.

#### Parameters

##### id

`string`

The ID of the item.

#### Returns

[`MessageStruct`](MessageStruct.md) \| `undefined`

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

### removeAllReactions()

> **removeAllReactions**(`message`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/messageManager.ts:320](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/messageManager.ts#L320)

remove all reactions from a message

#### Parameters

##### message

[`MessageResolvable`](../type-aliases/MessageResolvable.md)

The message to remove reactions from. Can be a Message object or a message ID.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Promise that resolves when the reactions are removed

***

### removeReaction()

> **removeReaction**(`message`, `emoji`, `user_id?`, `remove_all?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/messageManager.ts:293](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/messageManager.ts#L293)

#### Parameters

##### message

[`MessageResolvable`](../type-aliases/MessageResolvable.md)

The message to unreact. Can be a Message object or a message ID.

##### emoji

`string` \| [`Emoji`](Emoji.md)

the emoji to unreact with. Can be a string or an Emoji object.

##### user\_id?

`string`

The user ID to remove the reaction for. If not provided, removes the reaction for the current user.

##### remove\_all?

`boolean` = `false`

Whether to remove all of the specified reaction for the message. Defaults to false.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Promise that resolves when the reaction is removed

***

### resolve()

#### Call Signature

> **resolve**(`resolvable`): [`MessageStruct`](MessageStruct.md) \| `null`

Defined in: [src/managers/baseManager.ts:108](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/baseManager.ts#L108)

Resolves a resolvable to the held object.

##### Parameters

###### resolvable

[`MessageStruct`](MessageStruct.md)

A held object, ID string, or raw data.

##### Returns

[`MessageStruct`](MessageStruct.md) \| `null`

The held object or null.

##### Inherited from

[`BaseManager`](BaseManager.md).[`resolve`](BaseManager.md#resolve)

#### Call Signature

> **resolve**(`resolvable`): [`MessageStruct`](MessageStruct.md) \| `null`

Defined in: [src/managers/baseManager.ts:109](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/baseManager.ts#L109)

Resolves a resolvable to the held object.

##### Parameters

###### resolvable

`string`

A held object, ID string, or raw data.

##### Returns

[`MessageStruct`](MessageStruct.md) \| `null`

The held object or null.

##### Inherited from

[`BaseManager`](BaseManager.md).[`resolve`](BaseManager.md#resolve)

#### Call Signature

> **resolve**(`resolvable`): [`MessageStruct`](MessageStruct.md) \| `null`

Defined in: [src/managers/baseManager.ts:110](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/baseManager.ts#L110)

Resolves a resolvable to the held object.

##### Parameters

###### resolvable

A held object, ID string, or raw data.

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

##### Returns

[`MessageStruct`](MessageStruct.md) \| `null`

The held object or null.

##### Inherited from

[`BaseManager`](BaseManager.md).[`resolve`](BaseManager.md#resolve)

***

### resolveId()

> **resolveId**(`resolvable`): `string` \| `null`

Defined in: [src/managers/baseManager.ts:122](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/baseManager.ts#L122)

Resolves a resolvable to the ID string.

#### Parameters

##### resolvable

`string` \| [`MessageStruct`](MessageStruct.md) \| \{ `_id`: `string`; `attachments?`: `object`[] \| `null`; `author`: `string`; `channel`: `string`; `content?`: `string` \| `null`; `edited?`: `string` \| `null`; `embeds?`: (\{ `colour?`: `string` \| `null`; `description?`: `string` \| `null`; `icon_url?`: `string` \| `null`; `image?`: \{ `height`: `number`; `size`: `"Large"` \| `"Preview"`; `url`: `string`; `width`: `number`; \} \| `null`; `original_url?`: `string` \| `null`; `site_name?`: `string` \| `null`; `special?`: \{ `type`: `"None"`; \} \| \{ `type`: `"GIF"`; \} \| \{ `id`: `string`; `timestamp?`: `string` \| `null`; `type`: `"YouTube"`; \} \| \{ `content_type`: `"Channel"`; `id`: `string`; `type`: `"Lightspeed"`; \} \| \{ `content_type`: `"Video"` \| `"Channel"` \| `"Clip"`; `id`: `string`; `type`: `"Twitch"`; \} \| \{ `content_type`: `string`; `id`: `string`; `type`: `"Spotify"`; \} \| \{ `type`: `"Soundcloud"`; \} \| \{ `content_type`: `"Album"` \| `"Track"`; `id`: `string`; `type`: `"Bandcamp"`; \} \| \{ `album_id`: `string`; `track_id?`: `string` \| `null`; `type`: `"AppleMusic"`; \} \| \{ `id`: `string`; `type`: `"Streamable"`; \} \| `null`; `title?`: `string` \| `null`; `type`: `"Website"`; `url?`: `string` \| `null`; `video?`: \{ `height`: `number`; `url`: `string`; `width`: `number`; \} \| `null`; \} \| \{ `height`: `number`; `size`: `"Large"` \| `"Preview"`; `type`: `"Image"`; `url`: `string`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `url`: `string`; `width`: `number`; \} \| \{ `colour?`: `string` \| `null`; `description?`: `string` \| `null`; `icon_url?`: `string` \| `null`; `media?`: \{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`; `title?`: `string` \| `null`; `type`: `"Text"`; `url?`: `string` \| `null`; \} \| \{ `type`: `"None"`; \})[] \| `null`; `flags?`: `number`; `interactions?`: \{ `reactions?`: `string`[] \| `null`; `restrict_reactions?`: `boolean`; \}; `masquerade?`: \{ `avatar?`: `string` \| `null`; `colour?`: `string` \| `null`; `name?`: `string` \| `null`; \} \| `null`; `member?`: \{ `_id`: \{ `server`: `string`; `user`: `string`; \}; `avatar?`: \{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`; `joined_at`: `string`; `nickname?`: `string` \| `null`; `roles?`: `string`[]; `timeout?`: `string` \| `null`; \} \| `null`; `mentions?`: `string`[] \| `null`; `nonce?`: `string` \| `null`; `pinned?`: `boolean` \| `null`; `reactions?`: \{\[`key`: `string`\]: `string`[]; \}; `replies?`: `string`[] \| `null`; `role_mentions?`: `string`[] \| `null`; `system?`: \{ `content`: `string`; `type`: `"text"`; \} \| \{ `by`: `string`; `id`: `string`; `type`: `"user_added"`; \} \| \{ `by`: `string`; `id`: `string`; `type`: `"user_remove"`; \} \| \{ `id`: `string`; `type`: `"user_joined"`; \} \| \{ `id`: `string`; `type`: `"user_left"`; \} \| \{ `id`: `string`; `type`: `"user_kicked"`; \} \| \{ `id`: `string`; `type`: `"user_banned"`; \} \| \{ `by`: `string`; `name`: `string`; `type`: `"channel_renamed"`; \} \| \{ `by`: `string`; `type`: `"channel_description_changed"`; \} \| \{ `by`: `string`; `type`: `"channel_icon_changed"`; \} \| \{ `from`: `string`; `to`: `string`; `type`: `"channel_ownership_changed"`; \} \| \{ `by`: `string`; `id`: `string`; `type`: `"message_pinned"`; \} \| \{ `by`: `string`; `id`: `string`; `type`: `"message_unpinned"`; \} \| `null`; `user?`: \{ `_id`: `string`; `avatar?`: \{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`; `badges?`: `number`; `bot?`: \{ `owner`: `string`; \} \| `null`; `discriminator`: `string`; `display_name?`: `string` \| `null`; `flags?`: `number`; `online`: `boolean`; `privileged?`: `boolean`; `relations?`: `object`[]; `relationship`: `"User"` \| `"None"` \| `"Friend"` \| `"Blocked"` \| `"Outgoing"` \| `"Incoming"` \| `"BlockedOther"`; `status?`: \{ `presence?`: `"Online"` \| `"Idle"` \| `"Focus"` \| `"Busy"` \| `"Invisible"` \| `null`; `text?`: `string` \| `null`; \} \| `null`; `username`: `string`; \} \| `null`; `webhook?`: \{ `avatar?`: `string` \| `null`; `name`: `string`; \} \| `null`; \}

A held object, ID string, or raw data.

`string`

***

[`MessageStruct`](MessageStruct.md)

***

###### Type Literal

\{ `_id`: `string`; `attachments?`: `object`[] \| `null`; `author`: `string`; `channel`: `string`; `content?`: `string` \| `null`; `edited?`: `string` \| `null`; `embeds?`: (\{ `colour?`: `string` \| `null`; `description?`: `string` \| `null`; `icon_url?`: `string` \| `null`; `image?`: \{ `height`: `number`; `size`: `"Large"` \| `"Preview"`; `url`: `string`; `width`: `number`; \} \| `null`; `original_url?`: `string` \| `null`; `site_name?`: `string` \| `null`; `special?`: \{ `type`: `"None"`; \} \| \{ `type`: `"GIF"`; \} \| \{ `id`: `string`; `timestamp?`: `string` \| `null`; `type`: `"YouTube"`; \} \| \{ `content_type`: `"Channel"`; `id`: `string`; `type`: `"Lightspeed"`; \} \| \{ `content_type`: `"Video"` \| `"Channel"` \| `"Clip"`; `id`: `string`; `type`: `"Twitch"`; \} \| \{ `content_type`: `string`; `id`: `string`; `type`: `"Spotify"`; \} \| \{ `type`: `"Soundcloud"`; \} \| \{ `content_type`: `"Album"` \| `"Track"`; `id`: `string`; `type`: `"Bandcamp"`; \} \| \{ `album_id`: `string`; `track_id?`: `string` \| `null`; `type`: `"AppleMusic"`; \} \| \{ `id`: `string`; `type`: `"Streamable"`; \} \| `null`; `title?`: `string` \| `null`; `type`: `"Website"`; `url?`: `string` \| `null`; `video?`: \{ `height`: `number`; `url`: `string`; `width`: `number`; \} \| `null`; \} \| \{ `height`: `number`; `size`: `"Large"` \| `"Preview"`; `type`: `"Image"`; `url`: `string`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `url`: `string`; `width`: `number`; \} \| \{ `colour?`: `string` \| `null`; `description?`: `string` \| `null`; `icon_url?`: `string` \| `null`; `media?`: \{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`; `title?`: `string` \| `null`; `type`: `"Text"`; `url?`: `string` \| `null`; \} \| \{ `type`: `"None"`; \})[] \| `null`; `flags?`: `number`; `interactions?`: \{ `reactions?`: `string`[] \| `null`; `restrict_reactions?`: `boolean`; \}; `masquerade?`: \{ `avatar?`: `string` \| `null`; `colour?`: `string` \| `null`; `name?`: `string` \| `null`; \} \| `null`; `member?`: \{ `_id`: \{ `server`: `string`; `user`: `string`; \}; `avatar?`: \{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`; `joined_at`: `string`; `nickname?`: `string` \| `null`; `roles?`: `string`[]; `timeout?`: `string` \| `null`; \} \| `null`; `mentions?`: `string`[] \| `null`; `nonce?`: `string` \| `null`; `pinned?`: `boolean` \| `null`; `reactions?`: \{\[`key`: `string`\]: `string`[]; \}; `replies?`: `string`[] \| `null`; `role_mentions?`: `string`[] \| `null`; `system?`: \{ `content`: `string`; `type`: `"text"`; \} \| \{ `by`: `string`; `id`: `string`; `type`: `"user_added"`; \} \| \{ `by`: `string`; `id`: `string`; `type`: `"user_remove"`; \} \| \{ `id`: `string`; `type`: `"user_joined"`; \} \| \{ `id`: `string`; `type`: `"user_left"`; \} \| \{ `id`: `string`; `type`: `"user_kicked"`; \} \| \{ `id`: `string`; `type`: `"user_banned"`; \} \| \{ `by`: `string`; `name`: `string`; `type`: `"channel_renamed"`; \} \| \{ `by`: `string`; `type`: `"channel_description_changed"`; \} \| \{ `by`: `string`; `type`: `"channel_icon_changed"`; \} \| \{ `from`: `string`; `to`: `string`; `type`: `"channel_ownership_changed"`; \} \| \{ `by`: `string`; `id`: `string`; `type`: `"message_pinned"`; \} \| \{ `by`: `string`; `id`: `string`; `type`: `"message_unpinned"`; \} \| `null`; `user?`: \{ `_id`: `string`; `avatar?`: \{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`; `badges?`: `number`; `bot?`: \{ `owner`: `string`; \} \| `null`; `discriminator`: `string`; `display_name?`: `string` \| `null`; `flags?`: `number`; `online`: `boolean`; `privileged?`: `boolean`; `relations?`: `object`[]; `relationship`: `"User"` \| `"None"` \| `"Friend"` \| `"Blocked"` \| `"Outgoing"` \| `"Incoming"` \| `"BlockedOther"`; `status?`: \{ `presence?`: `"Online"` \| `"Idle"` \| `"Focus"` \| `"Busy"` \| `"Invisible"` \| `null`; `text?`: `string` \| `null`; \} \| `null`; `username`: `string`; \} \| `null`; `webhook?`: \{ `avatar?`: `string` \| `null`; `name`: `string`; \} \| `null`; \}

A held object, ID string, or raw data.

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

`string` \| `null`

The ID string or null.

#### Inherited from

[`BaseManager`](BaseManager.md).[`resolveId`](BaseManager.md#resolveid)

***

### search()

> **search**(`query`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`MessageStruct`](MessageStruct.md)\>\>

Defined in: [src/managers/messageManager.ts:203](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/messageManager.ts#L203)

search for messages in the channel

#### Parameters

##### query

`string` \| [`MessageSearchOptions`](../interfaces/MessageSearchOptions.md)

The query to search for. Can be a string or an object with the following properties:
- query: The query to search for
- limit: The maximum number of messages to return
- before: The message ID to start searching from (exclusive)
- after: The message ID to stop searching at (exclusive)
- sort: The sort order of the results (asc or desc)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`MessageStruct`](MessageStruct.md)\>\>

Promise that resolves to a Map of message IDs to Message objects

***

### send()

> **send**(`content`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`MessageStruct`](MessageStruct.md)\>

Defined in: [src/managers/messageManager.ts:72](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/messageManager.ts#L72)

#### Parameters

##### content

`string` \| [`MessageOptions`](../interfaces/MessageOptions.md)

The content to send. Can be a string or an object with the following properties:
- content: The content of the message
- replies: An array of message IDs to reply to
- attachments: An array of attachment URLs, Files, or ReadStreams
- embeds: An array of MessageEmbed objects

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`MessageStruct`](MessageStruct.md)\>

Promise that resolves to the sent message

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

### valueOf()

> **valueOf**(): [`Collection`](Collection.md)\<`string`, [`MessageStruct`](MessageStruct.md)\>

Defined in: [src/managers/baseManager.ts:166](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/baseManager.ts#L166)

#### Returns

[`Collection`](Collection.md)\<`string`, [`MessageStruct`](MessageStruct.md)\>

#### Inherited from

[`BaseManager`](BaseManager.md).[`valueOf`](BaseManager.md#valueof)
