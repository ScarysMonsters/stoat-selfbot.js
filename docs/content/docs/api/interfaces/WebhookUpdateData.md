---
title: "Interface: WebhookUpdateData"
---

# Interface: WebhookUpdateData

Defined in: [src/utils/types.ts:58](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/types.ts#L58)

Represents data for a webhook update event.

## Properties

### avatar

> **avatar**: [`WebhookAvatar`](WebhookAvatar.md) \| `undefined`

Defined in: [src/utils/types.ts:64](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/types.ts#L64)

The updated avatar of the webhook, if any.

***

### name

> **name**: `string`

Defined in: [src/utils/types.ts:62](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/types.ts#L62)

The updated name of the webhook.

***

### remove

> **remove**: `string`[]

Defined in: [src/utils/types.ts:66](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/types.ts#L66)

Fields to remove from the webhook.

***

### webhookId

> **webhookId**: `string`

Defined in: [src/utils/types.ts:60](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/types.ts#L60)

The unique identifier of the webhook.
