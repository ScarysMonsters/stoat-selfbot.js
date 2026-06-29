---
title: "Function: computePermissions()"
---

# Function: computePermissions()

> **computePermissions**(`base`, `roleAllows?`, `channelRoleOverrides?`, `memberOverride?`): `number`

Defined in: [src/utils/permissions.ts:347](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/permissions.ts#L347)

Compute the effective permission for a member given server and channel overrides.
Follows the Stoat permission resolution algorithm:
1. Start with server default permissions
2. Apply user's role permissions (OR together all role allows)
3. Apply channel role overrides for each role the member has
4. Apply channel

## Parameters

### base

`number`

The server default permission number

### roleAllows?

`number`[] = `[]`

Array of role permission allow values

### channelRoleOverrides?

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`PermissionOverride`](../interfaces/PermissionOverride.md)\> = `...`

Map of roleId → PermissionOverride for channel

### memberOverride?

[`PermissionOverride`](../interfaces/PermissionOverride.md)

Member-specific PermissionOverride for channel

## Returns

`number`

The computed permission number

## Everyone

override
5. Apply channel member-specific override
