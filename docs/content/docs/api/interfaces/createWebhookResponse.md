---
title: "Interface: createWebhookResponse"
---

# Interface: createWebhookResponse

Defined in: [src/utils/types.ts:184](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/types.ts#L184)

Response from the API when creating or fetching a webhook.
FIX: Was using string literal types like `id: "string"` which only match the literal string "string".

## Properties

### avatar

> **avatar**: `object`

Defined in: [src/utils/types.ts:187](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/types.ts#L187)

#### \_id

> **\_id**: `string`

#### content\_type

> **content\_type**: `string`

#### deleted?

> `optional` **deleted?**: `boolean` \| `null`

#### filename

> **filename**: `string`

#### message\_id?

> `optional` **message\_id?**: `string` \| `null`

#### metadata

> **metadata**: `object`

##### metadata.type

> **type**: `string`

#### object\_id?

> `optional` **object\_id?**: `string` \| `null`

#### reported?

> `optional` **reported?**: `boolean` \| `null`

#### server\_id?

> `optional` **server\_id?**: `string` \| `null`

#### size

> **size**: `number`

#### tag

> **tag**: `string`

#### user\_id?

> `optional` **user\_id?**: `string` \| `null`

***

### channel\_id

> **channel\_id**: `string`

Defined in: [src/utils/types.ts:204](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/types.ts#L204)

***

### creator\_id

> **creator\_id**: `string`

Defined in: [src/utils/types.ts:203](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/types.ts#L203)

***

### id

> **id**: `string`

Defined in: [src/utils/types.ts:185](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/types.ts#L185)

***

### name

> **name**: `string`

Defined in: [src/utils/types.ts:186](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/types.ts#L186)

***

### permissions

> **permissions**: `number`

Defined in: [src/utils/types.ts:205](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/types.ts#L205)

***

### token?

> `optional` **token?**: `string` \| `null`

Defined in: [src/utils/types.ts:206](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/types.ts#L206)
