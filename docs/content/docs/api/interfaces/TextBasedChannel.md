---
title: "Interface: TextBasedChannel"
---

# Interface: TextBasedChannel

Defined in: [src/struct/interfaces/baseChannel.ts:11](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/interfaces/baseChannel.ts#L11)

Interface representing a text-based channel, which supports sending and managing messages.

## Properties

### lastMessage

> **lastMessage**: [`MessageStruct`](../classes/MessageStruct.md) \| `null`

Defined in: [src/struct/interfaces/baseChannel.ts:19](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/interfaces/baseChannel.ts#L19)

The last message sent in the channel, or `null` if no message exists.

***

### lastMessageId

> **lastMessageId**: `string` \| `null`

Defined in: [src/struct/interfaces/baseChannel.ts:16](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/interfaces/baseChannel.ts#L16)

The ID of the last message sent in the channel, or `null` if no message exists.

***

### messages

> **messages**: [`MessageManager`](../classes/MessageManager.md)

Defined in: [src/struct/interfaces/baseChannel.ts:13](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/interfaces/baseChannel.ts#L13)

Manages the messages in the channel.

## Methods

### bulkDelete()

> **bulkDelete**(`messages`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/interfaces/baseChannel.ts:45](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/interfaces/baseChannel.ts#L45)

Deletes multiple messages from the channel.

#### Parameters

##### messages

`number` \| [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`MessageStruct`](../classes/MessageStruct.md)\> \| [`MessageResolvable`](../type-aliases/MessageResolvable.md)[]

The messages to delete. This can be an array of message resolvables, a map of messages, or a number indicating how many recent messages to delete.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the messages have been successfully deleted.

#### Example

```typescript
await channel.bulkDelete(10); // Deletes the last 10 messages.
```

***

### send()

> **send**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`MessageStruct`](../classes/MessageStruct.md)\>

Defined in: [src/struct/interfaces/baseChannel.ts:32](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/interfaces/baseChannel.ts#L32)

Sends a message to the channel.

#### Parameters

##### options

`string` \| [`MessageOptions`](MessageOptions.md)

The message content or options for the message.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`MessageStruct`](../classes/MessageStruct.md)\>

A promise that resolves with the sent message.

#### Example

```typescript
await channel.send("Hello, world!");
```
