---
title: "Function: awaitMessage()"
---

# Function: awaitMessage()

> **awaitMessage**(`client`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`MessageStruct`](../classes/MessageStruct.md) \| `null`\>

Defined in: [src/struct/messageCollector.ts:171](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/messageCollector.ts#L171)

Convenience method to collect messages matching a filter.
Returns a Promise that resolves with the first matching message.

## Parameters

### client

[`Client`](../classes/Client.md)

The client instance.

### options?

[`MessageCollectorOptions`](../interfaces/MessageCollectorOptions.md) & `object` = `{}`

Options including filter and timeout.

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`MessageStruct`](../classes/MessageStruct.md) \| `null`\>

A promise resolving to the first matching message, or null on timeout.

## Example

```typescript
const msg = await awaitMessage(client, {
  channelIds: ['channel_id'],
  filter: (m) => m.content === 'confirm',
  time: 30000,
});
if (msg) {
  console.log('Got confirmation!');
}
```
