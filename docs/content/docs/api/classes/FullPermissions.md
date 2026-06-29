---
title: "Class: FullPermissions"
---

# Class: FullPermissions

Defined in: [src/utils/permissions.ts:33](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/permissions.ts#L33)

Full permission flags matching the complete Stoat/Revolt permission system.
Uses 1 << N (power of 2) for correct bitfield calculation.
These are the canonical permission flags used throughout the API.

## Extends

- [`BitField`](BitField.md)

## Constructors

### Constructor

> **new FullPermissions**(`bits?`): `FullPermissions`

Defined in: [src/utils/permissions.ts:179](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/permissions.ts#L179)

#### Parameters

##### bits?

[`FullPermissionsResolvable`](../type-aliases/FullPermissionsResolvable.md)

#### Returns

`FullPermissions`

#### Inherited from

[`BitField`](BitField.md).[`constructor`](BitField.md#constructor)

## Properties

### bitfield

> **bitfield**: `number` = `DEFAULT_BIT`

Defined in: [src/utils/bitField.ts:17](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/bitField.ts#L17)

#### Inherited from

[`BitField`](BitField.md).[`bitfield`](BitField.md#bitfield)

***

### ALL

> `readonly` `static` **ALL**: `number`

Defined in: [src/utils/permissions.ts:162](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/permissions.ts#L162)

All permission bits combined

***

### DEFAULT\_DM

> `readonly` `static` **DEFAULT\_DM**: `number`

Defined in: [src/utils/permissions.ts:171](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/permissions.ts#L171)

Default DM permissions

***

### DEFAULT\_SERVER

> `readonly` `static` **DEFAULT\_SERVER**: `0` = `0`

Defined in: [src/utils/permissions.ts:168](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/permissions.ts#L168)

Default server permissions

***

### FLAGS

> `readonly` `static` **FLAGS**: `object`

Defined in: [src/utils/permissions.ts:83](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/permissions.ts#L83)

#### AssignRoles

> `readonly` **AssignRoles**: `number`

#### BanMembers

> `readonly` **BanMembers**: `number`

#### ChangeAvatar

> `readonly` **ChangeAvatar**: `number`

#### ChangeNickname

> `readonly` **ChangeNickname**: `number`

#### Connect

> `readonly` **Connect**: `number`

#### DeafenMembers

> `readonly` **DeafenMembers**: `number`

#### GrantAll

> `readonly` **GrantAll**: `4503599627370495` = `0x000f_ffff_ffff_ffff`

#### InviteOthers

> `readonly` **InviteOthers**: `number`

#### KickMembers

> `readonly` **KickMembers**: `number`

#### ManageChannel

> `readonly` **ManageChannel**: `number`

#### ManageCustomisation

> `readonly` **ManageCustomisation**: `number`

#### ManageMessages

> `readonly` **ManageMessages**: `number`

#### ManageNicknames

> `readonly` **ManageNicknames**: `number`

#### ManagePermissions

> `readonly` **ManagePermissions**: `number`

#### ManageRole

> `readonly` **ManageRole**: `number`

#### ManageServer

> `readonly` **ManageServer**: `number`

#### ManageWebhooks

> `readonly` **ManageWebhooks**: `number`

#### Masquerade

> `readonly` **Masquerade**: `number`

#### MentionEveryone

> `readonly` **MentionEveryone**: `number`

#### MentionRoles

> `readonly` **MentionRoles**: `number`

#### MoveMembers

> `readonly` **MoveMembers**: `number`

#### MuteMembers

> `readonly` **MuteMembers**: `number`

#### React

> `readonly` **React**: `number`

#### ReadMessageHistory

> `readonly` **ReadMessageHistory**: `number`

#### RemoveAvatars

> `readonly` **RemoveAvatars**: `number`

#### SendEmbeds

> `readonly` **SendEmbeds**: `number`

#### SendMessage

> `readonly` **SendMessage**: `number`

#### Speak

> `readonly` **Speak**: `number`

#### TimeoutMembers

> `readonly` **TimeoutMembers**: `number`

#### UploadFiles

> `readonly` **UploadFiles**: `number`

#### Video

> `readonly` **Video**: `number`

#### ViewChannel

> `readonly` **ViewChannel**: `number`

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

Defined in: [src/utils/permissions.ts:36](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/permissions.ts#L36)

#### Parameters

##### bits

...[`FullPermissionsResolvable`](../type-aliases/FullPermissionsResolvable.md)[]

#### Returns

`this`

#### Inherited from

[`BitField`](BitField.md).[`add`](BitField.md#add)

***

### any()

> **any**(`bit`): `boolean`

Defined in: [src/utils/permissions.ts:35](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/permissions.ts#L35)

Checks if any of the bits in the bitfield are set.

#### Parameters

##### bit

[`FullPermissionsResolvable`](../type-aliases/FullPermissionsResolvable.md)

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

Defined in: [src/utils/permissions.ts:38](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/permissions.ts#L38)

checks if a specific permission is set.

#### Parameters

##### bit

[`FullPermissionsResolvable`](../type-aliases/FullPermissionsResolvable.md)

#### Returns

`boolean`

#### Inherited from

[`BitField`](BitField.md).[`has`](BitField.md#has)

***

### missing()

> **missing**(`bit`): (`"ManageChannel"` \| `"ManageServer"` \| `"ManagePermissions"` \| `"ManageRole"` \| `"ManageCustomisation"` \| `"KickMembers"` \| `"BanMembers"` \| `"TimeoutMembers"` \| `"AssignRoles"` \| `"ChangeNickname"` \| `"ManageNicknames"` \| `"ChangeAvatar"` \| `"RemoveAvatars"` \| `"ViewChannel"` \| `"ReadMessageHistory"` \| `"SendMessage"` \| `"ManageMessages"` \| `"ManageWebhooks"` \| `"InviteOthers"` \| `"SendEmbeds"` \| `"UploadFiles"` \| `"Masquerade"` \| `"React"` \| `"Connect"` \| `"Speak"` \| `"Video"` \| `"MuteMembers"` \| `"DeafenMembers"` \| `"MoveMembers"` \| `"MentionEveryone"` \| `"MentionRoles"` \| `"GrantAll"`)[]

Defined in: [src/utils/permissions.ts:39](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/permissions.ts#L39)

#### Parameters

##### bit

[`FullPermissionsResolvable`](../type-aliases/FullPermissionsResolvable.md)

#### Returns

(`"ManageChannel"` \| `"ManageServer"` \| `"ManagePermissions"` \| `"ManageRole"` \| `"ManageCustomisation"` \| `"KickMembers"` \| `"BanMembers"` \| `"TimeoutMembers"` \| `"AssignRoles"` \| `"ChangeNickname"` \| `"ManageNicknames"` \| `"ChangeAvatar"` \| `"RemoveAvatars"` \| `"ViewChannel"` \| `"ReadMessageHistory"` \| `"SendMessage"` \| `"ManageMessages"` \| `"ManageWebhooks"` \| `"InviteOthers"` \| `"SendEmbeds"` \| `"UploadFiles"` \| `"Masquerade"` \| `"React"` \| `"Connect"` \| `"Speak"` \| `"Video"` \| `"MuteMembers"` \| `"DeafenMembers"` \| `"MoveMembers"` \| `"MentionEveryone"` \| `"MentionRoles"` \| `"GrantAll"`)[]

***

### remove()

> **remove**(...`bits`): `this`

Defined in: [src/utils/permissions.ts:37](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/permissions.ts#L37)

#### Parameters

##### bits

...[`FullPermissionsResolvable`](../type-aliases/FullPermissionsResolvable.md)[]

#### Returns

`this`

#### Inherited from

[`BitField`](BitField.md).[`remove`](BitField.md#remove)

***

### serialize()

> **serialize**(): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<[`FullPermissionsString`](../type-aliases/FullPermissionsString.md), `boolean`\>

Defined in: [src/utils/permissions.ts:34](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/permissions.ts#L34)

#### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<[`FullPermissionsString`](../type-aliases/FullPermissionsString.md), `boolean`\>

A record of all flags and their boolean values indicating whether they are set.

#### Inherited from

[`BitField`](BitField.md).[`serialize`](BitField.md#serialize)

***

### toArray()

> **toArray**(): (`"ManageChannel"` \| `"ManageServer"` \| `"ManagePermissions"` \| `"ManageRole"` \| `"ManageCustomisation"` \| `"KickMembers"` \| `"BanMembers"` \| `"TimeoutMembers"` \| `"AssignRoles"` \| `"ChangeNickname"` \| `"ManageNicknames"` \| `"ChangeAvatar"` \| `"RemoveAvatars"` \| `"ViewChannel"` \| `"ReadMessageHistory"` \| `"SendMessage"` \| `"ManageMessages"` \| `"ManageWebhooks"` \| `"InviteOthers"` \| `"SendEmbeds"` \| `"UploadFiles"` \| `"Masquerade"` \| `"React"` \| `"Connect"` \| `"Speak"` \| `"Video"` \| `"MuteMembers"` \| `"DeafenMembers"` \| `"MoveMembers"` \| `"MentionEveryone"` \| `"MentionRoles"` \| `"GrantAll"`)[]

Defined in: [src/utils/permissions.ts:40](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/permissions.ts#L40)

Returns an array of all the Permissions that are set in the bitfield.

#### Returns

(`"ManageChannel"` \| `"ManageServer"` \| `"ManagePermissions"` \| `"ManageRole"` \| `"ManageCustomisation"` \| `"KickMembers"` \| `"BanMembers"` \| `"TimeoutMembers"` \| `"AssignRoles"` \| `"ChangeNickname"` \| `"ManageNicknames"` \| `"ChangeAvatar"` \| `"RemoveAvatars"` \| `"ViewChannel"` \| `"ReadMessageHistory"` \| `"SendMessage"` \| `"ManageMessages"` \| `"ManageWebhooks"` \| `"InviteOthers"` \| `"SendEmbeds"` \| `"UploadFiles"` \| `"Masquerade"` \| `"React"` \| `"Connect"` \| `"Speak"` \| `"Video"` \| `"MuteMembers"` \| `"DeafenMembers"` \| `"MoveMembers"` \| `"MentionEveryone"` \| `"MentionRoles"` \| `"GrantAll"`)[]

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

Defined in: [src/utils/permissions.ts:183](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/permissions.ts#L183)

Resolves a bitfield or an array of bitfields into a single number.

#### Parameters

##### bit

[`FullPermissionsResolvable`](../type-aliases/FullPermissionsResolvable.md)

The bitfield or array of bitfields to resolve.

#### Returns

`number`

The resolved bitfield as a number.

#### Inherited from

[`BitField`](BitField.md).[`resolve`](BitField.md#resolve)
