---
title: "Class: WebhookManager"
---

# Class: WebhookManager

Defined in: [src/managers/webhookManager.ts:18](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/webhookManager.ts#L18)

Manages webhooks for the client.
Provides methods for creating, managing, and sending messages through webhooks.

## Constructors

### Constructor

> **new WebhookManager**(`client`): `WebhookManager`

Defined in: [src/managers/webhookManager.ts:24](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/webhookManager.ts#L24)

Creates a new WebhookManager instance.

#### Parameters

##### client

[`Client`](Client.md)

The client instance this manager belongs to

#### Returns

`WebhookManager`

## Methods

### create()

> **create**(`channelId`, `name`, `avatar?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`createWebhookResponse`](../interfaces/createWebhookResponse.md)\>

Defined in: [src/managers/webhookManager.ts:39](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/webhookManager.ts#L39)

Creates a new webhook in the specified channel.

#### Parameters

##### channelId

`string`

The ID of the channel where the webhook will be created

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
const webhook = await client.webhooks.create("channelId", "My Webhook", "https://example.com/avatar.png");
```

***

### delete()

> **delete**(`webhookId`, `token`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/webhookManager.ts:209](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/webhookManager.ts#L209)

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
await client.webhooks.delete("webhookId", "webhookToken");
console.log("Webhook deleted successfully");
```

***

### edit()

> **edit**(`webhookId`, `token`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`createWebhookResponse`](../interfaces/createWebhookResponse.md)\>

Defined in: [src/managers/webhookManager.ts:229](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/webhookManager.ts#L229)

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
const updatedWebhook = await client.webhooks.edit("webhookId", "token", {
  name: "New Webhook Name",
  avatar: "https://example.com/new-avatar.png"
});
```

***

### get()

> **get**(`webhookId`, `token`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`createWebhookResponse`](../interfaces/createWebhookResponse.md)\>

Defined in: [src/managers/webhookManager.ts:114](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/webhookManager.ts#L114)

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
const webhook = await client.webhooks.get("webhookId", "webhookToken");
console.log(`Webhook name: ${webhook.name}`);
```

***

### getAll()

> **getAll**(`channelId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`createWebhookResponse`](../interfaces/createWebhookResponse.md)[]\>

Defined in: [src/managers/webhookManager.ts:94](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/webhookManager.ts#L94)

Retrieves all webhooks for the specified channel.

#### Parameters

##### channelId

`string`

The ID of the channel to get webhooks from

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`createWebhookResponse`](../interfaces/createWebhookResponse.md)[]\>

Promise resolving to an array of webhook responses

#### Example

```typescript
const webhooks = await client.webhooks.getAll("channelId");
console.log(`Found ${webhooks.length} webhooks`);
```

***

### getPartial()

> **getPartial**(`webhookId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`createWebhookResponse`](../interfaces/createWebhookResponse.md)\>

Defined in: [src/managers/webhookManager.ts:285](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/webhookManager.ts#L285)

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
const partialWebhook = await client.webhooks.getPartial("webhookId");
console.log(`Webhook name: ${partialWebhook.name}`);
```

***

### send()

> **send**(`webhookId`, `token`, `content`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `_id`: `string`; `attachments?`: `object`[] \| `null`; `author`: `string`; `channel`: `string`; `content?`: `string` \| `null`; `edited?`: `string` \| `null`; `embeds?`: (\{ `colour?`: `string` \| `null`; `description?`: `string` \| `null`; `icon_url?`: `string` \| `null`; `image?`: \{ `height`: `number`; `size`: `"Large"` \| `"Preview"`; `url`: `string`; `width`: `number`; \} \| `null`; `original_url?`: `string` \| `null`; `site_name?`: `string` \| `null`; `special?`: \{ `type`: `"None"`; \} \| \{ `type`: `"GIF"`; \} \| \{ `id`: `string`; `timestamp?`: `string` \| `null`; `type`: `"YouTube"`; \} \| \{ `content_type`: `"Channel"`; `id`: `string`; `type`: `"Lightspeed"`; \} \| \{ `content_type`: `"Video"` \| `"Channel"` \| `"Clip"`; `id`: `string`; `type`: `"Twitch"`; \} \| \{ `content_type`: `string`; `id`: `string`; `type`: `"Spotify"`; \} \| \{ `type`: `"Soundcloud"`; \} \| \{ `content_type`: `"Album"` \| `"Track"`; `id`: `string`; `type`: `"Bandcamp"`; \} \| \{ `album_id`: `string`; `track_id?`: `string` \| `null`; `type`: `"AppleMusic"`; \} \| \{ `id`: `string`; `type`: `"Streamable"`; \} \| `null`; `title?`: `string` \| `null`; `type`: `"Website"`; `url?`: `string` \| `null`; `video?`: \{ `height`: `number`; `url`: `string`; `width`: `number`; \} \| `null`; \} \| \{ `height`: `number`; `size`: `"Large"` \| `"Preview"`; `type`: `"Image"`; `url`: `string`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `url`: `string`; `width`: `number`; \} \| \{ `colour?`: `string` \| `null`; `description?`: `string` \| `null`; `icon_url?`: `string` \| `null`; `media?`: \{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`; `title?`: `string` \| `null`; `type`: `"Text"`; `url?`: `string` \| `null`; \} \| \{ `type`: `"None"`; \})[] \| `null`; `flags?`: `number`; `interactions?`: \{ `reactions?`: `string`[] \| `null`; `restrict_reactions?`: `boolean`; \}; `masquerade?`: \{ `avatar?`: `string` \| `null`; `colour?`: `string` \| `null`; `name?`: `string` \| `null`; \} \| `null`; `member?`: \{ `_id`: \{ `server`: `string`; `user`: `string`; \}; `avatar?`: \{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`; `joined_at`: `string`; `nickname?`: `string` \| `null`; `roles?`: `string`[]; `timeout?`: `string` \| `null`; \} \| `null`; `mentions?`: `string`[] \| `null`; `nonce?`: `string` \| `null`; `pinned?`: `boolean` \| `null`; `reactions?`: \{\[`key`: `string`\]: `string`[]; \}; `replies?`: `string`[] \| `null`; `role_mentions?`: `string`[] \| `null`; `system?`: \{ `content`: `string`; `type`: `"text"`; \} \| \{ `by`: `string`; `id`: `string`; `type`: `"user_added"`; \} \| \{ `by`: `string`; `id`: `string`; `type`: `"user_remove"`; \} \| \{ `id`: `string`; `type`: `"user_joined"`; \} \| \{ `id`: `string`; `type`: `"user_left"`; \} \| \{ `id`: `string`; `type`: `"user_kicked"`; \} \| \{ `id`: `string`; `type`: `"user_banned"`; \} \| \{ `by`: `string`; `name`: `string`; `type`: `"channel_renamed"`; \} \| \{ `by`: `string`; `type`: `"channel_description_changed"`; \} \| \{ `by`: `string`; `type`: `"channel_icon_changed"`; \} \| \{ `from`: `string`; `to`: `string`; `type`: `"channel_ownership_changed"`; \} \| \{ `by`: `string`; `id`: `string`; `type`: `"message_pinned"`; \} \| \{ `by`: `string`; `id`: `string`; `type`: `"message_unpinned"`; \} \| `null`; `user?`: \{ `_id`: `string`; `avatar?`: \{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`; `badges?`: `number`; `bot?`: \{ `owner`: `string`; \} \| `null`; `discriminator`: `string`; `display_name?`: `string` \| `null`; `flags?`: `number`; `online`: `boolean`; `privileged?`: `boolean`; `relations?`: `object`[]; `relationship`: `"User"` \| `"None"` \| `"Friend"` \| `"Blocked"` \| `"Outgoing"` \| `"Incoming"` \| `"BlockedOther"`; `status?`: \{ `presence?`: `"Online"` \| `"Idle"` \| `"Focus"` \| `"Busy"` \| `"Invisible"` \| `null`; `text?`: `string` \| `null`; \} \| `null`; `username`: `string`; \} \| `null`; `webhook?`: \{ `avatar?`: `string` \| `null`; `name`: `string`; \} \| `null`; \}\>

Defined in: [src/managers/webhookManager.ts:142](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/webhookManager.ts#L142)

Sends a message through a webhook.

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
await client.webhooks.send("webhookId", "token", "Hello, world!");

// Send a message with embeds and attachments
await client.webhooks.send("webhookId", "token", {
  content: "Check out this image!",
  attachments: ["https://example.com/image.png"],
  embeds: [myEmbed]
});
```
