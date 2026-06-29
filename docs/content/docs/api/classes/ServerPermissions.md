---
title: "Class: ServerPermissions"
---

# Class: ServerPermissions

Defined in: [src/utils/permissions.ts:63](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/permissions.ts#L63)

Server-specific permissions subset.
Permissions applicable at the server (guild) level.

## Extends

- [`BitField`](BitField.md)

## Constructors

### Constructor

> **new ServerPermissions**(`bits?`): `ServerPermissions`

Defined in: [src/utils/permissions.ts:294](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/permissions.ts#L294)

#### Parameters

##### bits?

[`ServerPermissionsResolvable`](../type-aliases/ServerPermissionsResolvable.md)

#### Returns

`ServerPermissions`

#### Inherited from

[`BitField`](BitField.md).[`constructor`](BitField.md#constructor)

## Properties

### bitfield

> **bitfield**: `number` = `DEFAULT_BIT`

Defined in: [src/utils/bitField.ts:17](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/bitField.ts#L17)

#### Inherited from

[`BitField`](BitField.md).[`bitfield`](BitField.md#bitfield)

***

### FLAGS

> `readonly` `static` **FLAGS**: `object`

Defined in: [src/utils/permissions.ts:263](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/permissions.ts#L263)

#### ASSIGN\_ROLES

> `readonly` **ASSIGN\_ROLES**: `number`

#### BAN\_MEMBERS

> `readonly` **BAN\_MEMBERS**: `number`

#### CHANGE\_AVATAR

> `readonly` **CHANGE\_AVATAR**: `number`

#### CHANGE\_NICKNAME

> `readonly` **CHANGE\_NICKNAME**: `number`

#### KICK\_MEMBERS

> `readonly` **KICK\_MEMBERS**: `number`

#### MANAGE\_CHANNELS

> `readonly` **MANAGE\_CHANNELS**: `number`

#### MANAGE\_CUSTOMISATION

> `readonly` **MANAGE\_CUSTOMISATION**: `number`

#### MANAGE\_NICKNAMES

> `readonly` **MANAGE\_NICKNAMES**: `number`

#### MANAGE\_PERMISSIONS

> `readonly` **MANAGE\_PERMISSIONS**: `number`

#### MANAGE\_ROLES

> `readonly` **MANAGE\_ROLES**: `number`

#### MANAGE\_SERVER

> `readonly` **MANAGE\_SERVER**: `number`

#### REMOVE\_AVATARS

> `readonly` **REMOVE\_AVATARS**: `number`

#### TIMEOUT\_MEMBERS

> `readonly` **TIMEOUT\_MEMBERS**: `number`

#### VIEW\_SERVER

> `readonly` **VIEW\_SERVER**: `number`

#### Inherited from

[`BitField`](BitField.md).[`FLAGS`](BitField.md#flags)

## Accessors

### self

#### Get Signature

> **get** **self**(): \{(`bits?`): [`BitField`](BitField.md); `FLAGS`: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `number`\>; `resolve`: `number`; \}

Defined in: [src/utils/bitField.ts:42](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/bitField.ts#L42)

Returns the class that this instance belongs to.

##### Returns

The class of the bitfield.

\{(`bits?`): [`BitField`](BitField.md); `FLAGS`: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `number`\>; `resolve`: `number`; \}

###### FLAGS

> **FLAGS**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `number`\>

###### resolve()

> **resolve**(`bit`): `number`

###### Parameters

###### bit

`BitFieldResolvable`

###### Returns

`number`

#### Inherited from

[`BitField`](BitField.md).[`self`](BitField.md#self)

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`string`\>

Defined in: [src/utils/bitField.ts:132](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/bitField.ts#L132)

#### Returns

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`string`\>

#### Inherited from

[`BitField`](BitField.md).[`[iterator]`](BitField.md#iterator)

***

### add()

> **add**(...`bits`): `this`

Defined in: [src/utils/permissions.ts:66](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/permissions.ts#L66)

#### Parameters

##### bits

...[`ServerPermissionsResolvable`](../type-aliases/ServerPermissionsResolvable.md)[]

#### Returns

`this`

#### Inherited from

[`BitField`](BitField.md).[`add`](BitField.md#add)

***

### any()

> **any**(`bit`): `boolean`

Defined in: [src/utils/permissions.ts:65](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/permissions.ts#L65)

Checks if any of the bits in the bitfield are set.

#### Parameters

##### bit

[`ServerPermissionsResolvable`](../type-aliases/ServerPermissionsResolvable.md)

The bitfield or array of bitfields to check.

#### Returns

`boolean`

True if any bits are set, false otherwise.

#### Inherited from

[`BitField`](BitField.md).[`any`](BitField.md#any)

***

### freeze()

> **freeze**(): [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)\<`this`\>

Defined in: [src/utils/bitField.ts:112](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/bitField.ts#L112)

#### Returns

[`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)\<`this`\>

#### Inherited from

[`BitField`](BitField.md).[`freeze`](BitField.md#freeze)

***

### has()

> **has**(`bit`): `boolean`

Defined in: [src/utils/permissions.ts:68](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/permissions.ts#L68)

checks if a specific permission is set.

#### Parameters

##### bit

[`ServerPermissionsResolvable`](../type-aliases/ServerPermissionsResolvable.md)

#### Returns

`boolean`

#### Inherited from

[`BitField`](BitField.md).[`has`](BitField.md#has)

***

### missing()

> **missing**(`bit`): (`"VIEW_SERVER"` \| `"MANAGE_ROLES"` \| `"MANAGE_CHANNELS"` \| `"MANAGE_SERVER"` \| `"MANAGE_PERMISSIONS"` \| `"MANAGE_CUSTOMISATION"` \| `"KICK_MEMBERS"` \| `"BAN_MEMBERS"` \| `"TIMEOUT_MEMBERS"` \| `"ASSIGN_ROLES"` \| `"CHANGE_NICKNAME"` \| `"MANAGE_NICKNAMES"` \| `"CHANGE_AVATAR"` \| `"REMOVE_AVATARS"`)[]

Defined in: [src/utils/permissions.ts:69](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/permissions.ts#L69)

#### Parameters

##### bit

[`ServerPermissionsResolvable`](../type-aliases/ServerPermissionsResolvable.md)

#### Returns

(`"VIEW_SERVER"` \| `"MANAGE_ROLES"` \| `"MANAGE_CHANNELS"` \| `"MANAGE_SERVER"` \| `"MANAGE_PERMISSIONS"` \| `"MANAGE_CUSTOMISATION"` \| `"KICK_MEMBERS"` \| `"BAN_MEMBERS"` \| `"TIMEOUT_MEMBERS"` \| `"ASSIGN_ROLES"` \| `"CHANGE_NICKNAME"` \| `"MANAGE_NICKNAMES"` \| `"CHANGE_AVATAR"` \| `"REMOVE_AVATARS"`)[]

***

### remove()

> **remove**(...`bits`): `this`

Defined in: [src/utils/permissions.ts:67](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/permissions.ts#L67)

#### Parameters

##### bits

...[`ServerPermissionsResolvable`](../type-aliases/ServerPermissionsResolvable.md)[]

#### Returns

`this`

#### Inherited from

[`BitField`](BitField.md).[`remove`](BitField.md#remove)

***

### serialize()

> **serialize**(): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<[`ServerPermissionsString`](../type-aliases/ServerPermissionsString.md), `boolean`\>

Defined in: [src/utils/permissions.ts:64](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/permissions.ts#L64)

#### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<[`ServerPermissionsString`](../type-aliases/ServerPermissionsString.md), `boolean`\>

A record of all flags and their boolean values indicating whether they are set.

#### Inherited from

[`BitField`](BitField.md).[`serialize`](BitField.md#serialize)

***

### toArray()

> **toArray**(): (`"VIEW_SERVER"` \| `"MANAGE_ROLES"` \| `"MANAGE_CHANNELS"` \| `"MANAGE_SERVER"` \| `"MANAGE_PERMISSIONS"` \| `"MANAGE_CUSTOMISATION"` \| `"KICK_MEMBERS"` \| `"BAN_MEMBERS"` \| `"TIMEOUT_MEMBERS"` \| `"ASSIGN_ROLES"` \| `"CHANGE_NICKNAME"` \| `"MANAGE_NICKNAMES"` \| `"CHANGE_AVATAR"` \| `"REMOVE_AVATARS"`)[]

Defined in: [src/utils/permissions.ts:70](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/permissions.ts#L70)

Returns an array of all the Permissions that are set in the bitfield.

#### Returns

(`"VIEW_SERVER"` \| `"MANAGE_ROLES"` \| `"MANAGE_CHANNELS"` \| `"MANAGE_SERVER"` \| `"MANAGE_PERMISSIONS"` \| `"MANAGE_CUSTOMISATION"` \| `"KICK_MEMBERS"` \| `"BAN_MEMBERS"` \| `"TIMEOUT_MEMBERS"` \| `"ASSIGN_ROLES"` \| `"CHANGE_NICKNAME"` \| `"MANAGE_NICKNAMES"` \| `"CHANGE_AVATAR"` \| `"REMOVE_AVATARS"`)[]

An array of flag names.

#### Inherited from

[`BitField`](BitField.md).[`toArray`](BitField.md#toarray)

***

### valueOf()

> **valueOf**(): `number`

Defined in: [src/utils/bitField.ts:116](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/bitField.ts#L116)

#### Returns

`number`

#### Inherited from

[`BitField`](BitField.md).[`valueOf`](BitField.md#valueof)

***

### resolve()

> `static` **resolve**(`bit`): `number`

Defined in: [src/utils/permissions.ts:298](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/permissions.ts#L298)

Resolves a bitfield or an array of bitfields into a single number.

#### Parameters

##### bit

[`ServerPermissionsResolvable`](../type-aliases/ServerPermissionsResolvable.md)

The bitfield or array of bitfields to resolve.

#### Returns

`number`

The resolved bitfield as a number.

#### Inherited from

[`BitField`](BitField.md).[`resolve`](BitField.md#resolve)
