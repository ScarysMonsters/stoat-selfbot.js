---
title: "Type Alias: editableRole"
---

# Type Alias: editableRole

> **editableRole** = `object`

Defined in: [src/utils/types.ts:88](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/types.ts#L88)

Represents a role that can be edited in a server.

## Properties

### colour?

> `optional` **colour?**: `string` \| `null`

Defined in: [src/utils/types.ts:96](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/types.ts#L96)

Colour of the role, or `null` if no colour is set.

***

### hoist?

> `optional` **hoist?**: `boolean`

Defined in: [src/utils/types.ts:100](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/types.ts#L100)

Whether the role is displayed separately in the member list.

***

### name?

> `optional` **name?**: `string`

Defined in: [src/utils/types.ts:92](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/types.ts#L92)

Name of the role.

***

### permissions?

> `optional` **permissions?**: [`editablePermissions`](editablePermissions.md)

Defined in: [src/utils/types.ts:109](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/types.ts#L109)

Permissions to set for the role.
Format: { a: allow, d: deny }

***

### rank?

> `optional` **rank?**: `number`

Defined in: [src/utils/types.ts:104](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/types.ts#L104)

Rank of the role, used for ordering.

***

### remove?

> `optional` **remove?**: keyof [`Role`](../stoat-selfbot.js/namespaces/API/type-aliases/Role.md) & `object`[]

Defined in: [src/utils/types.ts:114](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/types.ts#L114)

Fields to remove from the role.
Each key corresponds to a field in the Role type.
