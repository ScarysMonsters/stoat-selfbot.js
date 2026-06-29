---
title: "Interface: MessageCollectorOptions"
---

# Interface: MessageCollectorOptions

Defined in: [src/struct/messageCollector.ts:9](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/messageCollector.ts#L9)

Options for creating a MessageCollector.

## Properties

### channelIds?

> `optional` **channelIds?**: `string`[]

Defined in: [src/struct/messageCollector.ts:11](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/messageCollector.ts#L11)

The channel ID(s) to collect messages from.

***

### filter?

> `optional` **filter?**: (`message`) => `boolean` \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Defined in: [src/struct/messageCollector.ts:19](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/messageCollector.ts#L19)

A filter function to apply to incoming messages.

#### Parameters

##### message

[`MessageStruct`](../classes/MessageStruct.md)

#### Returns

`boolean` \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

***

### idle?

> `optional` **idle?**: `number`

Defined in: [src/struct/messageCollector.ts:17](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/messageCollector.ts#L17)

An idle timeout in milliseconds after which the collector ends.

***

### max?

> `optional` **max?**: `number`

Defined in: [src/struct/messageCollector.ts:13](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/messageCollector.ts#L13)

The maximum number of messages to collect.

***

### time?

> `optional` **time?**: `number`

Defined in: [src/struct/messageCollector.ts:15](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/messageCollector.ts#L15)

The maximum duration in milliseconds before the collector ends.
