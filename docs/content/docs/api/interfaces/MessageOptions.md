---
title: "Interface: MessageOptions"
---

# Interface: MessageOptions

Defined in: [src/managers/messageManager.ts:23](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/messageManager.ts#L23)

## Properties

### attachments?

> `optional` **attachments?**: `string`[] \| `Readable`[] \| `File`[]

Defined in: [src/managers/messageManager.ts:26](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/messageManager.ts#L26)

***

### content?

> `optional` **content?**: `string`

Defined in: [src/managers/messageManager.ts:24](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/messageManager.ts#L24)

***

### embeds?

> `optional` **embeds?**: [`MessageEmbed`](../classes/MessageEmbed.md)[]

Defined in: [src/managers/messageManager.ts:27](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/messageManager.ts#L27)

***

### masquerade?

> `optional` **masquerade?**: `object`

Defined in: [src/managers/messageManager.ts:28](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/messageManager.ts#L28)

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

### replies?

> `optional` **replies?**: [`MessageReply`](MessageReply.md)[]

Defined in: [src/managers/messageManager.ts:25](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/messageManager.ts#L25)
