---
title: "Class: Server"
---

# Class: Server

Defined in: [src/struct/server.ts:22](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L22)

Represents a server (guild) in the client.

## Extends

- [`Base`](Base.md)

## Constructors

### Constructor

> **new Server**(`client`, `data`): `Server`

Defined in: [src/struct/server.ts:74](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L74)

Creates a new Server instance.

#### Parameters

##### client

[`Client`](Client.md)

The client instance.

##### data

The raw data for the server from the API.

###### _id

`string`

**Description**

Unique Id

###### analytics?

`boolean`

**Description**

Whether to enable analytics

###### banner?

\{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`

**Description**

Banner attachment

###### categories?

`object`[] \| `null`

**Description**

Categories for this server

###### channels

`string`[]

**Description**

Channels within this server

###### default_permissions

`number`

Format: int64

**Description**

Default set of server and channel permissions

###### description?

`string` \| `null`

**Description**

Description for the server

###### discoverable?

`boolean`

**Description**

Whether this server should be publicly discoverable

###### flags?

`number`

Format: uint32

**Description**

Bitfield of server flags

###### icon?

\{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`

**Description**

Icon attachment

###### name

`string`

**Description**

Name of the server

###### nsfw?

`boolean`

**Description**

Whether this server is flagged as not safe for work

###### owner

`string`

**Description**

User id of the owner

###### roles?

\{\[`key`: `string`\]: `object`; \}

**Description**

Roles for this server

###### system_messages?

\{ `user_banned?`: `string` \| `null`; `user_joined?`: `string` \| `null`; `user_kicked?`: `string` \| `null`; `user_left?`: `string` \| `null`; \} \| `null`

**Description**

Configuration for sending system event messages

#### Returns

`Server`

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructor)

## Properties

### analytics

> **analytics**: `boolean` = `false`

Defined in: [src/struct/server.ts:48](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L48)

Whether analytics are enabled for the server.

***

### banner

> **banner**: [`Attachment`](Attachment.md) \| `null` = `null`

Defined in: [src/struct/server.ts:45](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L45)

The banner of the server, or `null` if none is set.

***

### categories

> **categories**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`Category`](Category.md)\>

Defined in: [src/struct/server.ts:60](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L60)

The categories in the server.

***

### channels

> **channels**: [`ServerChannelManager`](ServerChannelManager.md)

Defined in: [src/struct/server.ts:36](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L36)

Manages the channels of the server.

***

### client

> `readonly` **client**: [`Client`](Client.md)

Defined in: [src/struct/base.ts:21](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/base.ts#L21)

The client instance.

#### Inherited from

[`Base`](Base.md).[`client`](Base.md#client)

***

### description

> **description**: `string` \| `null` = `null`

Defined in: [src/struct/server.ts:27](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L27)

The description of the server, or `null` if none is set.

***

### discoverable

> **discoverable**: `boolean` = `false`

Defined in: [src/struct/server.ts:51](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L51)

Whether the server is discoverable.

***

### emojis

> **emojis**: [`EmojiManager`](EmojiManager.md)

Defined in: [src/struct/server.ts:63](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L63)

Manages the emojis of the server.

***

### icon

> **icon**: [`Attachment`](Attachment.md) \| `null` = `null`

Defined in: [src/struct/server.ts:42](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L42)

The icon of the server, or `null` if none is set.

***

### id

> **id**: `string`

Defined in: [src/struct/base.ts:14](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/base.ts#L14)

The unique identifier for the object.

#### Inherited from

[`Base`](Base.md).[`id`](Base.md#id)

***

### members

> **members**: [`ServerMemberManager`](ServerMemberManager.md)

Defined in: [src/struct/server.ts:33](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L33)

Manages the members of the server.

***

### name

> **name**: `string`

Defined in: [src/struct/server.ts:24](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L24)

The name of the server.

***

### nsfw

> **nsfw**: `boolean` = `false`

Defined in: [src/struct/server.ts:54](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L54)

Whether the server is marked as NSFW (Not Safe For Work).

***

### ownerId

> **ownerId**: `string`

Defined in: [src/struct/server.ts:30](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L30)

The ID of the user who owns the server.

***

### permissions

> **permissions**: [`FullPermissions`](FullPermissions.md)

Defined in: [src/struct/server.ts:57](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L57)

The default permissions for the server.

***

### roles

> **roles**: [`RoleManager`](RoleManager.md)

Defined in: [src/struct/server.ts:39](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L39)

Manages the roles of the server.

***

### systemMessages

> **systemMessages**: \{ `user_banned?`: `string` \| `null`; `user_joined?`: `string` \| `null`; `user_kicked?`: `string` \| `null`; `user_left?`: `string` \| `null`; \} \| `null` = `null`

Defined in: [src/struct/server.ts:66](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L66)

The system message channels for the server.

#### Union Members

##### Type Literal

\{ `user_banned?`: `string` \| `null`; `user_joined?`: `string` \| `null`; `user_kicked?`: `string` \| `null`; `user_left?`: `string` \| `null`; \}

##### user\_banned?

> `optional` **user\_banned?**: `string` \| `null`

###### Description

ID of channel to send user banned messages in

##### user\_joined?

> `optional` **user\_joined?**: `string` \| `null`

###### Description

ID of channel to send user join messages in

##### user\_kicked?

> `optional` **user\_kicked?**: `string` \| `null`

###### Description

ID of channel to send user kicked messages in

##### user\_left?

> `optional` **user\_left?**: `string` \| `null`

###### Description

ID of channel to send user left messages in

***

`null`

## Accessors

### createdAt

#### Get Signature

> **get** **createdAt**(): [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

Defined in: [src/struct/server.ts:169](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L169)

Gets the creation date of the server.

##### Returns

[`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

The date when the server was created.

***

### createdTimestamp

#### Get Signature

> **get** **createdTimestamp**(): `number`

Defined in: [src/struct/server.ts:178](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L178)

Gets the creation timestamp of the server in milliseconds.

##### Returns

`number`

The timestamp of when the server was created.

***

### me

#### Get Signature

> **get** **me**(): [`ServerMember`](ServerMember.md) \| `null`

Defined in: [src/struct/server.ts:160](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L160)

Retrieves the current user's member instance in the server.

##### Returns

[`ServerMember`](ServerMember.md) \| `null`

The current user's member instance, or `null` if not found.

***

### owner

#### Get Signature

> **get** **owner**(): [`User`](User.md) \| `null`

Defined in: [src/struct/server.ts:187](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L187)

Retrieves the owner of the server.

##### Returns

[`User`](User.md) \| `null`

The owner of the server, or `null` if not found.

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

Defined in: [src/struct/server.ts:362](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L362)

Marks all channels in this server as read.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### ban()

> **ban**(`userId`, `reason?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/server.ts:337](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L337)

Bans a user from this server.

#### Parameters

##### userId

`string`

The user ID to ban.

##### reason?

`string`

The reason for the ban (optional).

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### bannerURL()

> **bannerURL**(): `string` \| `null`

Defined in: [src/struct/server.ts:207](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L207)

Gets the URL of the server banner.

#### Returns

`string` \| `null`

The banner URL, or `null` if no banner is set.

***

### createEmoji()

> **createEmoji**(`name`, `image`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Emoji`](Emoji.md)\>

Defined in: [src/struct/server.ts:305](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L305)

Creates a new emoji in this server.

#### Parameters

##### name

`string`

The name of the emoji.

##### image

`string` \| `Buffer`\<`ArrayBufferLike`\>

The image data (file path, URL, or buffer).

##### options?

Additional options for the emoji.

###### nsfw?

`boolean`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Emoji`](Emoji.md)\>

The created emoji.

***

### delete()

> **delete**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/server.ts:238](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L238)

Deletes the server (alias for leave).

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### edit()

> **edit**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Server`\>

Defined in: [src/struct/server.ts:219](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L219)

Edits the server.

#### Parameters

##### options

The options to edit the server with.

###### analytics?

`boolean` \| `null`

**Description**

Whether analytics should be collected for this server

Must be enabled in order to show up on [Revolt Discover](https://rvlt.gg).

###### banner?

`string` \| `null`

**Description**

Attachment Id for banner

###### categories?

`object`[] \| `null`

**Description**

Category structure for server

###### description?

`string` \| `null`

**Description**

Server description

###### discoverable?

`boolean` \| `null`

**Description**

Whether this server is public and should show up on [Revolt Discover](https://rvlt.gg)

###### flags?

`number` \| `null`

Format: int32

**Description**

Bitfield of server flags

###### icon?

`string` \| `null`

**Description**

Attachment Id for icon

###### name?

`string` \| `null`

**Description**

Server name

###### remove?

(`"Description"` \| `"Categories"` \| `"SystemMessages"` \| `"Icon"` \| `"Banner"`)[]

**Description**

Fields to remove from server object

**Default**

```ts
[]
```

###### system_messages?

\{ `user_banned?`: `string` \| `null`; `user_joined?`: `string` \| `null`; `user_kicked?`: `string` \| `null`; `user_left?`: `string` \| `null`; \} \| `null`

**Description**

System message configuration

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Server`\>

The updated server instance.

***

### equals()

> **equals**(`obj?`): `boolean`

Defined in: [src/struct/base.ts:29](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/base.ts#L29)

Compares this object with another to determine if they are equal.

#### Parameters

##### obj?

`Server` \| `null`

The object to compare with.

#### Returns

`boolean`

`true` if the objects are equal, otherwise `false`.

#### Inherited from

[`Base`](Base.md).[`equals`](Base.md#equals)

***

### fetchBans()

> **fetchBans**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`[]\>

Defined in: [src/struct/server.ts:327](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L327)

Fetches all bans for this server.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`[]\>

Array of ban data.

***

### fetchEmojis()

> **fetchEmojis**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`Emoji`](Emoji.md)\>\>

Defined in: [src/struct/server.ts:318](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L318)

Fetches all emojis for this server.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`Emoji`](Emoji.md)\>\>

Map of emojis.

***

### fetchInvites()

> **fetchInvites**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`[]\>

Defined in: [src/struct/server.ts:355](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L355)

Fetches all invites for this server.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`[]\>

Array of invite data.

***

### iconURL()

> **iconURL**(): `string` \| `null`

Defined in: [src/struct/server.ts:196](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L196)

Gets the URL of the server icon.

#### Returns

`string` \| `null`

The icon URL, or `null` if no icon is set.

***

### leave()

> **leave**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/server.ts:229](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L229)

Leaves the server.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### markAsRead()

> **markAsRead**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/server.ts:370](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L370)

Marks all channels in this server as read.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Alias

ack

***

### setBanner()

> **setBanner**(`banner`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Server`\>

Defined in: [src/struct/server.ts:259](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L259)

Sets the banner of the server.

#### Parameters

##### banner

`string` \| `null`

The new banner, or `null` to remove it.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Server`\>

***

### setDefaultPermissions()

> **setDefaultPermissions**(`permissions`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Server`\>

Defined in: [src/struct/server.ts:292](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L292)

Sets the default permissions for the server.

#### Parameters

##### permissions

`number`

The default permissions value.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Server`\>

***

### setDescription()

> **setDescription**(`description`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Server`\>

Defined in: [src/struct/server.ts:270](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L270)

Sets the description of the server.

#### Parameters

##### description

`string` \| `null`

The new description, or `null` to remove it.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Server`\>

***

### setIcon()

> **setIcon**(`icon`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Server`\>

Defined in: [src/struct/server.ts:248](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L248)

Sets the icon of the server.

#### Parameters

##### icon

`string` \| `null`

The new icon, or `null` to remove it.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Server`\>

***

### setNSFW()

> **setNSFW**(`nsfw`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Server`\>

Defined in: [src/struct/server.ts:281](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L281)

Sets whether the server is NSFW.

#### Parameters

##### nsfw

`boolean`

Whether the server should be NSFW.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Server`\>

***

### toString()

> **toString**(): `string`

Defined in: [src/struct/server.ts:379](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L379)

Converts the server to a string representation.

#### Returns

`string`

The name of the server.

***

### unban()

> **unban**(`userId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/server.ts:346](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/server.ts#L346)

Unbans a user from this server.

#### Parameters

##### userId

`string`

The user ID to unban.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>
