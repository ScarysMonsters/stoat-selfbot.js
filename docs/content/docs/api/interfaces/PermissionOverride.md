---
title: "Interface: PermissionOverride"
---

# Interface: PermissionOverride

Defined in: [src/utils/permissions.ts:327](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/permissions.ts#L327)

Helper to compute the effective permission allow/deny for a role override.
The Stoat API uses { a: number, d: number } format where:
  a = allow bits (1 << N)
  d = deny bits (1 << N)

## Properties

### allow

> **allow**: `number`

Defined in: [src/utils/permissions.ts:328](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/permissions.ts#L328)

***

### deny

> **deny**: `number`

Defined in: [src/utils/permissions.ts:329](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/permissions.ts#L329)
