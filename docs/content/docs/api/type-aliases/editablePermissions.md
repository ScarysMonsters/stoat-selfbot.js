---
title: "Type Alias: editablePermissions"
---

# Type Alias: editablePermissions

> **editablePermissions** = `object`

Defined in: [src/utils/types.ts:72](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/types.ts#L72)

Represents the permissions that can be set for a role.

## Properties

### a?

> `optional` **a?**: keyof *typeof* [`FullPermissions`](../classes/FullPermissions.md)\[`"FLAGS"`\][]

Defined in: [src/utils/types.ts:77](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/types.ts#L77)

Permissions to allow for the role.
Each key corresponds to a permission flag in FullPermissions.

***

### d?

> `optional` **d?**: keyof *typeof* [`FullPermissions`](../classes/FullPermissions.md)\[`"FLAGS"`\][]

Defined in: [src/utils/types.ts:82](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/types.ts#L82)

Permissions to deny for the role.
Each key corresponds to a permission flag in FullPermissions.
