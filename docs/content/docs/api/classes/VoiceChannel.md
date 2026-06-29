---
title: "Class: VoiceChannel"
---

# Class: VoiceChannel

Defined in: [src/struct/voiceChannels.ts:28](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/voiceChannels.ts#L28)

Represents a voice channel in a server.

## Extends

- [`ServerChannel`](ServerChannel.md)

## Constructors

### Constructor

> **new VoiceChannel**(`client`, `data`): `VoiceChannel`

Defined in: [src/struct/voiceChannels.ts:39](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/voiceChannels.ts#L39)

Creates a new VoiceChannel instance.

#### Parameters

##### client

[`Client`](Client.md)

The client instance.

##### data

The raw data for the voice channel from the API.

###### _id

`string`

**Description**

Unique Id

###### channel_type

`"VoiceChannel"`

###### default_permissions?

\{ `a`: `number`; `d`: `number`; \} \| `null`

**Description**

Default permissions assigned to users in this channel

###### description?

`string` \| `null`

**Description**

Channel description

###### icon?

\{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`

**Description**

Custom icon attachment

###### name

`string`

**Description**

Display name of the channel

###### nsfw?

`boolean`

**Description**

Whether this channel is marked as not safe for work

###### role_permissions?

\{\[`key`: `string`\]: `object`; \}

**Description**

Permissions assigned based on role to this channel

###### server

`string`

**Description**

Id of the server this channel belongs to

#### Returns

`VoiceChannel`

#### Overrides

[`ServerChannel`](ServerChannel.md).[`constructor`](ServerChannel.md#constructor)

## Properties

### client

> `readonly` **client**: [`Client`](Client.md)

Defined in: [src/struct/base.ts:21](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/base.ts#L21)

The client instance.

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`client`](ServerChannel.md#client)

***

### description

> **description**: `string` \| `null` = `null`

Defined in: [src/struct/serverChannel.ts:34](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverChannel.ts#L34)

The description of the channel, or `null` if none is set.

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`description`](ServerChannel.md#description)

***

### icon

> **icon**: [`Attachment`](Attachment.md) \| `null` = `null`

Defined in: [src/struct/serverChannel.ts:37](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverChannel.ts#L37)

The icon of the channel, or `null` if none is set.

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`icon`](ServerChannel.md#icon)

***

### id

> **id**: `string`

Defined in: [src/struct/base.ts:14](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/base.ts#L14)

The unique identifier for the object.

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`id`](ServerChannel.md#id)

***

### messages

> **messages**: [`MessageManager`](MessageManager.md)

Defined in: [src/struct/serverChannel.ts:40](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverChannel.ts#L40)

Manages the messages in this Server channel.

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`messages`](ServerChannel.md#messages)

***

### name

> **name**: `string`

Defined in: [src/struct/serverChannel.ts:28](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverChannel.ts#L28)

The name of the channel.

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`name`](ServerChannel.md#name)

***

### nsfw

> **nsfw**: `boolean` = `false`

Defined in: [src/struct/serverChannel.ts:46](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverChannel.ts#L46)

Whether the channel is marked as NSFW (Not Safe For Work).

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`nsfw`](ServerChannel.md#nsfw)

***

### overwrites

> **overwrites**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`Overwrite`](../interfaces/Overwrite.md)\>

Defined in: [src/struct/serverChannel.ts:43](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverChannel.ts#L43)

The permission overwrites for the channel.

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`overwrites`](ServerChannel.md#overwrites)

***

### serverId

> **serverId**: `string`

Defined in: [src/struct/serverChannel.ts:31](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverChannel.ts#L31)

The ID of the server this channel belongs to.

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`serverId`](ServerChannel.md#serverid)

***

### type

> `readonly` **type**: [`VOICE`](../enumerations/ChannelTypes.md#voice) = `ChannelTypes.VOICE`

Defined in: [src/struct/voiceChannels.ts:30](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/voiceChannels.ts#L30)

The type of the channel, which is always `VOICE` for voice channels.

#### Overrides

[`ServerChannel`](ServerChannel.md).[`type`](ServerChannel.md#type)

***

### voice?

> `optional` **voice?**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`voiceParticipant`](../type-aliases/voiceParticipant.md)\>

Defined in: [src/struct/voiceChannels.ts:31](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/voiceChannels.ts#L31)

#### Overrides

[`ServerChannel`](ServerChannel.md).[`voice`](ServerChannel.md#voice)

## Accessors

### category

#### Get Signature

> **get** **category**(): [`Category`](Category.md) \| `null`

Defined in: [src/struct/serverChannel.ts:160](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverChannel.ts#L160)

Retrieves the category this channel belongs to, if any.

##### Returns

[`Category`](Category.md) \| `null`

The category instance, or `null` if the channel is not in a category.

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`category`](ServerChannel.md#category)

***

### createdAt

#### Get Signature

> **get** **createdAt**(): [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

Defined in: [src/struct/channel.ts:52](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/channel.ts#L52)

Gets the date and time when the channel was created.

##### Returns

[`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

The creation date of the channel.

The date and time when the channel was created.

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`createdAt`](ServerChannel.md#createdat)

***

### createdTimestamp

#### Get Signature

> **get** **createdTimestamp**(): `number`

Defined in: [src/struct/channel.ts:43](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/channel.ts#L43)

Gets the timestamp (in milliseconds) when the channel was created.

##### Returns

`number`

The timestamp of the channel's creation.

The timestamp (in milliseconds) when the channel was created.

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`createdTimestamp`](ServerChannel.md#createdtimestamp)

***

### server

#### Get Signature

> **get** **server**(): [`Server`](Server.md)

Defined in: [src/struct/serverChannel.ts:136](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverChannel.ts#L136)

Retrieves the server this channel belongs to.

##### Returns

[`Server`](Server.md)

The server instance.

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`server`](ServerChannel.md#server)

## Methods

### \_clone()

> **\_clone**(): `this`

Defined in: [src/struct/base.ts:84](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/base.ts#L84)

Creates a deep clone of the object.

#### Returns

`this`

A clone of the object.

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`_clone`](ServerChannel.md#_clone)

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

[`ServerChannel`](ServerChannel.md).[`_update`](ServerChannel.md#_update)

***

### ack()

> **ack**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/voiceChannels.ts:70](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/voiceChannels.ts#L70)

Acknowledges the voice channel.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Throws

Throws an error because voice channels cannot be acknowledged.

#### Example

```typescript
try {
  await voiceChannel.ack();
} catch (error) {
  console.error(error.message); // "Cannot ack voice channel"
}
```

***

### connect()

> **connect**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AudioPlayer`](AudioPlayer.md)\>

Defined in: [src/struct/voiceChannels.ts:88](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/voiceChannels.ts#L88)

Creates and connects an AudioPlayer to this voice channel in one step.
This is a convenience method that combines createPlayer() and connect().

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AudioPlayer`](AudioPlayer.md)\>

A promise that resolves to a connected AudioPlayer

#### Example

```typescript
const voiceChannel = await client.channels.fetch('voice-channel-id') as VoiceChannel;
const player = await voiceChannel.connect();

// Already connected, ready to play
await player.playFromUrl('https://example.com/music.mp3');
```

***

### createInvite()

> **createInvite**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Invite`](Invite.md)\>

Defined in: [src/struct/serverChannel.ts:109](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverChannel.ts#L109)

Creates an invite for the server channel.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Invite`](Invite.md)\>

A promise that resolves with the created invite.

#### Example

```typescript
const invite = await serverChannel.createInvite();
console.log(`Invite created: ${invite}`);
```

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`createInvite`](ServerChannel.md#createinvite)

***

### createWebhook()

> **createWebhook**(`name`, `avatar?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`createWebhookResponse`](../interfaces/createWebhookResponse.md)\>

Defined in: [src/struct/channel.ts:432](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/channel.ts#L432)

Creates a new webhook in this channel.

#### Parameters

##### name

`string`

The name of the webhook

##### avatar?

`string` \| `Readable` \| [`File`](https://developer.mozilla.org/docs/Web/API/File)

Optional avatar for the webhook. Can be a URL string, Readable stream, or File object

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`createWebhookResponse`](../interfaces/createWebhookResponse.md)\>

Promise resolving to the created webhook response

#### Example

```typescript
const webhook = await channel.createWebhook("My Webhook", "https://example.com/avatar.png");
```

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`createWebhook`](ServerChannel.md#createwebhook)

***

### delete()

> **delete**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/channel.ts:74](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/channel.ts#L74)

Deletes the current channel instance from the client's channel collection.

This method interacts with the client's channel management system to remove
the channel. Once deleted, the channel will no longer be accessible through
the client.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the channel has been successfully deleted.

#### Example

```typescript
const channel = client.channels.get('1234567890');
if (channel) {
  await channel.delete();
  console.log('Channel deleted successfully.');
}
```

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`delete`](ServerChannel.md#delete)

***

### deleteWebhook()

> **deleteWebhook**(`webhookId`, `token`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/channel.ts:516](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/channel.ts#L516)

Deletes a webhook.

#### Parameters

##### webhookId

`string`

The ID of the webhook to delete

##### token

`string`

The token of the webhook

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Promise that resolves when the webhook is deleted

#### Example

```typescript
await channel.deleteWebhook("webhookId", "webhookToken");
console.log("Webhook deleted successfully");
```

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`deleteWebhook`](ServerChannel.md#deletewebhook)

***

### disconnect()

> **disconnect**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/voiceChannels.ts:93](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/voiceChannels.ts#L93)

Disconnects the AudioPlayer from this voice channel's server.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### edit()

> **edit**(`data`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `_id`: `string`; `channel_type`: `string`; `user`: `string`; \}\>

Defined in: [src/struct/channel.ts:133](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/channel.ts#L133)

#### Parameters

##### data

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`CreateChannelOptions`](../interfaces/CreateChannelOptions.md)\>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `_id`: `string`; `channel_type`: `string`; `user`: `string`; \}\>

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`edit`](ServerChannel.md#edit)

***

### editWebhook()

> **editWebhook**(`webhookId`, `token`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`createWebhookResponse`](../interfaces/createWebhookResponse.md)\>

Defined in: [src/struct/channel.ts:536](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/channel.ts#L536)

Edits a webhook's properties.

#### Parameters

##### webhookId

`string`

The ID of the webhook to edit

##### token

`string`

The token of the webhook

##### options

[`editWebhookOptions`](../interfaces/editWebhookOptions.md)

The options to edit on the webhook

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`createWebhookResponse`](../interfaces/createWebhookResponse.md)\>

Promise resolving to the updated webhook response

#### Example

```typescript
const updatedWebhook = await channel.editWebhook("webhookId", "token", {
  name: "New Webhook Name",
  avatar: "https://example.com/new-avatar.png"
});
```

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`editWebhook`](ServerChannel.md#editwebhook)

***

### equals()

> **equals**(`obj?`): `boolean`

Defined in: [src/struct/base.ts:29](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/base.ts#L29)

Compares this object with another to determine if they are equal.

#### Parameters

##### obj?

`VoiceChannel` \| `null`

The object to compare with.

#### Returns

`boolean`

`true` if the objects are equal, otherwise `false`.

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`equals`](ServerChannel.md#equals)

***

### fetch()

> **fetch**(`force?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Channel`](Channel.md)\>

Defined in: [src/struct/channel.ts:129](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/channel.ts#L129)

Fetches the latest data for the channel from the client's channel collection.

#### Parameters

##### force?

`boolean` = `true`

Whether to force a fetch even if the channel is cached.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Channel`](Channel.md)\>

A promise that resolves with the updated channel instance.

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`fetch`](ServerChannel.md#fetch)

***

### getPartialWebhook()

> **getPartialWebhook**(`webhookId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`createWebhookResponse`](../interfaces/createWebhookResponse.md)\>

Defined in: [src/struct/channel.ts:557](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/channel.ts#L557)

Retrieves partial information about a webhook using only its ID.
This method provides limited webhook information without requiring a token.

#### Parameters

##### webhookId

`string`

The ID of the webhook to retrieve partial information for

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`createWebhookResponse`](../interfaces/createWebhookResponse.md)\>

Promise resolving to the webhook response with partial information

#### Example

```typescript
const partialWebhook = await channel.getPartialWebhook("webhookId");
console.log(`Webhook name: ${partialWebhook.name}`);
```

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`getPartialWebhook`](ServerChannel.md#getpartialwebhook)

***

### getPlayer()

> **getPlayer**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AudioPlayer`](AudioPlayer.md) \| `null`\>

Defined in: [src/struct/voiceChannels.ts:111](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/voiceChannels.ts#L111)

Retrieves the AudioPlayer associated with this voice channel, if any.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AudioPlayer`](AudioPlayer.md) \| `null`\>

A promise that resolves to the AudioPlayer or null if not found

***

### getWebhook()

> **getWebhook**(`webhookId`, `token`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`createWebhookResponse`](../interfaces/createWebhookResponse.md)\>

Defined in: [src/struct/channel.ts:467](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/channel.ts#L467)

Retrieves a specific webhook by ID and token.

#### Parameters

##### webhookId

`string`

The ID of the webhook to retrieve

##### token

`string`

The token of the webhook

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`createWebhookResponse`](../interfaces/createWebhookResponse.md)\>

Promise resolving to the webhook response

#### Example

```typescript
const webhook = await channel.getWebhook("webhookId", "webhookToken");
console.log(`Webhook name: ${webhook.name}`);
```

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`getWebhook`](ServerChannel.md#getwebhook)

***

### getWebhooks()

> **getWebhooks**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`createWebhookResponse`](../interfaces/createWebhookResponse.md)[]\>

Defined in: [src/struct/channel.ts:450](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/channel.ts#L450)

Retrieves all webhooks for this channel.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`createWebhookResponse`](../interfaces/createWebhookResponse.md)[]\>

Promise resolving to an array of webhook responses

#### Example

```typescript
const webhooks = await channel.getWebhooks();
console.log(`Found ${webhooks.length} webhooks`);
```

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`getWebhooks`](ServerChannel.md#getwebhooks)

***

### inServer()

> **inServer**(): `this is ServerChannel`

Defined in: [src/struct/channel.ts:110](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/channel.ts#L110)

Checks if the channel is part of a server.

#### Returns

`this is ServerChannel`

True if the channel is a server channel, otherwise false.

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`inServer`](ServerChannel.md#inserver)

***

### isGroup()

> **isGroup**(): `this is GroupChannel`

Defined in: [src/struct/channel.ts:101](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/channel.ts#L101)

Checks if the channel is a group channel.

#### Returns

`this is GroupChannel`

True if the channel is a group channel, otherwise false.

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`isGroup`](ServerChannel.md#isgroup)

***

### isText()

> **isText**(): this is TextChannel \| GroupChannel \| DMChannel

Defined in: [src/struct/channel.ts:83](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/channel.ts#L83)

Checks if the channel is a text-based channel.

#### Returns

this is TextChannel \| GroupChannel \| DMChannel

True if the channel is a text-based channel, otherwise false.

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`isText`](ServerChannel.md#istext)

***

### isVoice()

> **isVoice**(): `this is VoiceChannel`

Defined in: [src/struct/channel.ts:92](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/channel.ts#L92)

Checks if the channel is a voice channel.

#### Returns

`this is VoiceChannel`

True if the channel is a voice channel, otherwise false.

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`isVoice`](ServerChannel.md#isvoice)

***

### play()

> **play**(`source`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/voiceChannels.ts:103](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/voiceChannels.ts#L103)

Plays audio through the AudioPlayer connected to this voice channel.

#### Parameters

##### source

`string`

The audio source (URL, file path, or stream)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### send()

> **send**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`MessageStruct`](MessageStruct.md)\>

Defined in: [src/struct/serverChannel.ts:151](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverChannel.ts#L151)

Sends a message to this Server channel.

#### Parameters

##### options

`string` \| [`MessageOptions`](../interfaces/MessageOptions.md)

The message content or options for the message.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`MessageStruct`](MessageStruct.md)\>

A promise that resolves with the sent message.

#### Example

```typescript
await serverChannel.send("Hello, world!");
```

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`send`](ServerChannel.md#send)

***

### sendWebhookMessage()

> **sendWebhookMessage**(`webhookId`, `token`, `content`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `_id`: `string`; `attachments?`: `object`[] \| `null`; `author`: `string`; `channel`: `string`; `content?`: `string` \| `null`; `edited?`: `string` \| `null`; `embeds?`: (\{ `colour?`: `string` \| `null`; `description?`: `string` \| `null`; `icon_url?`: `string` \| `null`; `image?`: \{ `height`: `number`; `size`: `"Large"` \| `"Preview"`; `url`: `string`; `width`: `number`; \} \| `null`; `original_url?`: `string` \| `null`; `site_name?`: `string` \| `null`; `special?`: \{ `type`: `"None"`; \} \| \{ `type`: `"GIF"`; \} \| \{ `id`: `string`; `timestamp?`: `string` \| `null`; `type`: `"YouTube"`; \} \| \{ `content_type`: `"Channel"`; `id`: `string`; `type`: `"Lightspeed"`; \} \| \{ `content_type`: `"Video"` \| `"Channel"` \| `"Clip"`; `id`: `string`; `type`: `"Twitch"`; \} \| \{ `content_type`: `string`; `id`: `string`; `type`: `"Spotify"`; \} \| \{ `type`: `"Soundcloud"`; \} \| \{ `content_type`: `"Album"` \| `"Track"`; `id`: `string`; `type`: `"Bandcamp"`; \} \| \{ `album_id`: `string`; `track_id?`: `string` \| `null`; `type`: `"AppleMusic"`; \} \| \{ `id`: `string`; `type`: `"Streamable"`; \} \| `null`; `title?`: `string` \| `null`; `type`: `"Website"`; `url?`: `string` \| `null`; `video?`: \{ `height`: `number`; `url`: `string`; `width`: `number`; \} \| `null`; \} \| \{ `height`: `number`; `size`: `"Large"` \| `"Preview"`; `type`: `"Image"`; `url`: `string`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `url`: `string`; `width`: `number`; \} \| \{ `colour?`: `string` \| `null`; `description?`: `string` \| `null`; `icon_url?`: `string` \| `null`; `media?`: \{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`; `title?`: `string` \| `null`; `type`: `"Text"`; `url?`: `string` \| `null`; \} \| \{ `type`: `"None"`; \})[] \| `null`; `flags?`: `number`; `interactions?`: \{ `reactions?`: `string`[] \| `null`; `restrict_reactions?`: `boolean`; \}; `masquerade?`: \{ `avatar?`: `string` \| `null`; `colour?`: `string` \| `null`; `name?`: `string` \| `null`; \} \| `null`; `member?`: \{ `_id`: \{ `server`: `string`; `user`: `string`; \}; `avatar?`: \{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`; `joined_at`: `string`; `nickname?`: `string` \| `null`; `roles?`: `string`[]; `timeout?`: `string` \| `null`; \} \| `null`; `mentions?`: `string`[] \| `null`; `nonce?`: `string` \| `null`; `pinned?`: `boolean` \| `null`; `reactions?`: \{\[`key`: `string`\]: `string`[]; \}; `replies?`: `string`[] \| `null`; `role_mentions?`: `string`[] \| `null`; `system?`: \{ `content`: `string`; `type`: `"text"`; \} \| \{ `by`: `string`; `id`: `string`; `type`: `"user_added"`; \} \| \{ `by`: `string`; `id`: `string`; `type`: `"user_remove"`; \} \| \{ `id`: `string`; `type`: `"user_joined"`; \} \| \{ `id`: `string`; `type`: `"user_left"`; \} \| \{ `id`: `string`; `type`: `"user_kicked"`; \} \| \{ `id`: `string`; `type`: `"user_banned"`; \} \| \{ `by`: `string`; `name`: `string`; `type`: `"channel_renamed"`; \} \| \{ `by`: `string`; `type`: `"channel_description_changed"`; \} \| \{ `by`: `string`; `type`: `"channel_icon_changed"`; \} \| \{ `from`: `string`; `to`: `string`; `type`: `"channel_ownership_changed"`; \} \| \{ `by`: `string`; `id`: `string`; `type`: `"message_pinned"`; \} \| \{ `by`: `string`; `id`: `string`; `type`: `"message_unpinned"`; \} \| `null`; `user?`: \{ `_id`: `string`; `avatar?`: \{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`; `badges?`: `number`; `bot?`: \{ `owner`: `string`; \} \| `null`; `discriminator`: `string`; `display_name?`: `string` \| `null`; `flags?`: `number`; `online`: `boolean`; `privileged?`: `boolean`; `relations?`: `object`[]; `relationship`: `"User"` \| `"None"` \| `"Friend"` \| `"Blocked"` \| `"Outgoing"` \| `"Incoming"` \| `"BlockedOther"`; `status?`: \{ `presence?`: `"Online"` \| `"Idle"` \| `"Focus"` \| `"Busy"` \| `"Invisible"` \| `null`; `text?`: `string` \| `null`; \} \| `null`; `username`: `string`; \} \| `null`; `webhook?`: \{ `avatar?`: `string` \| `null`; `name`: `string`; \} \| `null`; \}\>

Defined in: [src/struct/channel.ts:495](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/channel.ts#L495)

Sends a message through a webhook in this channel.

#### Parameters

##### webhookId

`string`

The ID of the webhook to send the message through

##### token

`string`

The token of the webhook

##### content

`string` \| [`MessageOptions`](../interfaces/MessageOptions.md)

The message content. Can be a string or MessageOptions object with attachments and embeds

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `_id`: `string`; `attachments?`: `object`[] \| `null`; `author`: `string`; `channel`: `string`; `content?`: `string` \| `null`; `edited?`: `string` \| `null`; `embeds?`: (\{ `colour?`: `string` \| `null`; `description?`: `string` \| `null`; `icon_url?`: `string` \| `null`; `image?`: \{ `height`: `number`; `size`: `"Large"` \| `"Preview"`; `url`: `string`; `width`: `number`; \} \| `null`; `original_url?`: `string` \| `null`; `site_name?`: `string` \| `null`; `special?`: \{ `type`: `"None"`; \} \| \{ `type`: `"GIF"`; \} \| \{ `id`: `string`; `timestamp?`: `string` \| `null`; `type`: `"YouTube"`; \} \| \{ `content_type`: `"Channel"`; `id`: `string`; `type`: `"Lightspeed"`; \} \| \{ `content_type`: `"Video"` \| `"Channel"` \| `"Clip"`; `id`: `string`; `type`: `"Twitch"`; \} \| \{ `content_type`: `string`; `id`: `string`; `type`: `"Spotify"`; \} \| \{ `type`: `"Soundcloud"`; \} \| \{ `content_type`: `"Album"` \| `"Track"`; `id`: `string`; `type`: `"Bandcamp"`; \} \| \{ `album_id`: `string`; `track_id?`: `string` \| `null`; `type`: `"AppleMusic"`; \} \| \{ `id`: `string`; `type`: `"Streamable"`; \} \| `null`; `title?`: `string` \| `null`; `type`: `"Website"`; `url?`: `string` \| `null`; `video?`: \{ `height`: `number`; `url`: `string`; `width`: `number`; \} \| `null`; \} \| \{ `height`: `number`; `size`: `"Large"` \| `"Preview"`; `type`: `"Image"`; `url`: `string`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `url`: `string`; `width`: `number`; \} \| \{ `colour?`: `string` \| `null`; `description?`: `string` \| `null`; `icon_url?`: `string` \| `null`; `media?`: \{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`; `title?`: `string` \| `null`; `type`: `"Text"`; `url?`: `string` \| `null`; \} \| \{ `type`: `"None"`; \})[] \| `null`; `flags?`: `number`; `interactions?`: \{ `reactions?`: `string`[] \| `null`; `restrict_reactions?`: `boolean`; \}; `masquerade?`: \{ `avatar?`: `string` \| `null`; `colour?`: `string` \| `null`; `name?`: `string` \| `null`; \} \| `null`; `member?`: \{ `_id`: \{ `server`: `string`; `user`: `string`; \}; `avatar?`: \{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`; `joined_at`: `string`; `nickname?`: `string` \| `null`; `roles?`: `string`[]; `timeout?`: `string` \| `null`; \} \| `null`; `mentions?`: `string`[] \| `null`; `nonce?`: `string` \| `null`; `pinned?`: `boolean` \| `null`; `reactions?`: \{\[`key`: `string`\]: `string`[]; \}; `replies?`: `string`[] \| `null`; `role_mentions?`: `string`[] \| `null`; `system?`: \{ `content`: `string`; `type`: `"text"`; \} \| \{ `by`: `string`; `id`: `string`; `type`: `"user_added"`; \} \| \{ `by`: `string`; `id`: `string`; `type`: `"user_remove"`; \} \| \{ `id`: `string`; `type`: `"user_joined"`; \} \| \{ `id`: `string`; `type`: `"user_left"`; \} \| \{ `id`: `string`; `type`: `"user_kicked"`; \} \| \{ `id`: `string`; `type`: `"user_banned"`; \} \| \{ `by`: `string`; `name`: `string`; `type`: `"channel_renamed"`; \} \| \{ `by`: `string`; `type`: `"channel_description_changed"`; \} \| \{ `by`: `string`; `type`: `"channel_icon_changed"`; \} \| \{ `from`: `string`; `to`: `string`; `type`: `"channel_ownership_changed"`; \} \| \{ `by`: `string`; `id`: `string`; `type`: `"message_pinned"`; \} \| \{ `by`: `string`; `id`: `string`; `type`: `"message_unpinned"`; \} \| `null`; `user?`: \{ `_id`: `string`; `avatar?`: \{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`; `badges?`: `number`; `bot?`: \{ `owner`: `string`; \} \| `null`; `discriminator`: `string`; `display_name?`: `string` \| `null`; `flags?`: `number`; `online`: `boolean`; `privileged?`: `boolean`; `relations?`: `object`[]; `relationship`: `"User"` \| `"None"` \| `"Friend"` \| `"Blocked"` \| `"Outgoing"` \| `"Incoming"` \| `"BlockedOther"`; `status?`: \{ `presence?`: `"Online"` \| `"Idle"` \| `"Focus"` \| `"Busy"` \| `"Invisible"` \| `null`; `text?`: `string` \| `null`; \} \| `null`; `username`: `string`; \} \| `null`; `webhook?`: \{ `avatar?`: `string` \| `null`; `name`: `string`; \} \| `null`; \}\>

Promise resolving to the sent message

#### Example

```typescript
// Send a simple text message
await channel.sendWebhookMessage("webhookId", "token", "Hello, world!");

// Send a message with embeds and attachments
await channel.sendWebhookMessage("webhookId", "token", {
  content: "Check out this image!",
  attachments: ["https://example.com/image.png"],
  embeds: [myEmbed]
});
```

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`sendWebhookMessage`](ServerChannel.md#sendwebhookmessage)

***

### setDefaultPermissions()

#### Call Signature

> **setDefaultPermissions**(`allow`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/channel.ts:292](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/channel.ts#L292)

Sets default permissions for this channel.

##### Parameters

###### allow

(`"ManageChannel"` \| `"ManageServer"` \| `"ManagePermissions"` \| `"ManageRole"` \| `"ManageCustomisation"` \| `"KickMembers"` \| `"BanMembers"` \| `"TimeoutMembers"` \| `"AssignRoles"` \| `"ChangeNickname"` \| `"ManageNicknames"` \| `"ChangeAvatar"` \| `"RemoveAvatars"` \| `"ViewChannel"` \| `"ReadMessageHistory"` \| `"SendMessage"` \| `"ManageMessages"` \| `"ManageWebhooks"` \| `"InviteOthers"` \| `"SendEmbeds"` \| `"UploadFiles"` \| `"Masquerade"` \| `"React"` \| `"Connect"` \| `"Speak"` \| `"Video"` \| `"MuteMembers"` \| `"DeafenMembers"` \| `"MoveMembers"` \| `"MentionEveryone"` \| `"MentionRoles"` \| `"GrantAll"`)[] \| `undefined`

Array of permissions to allow by default.

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the permissions have been updated.

##### Throws

If the channel ID is invalid.

##### Example

```typescript
// Allow specific permissions
await channel.setDefaultPermissions(["ViewChannel", "SendMessage"]);
```

##### Inherited from

[`ServerChannel`](ServerChannel.md).[`setDefaultPermissions`](ServerChannel.md#setdefaultpermissions)

#### Call Signature

> **setDefaultPermissions**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/channel.ts:317](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/channel.ts#L317)

Sets default permissions for this channel.

##### Parameters

###### options

Object containing allow and/or deny permissions.

###### allow?

(`"ManageChannel"` \| `"ManageServer"` \| `"ManagePermissions"` \| `"ManageRole"` \| `"ManageCustomisation"` \| `"KickMembers"` \| `"BanMembers"` \| `"TimeoutMembers"` \| `"AssignRoles"` \| `"ChangeNickname"` \| `"ManageNicknames"` \| `"ChangeAvatar"` \| `"RemoveAvatars"` \| `"ViewChannel"` \| `"ReadMessageHistory"` \| `"SendMessage"` \| `"ManageMessages"` \| `"ManageWebhooks"` \| `"InviteOthers"` \| `"SendEmbeds"` \| `"UploadFiles"` \| `"Masquerade"` \| `"React"` \| `"Connect"` \| `"Speak"` \| `"Video"` \| `"MuteMembers"` \| `"DeafenMembers"` \| `"MoveMembers"` \| `"MentionEveryone"` \| `"MentionRoles"` \| `"GrantAll"`)[]

###### deny?

(`"ManageChannel"` \| `"ManageServer"` \| `"ManagePermissions"` \| `"ManageRole"` \| `"ManageCustomisation"` \| `"KickMembers"` \| `"BanMembers"` \| `"TimeoutMembers"` \| `"AssignRoles"` \| `"ChangeNickname"` \| `"ManageNicknames"` \| `"ChangeAvatar"` \| `"RemoveAvatars"` \| `"ViewChannel"` \| `"ReadMessageHistory"` \| `"SendMessage"` \| `"ManageMessages"` \| `"ManageWebhooks"` \| `"InviteOthers"` \| `"SendEmbeds"` \| `"UploadFiles"` \| `"Masquerade"` \| `"React"` \| `"Connect"` \| `"Speak"` \| `"Video"` \| `"MuteMembers"` \| `"DeafenMembers"` \| `"MoveMembers"` \| `"MentionEveryone"` \| `"MentionRoles"` \| `"GrantAll"`)[]

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the permissions have been updated.

##### Throws

If the channel ID is invalid or if both allow and deny are undefined.

##### Example

```typescript
// Allow specific permissions only
await channel.setDefaultPermissions({ allow: ["ViewChannel", "SendMessage"] });

// Deny specific permissions only
await channel.setDefaultPermissions({ deny: ["ManageMessages"] });

// Set both allow and deny permissions
await channel.setDefaultPermissions({
  allow: ["ViewChannel"],
  deny: ["ManageMessages"]
});
```

##### Inherited from

[`ServerChannel`](ServerChannel.md).[`setDefaultPermissions`](ServerChannel.md#setdefaultpermissions)

#### Call Signature

> **setDefaultPermissions**(`permissions`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/channel.ts:339](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/channel.ts#L339)

Sets default permissions for this channel (legacy format).

##### Parameters

###### permissions

[`editablePermissions`](../type-aliases/editablePermissions.md)

Object containing allow and deny permissions.

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the permissions have been updated.

##### Throws

If the channel ID is invalid.

##### Example

```typescript
// Legacy format
await channel.setDefaultPermissions({
  a: ["ViewChannel"],
  d: ["ManageMessages"]
});
```

##### Inherited from

[`ServerChannel`](ServerChannel.md).[`setDefaultPermissions`](ServerChannel.md#setdefaultpermissions)

***

### setRolePermissions()

#### Call Signature

> **setRolePermissions**(`roleId`, `allow`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/channel.ts:161](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/channel.ts#L161)

Sets role permissions for this channel.

##### Parameters

###### roleId

`string`

The ID of the role to set permissions for.

###### allow

(`"ManageChannel"` \| `"ManageServer"` \| `"ManagePermissions"` \| `"ManageRole"` \| `"ManageCustomisation"` \| `"KickMembers"` \| `"BanMembers"` \| `"TimeoutMembers"` \| `"AssignRoles"` \| `"ChangeNickname"` \| `"ManageNicknames"` \| `"ChangeAvatar"` \| `"RemoveAvatars"` \| `"ViewChannel"` \| `"ReadMessageHistory"` \| `"SendMessage"` \| `"ManageMessages"` \| `"ManageWebhooks"` \| `"InviteOthers"` \| `"SendEmbeds"` \| `"UploadFiles"` \| `"Masquerade"` \| `"React"` \| `"Connect"` \| `"Speak"` \| `"Video"` \| `"MuteMembers"` \| `"DeafenMembers"` \| `"MoveMembers"` \| `"MentionEveryone"` \| `"MentionRoles"` \| `"GrantAll"`)[] \| `undefined`

Array of permissions to allow for the role.

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the permissions have been updated.

##### Throws

If the channel ID is invalid.

##### Example

```typescript
// Allow specific permissions
await channel.setRolePermissions(roleId, ["ViewChannel", "SendMessage"]);
```

##### Inherited from

[`ServerChannel`](ServerChannel.md).[`setRolePermissions`](ServerChannel.md#setrolepermissions)

#### Call Signature

> **setRolePermissions**(`roleId`, `allow`, `deny`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/channel.ts:182](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/channel.ts#L182)

Sets role permissions for this channel.

##### Parameters

###### roleId

`string`

The ID of the role to set permissions for.

###### allow

(`"ManageChannel"` \| `"ManageServer"` \| `"ManagePermissions"` \| `"ManageRole"` \| `"ManageCustomisation"` \| `"KickMembers"` \| `"BanMembers"` \| `"TimeoutMembers"` \| `"AssignRoles"` \| `"ChangeNickname"` \| `"ManageNicknames"` \| `"ChangeAvatar"` \| `"RemoveAvatars"` \| `"ViewChannel"` \| `"ReadMessageHistory"` \| `"SendMessage"` \| `"ManageMessages"` \| `"ManageWebhooks"` \| `"InviteOthers"` \| `"SendEmbeds"` \| `"UploadFiles"` \| `"Masquerade"` \| `"React"` \| `"Connect"` \| `"Speak"` \| `"Video"` \| `"MuteMembers"` \| `"DeafenMembers"` \| `"MoveMembers"` \| `"MentionEveryone"` \| `"MentionRoles"` \| `"GrantAll"`)[] \| `undefined`

Array of permissions to allow for the role.

###### deny

(`"ManageChannel"` \| `"ManageServer"` \| `"ManagePermissions"` \| `"ManageRole"` \| `"ManageCustomisation"` \| `"KickMembers"` \| `"BanMembers"` \| `"TimeoutMembers"` \| `"AssignRoles"` \| `"ChangeNickname"` \| `"ManageNicknames"` \| `"ChangeAvatar"` \| `"RemoveAvatars"` \| `"ViewChannel"` \| `"ReadMessageHistory"` \| `"SendMessage"` \| `"ManageMessages"` \| `"ManageWebhooks"` \| `"InviteOthers"` \| `"SendEmbeds"` \| `"UploadFiles"` \| `"Masquerade"` \| `"React"` \| `"Connect"` \| `"Speak"` \| `"Video"` \| `"MuteMembers"` \| `"DeafenMembers"` \| `"MoveMembers"` \| `"MentionEveryone"` \| `"MentionRoles"` \| `"GrantAll"`)[] \| `undefined`

Array of permissions to deny for the role.

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the permissions have been updated.

##### Throws

If the channel ID is invalid.

##### Example

```typescript
// Set both allow and deny permissions
await channel.setRolePermissions(roleId, ["ViewChannel"], ["ManageMessages"]);
```

##### Inherited from

[`ServerChannel`](ServerChannel.md).[`setRolePermissions`](ServerChannel.md#setrolepermissions)

#### Call Signature

> **setRolePermissions**(`roleId`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/channel.ts:212](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/channel.ts#L212)

Sets role permissions for this channel.

##### Parameters

###### roleId

`string`

The ID of the role to set permissions for.

###### options

Object containing allow and/or deny permissions.

###### allow?

(`"ManageChannel"` \| `"ManageServer"` \| `"ManagePermissions"` \| `"ManageRole"` \| `"ManageCustomisation"` \| `"KickMembers"` \| `"BanMembers"` \| `"TimeoutMembers"` \| `"AssignRoles"` \| `"ChangeNickname"` \| `"ManageNicknames"` \| `"ChangeAvatar"` \| `"RemoveAvatars"` \| `"ViewChannel"` \| `"ReadMessageHistory"` \| `"SendMessage"` \| `"ManageMessages"` \| `"ManageWebhooks"` \| `"InviteOthers"` \| `"SendEmbeds"` \| `"UploadFiles"` \| `"Masquerade"` \| `"React"` \| `"Connect"` \| `"Speak"` \| `"Video"` \| `"MuteMembers"` \| `"DeafenMembers"` \| `"MoveMembers"` \| `"MentionEveryone"` \| `"MentionRoles"` \| `"GrantAll"`)[]

###### deny?

(`"ManageChannel"` \| `"ManageServer"` \| `"ManagePermissions"` \| `"ManageRole"` \| `"ManageCustomisation"` \| `"KickMembers"` \| `"BanMembers"` \| `"TimeoutMembers"` \| `"AssignRoles"` \| `"ChangeNickname"` \| `"ManageNicknames"` \| `"ChangeAvatar"` \| `"RemoveAvatars"` \| `"ViewChannel"` \| `"ReadMessageHistory"` \| `"SendMessage"` \| `"ManageMessages"` \| `"ManageWebhooks"` \| `"InviteOthers"` \| `"SendEmbeds"` \| `"UploadFiles"` \| `"Masquerade"` \| `"React"` \| `"Connect"` \| `"Speak"` \| `"Video"` \| `"MuteMembers"` \| `"DeafenMembers"` \| `"MoveMembers"` \| `"MentionEveryone"` \| `"MentionRoles"` \| `"GrantAll"`)[]

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the permissions have been updated.

##### Throws

If the channel ID is invalid or if both allow and deny are undefined.

##### Example

```typescript
// Allow specific permissions only
await channel.setRolePermissions(roleId, { allow: ["ViewChannel", "SendMessage"] });

// Deny specific permissions only
await channel.setRolePermissions(roleId, { deny: ["ManageMessages"] });

// Set both allow and deny permissions
await channel.setRolePermissions(roleId, {
  allow: ["ViewChannel"],
  deny: ["ManageMessages"]
});
```

##### Inherited from

[`ServerChannel`](ServerChannel.md).[`setRolePermissions`](ServerChannel.md#setrolepermissions)

***

### stop()

> **stop**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/voiceChannels.ts:97](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/voiceChannels.ts#L97)

Stops the AudioPlayer in this voice channel's server.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### toString()

> **toString**(): `string`

Defined in: [src/struct/channel.ts:119](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/channel.ts#L119)

Converts the channel to a string representation.

#### Returns

`string`

A string representation of the channel in the format `<#channelId>`.

#### Inherited from

[`ServerChannel`](ServerChannel.md).[`toString`](ServerChannel.md#tostring)
