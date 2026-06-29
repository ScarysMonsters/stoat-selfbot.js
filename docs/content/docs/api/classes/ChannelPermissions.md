---
title: "Class: ChannelPermissions"
---

# Class: ChannelPermissions

Defined in: [src/utils/permissions.ts:43](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/permissions.ts#L43)

Channel-specific permissions subset.
These are the permissions applicable at the channel level.

## Extends

- [`BitField`](BitField.md)

## Constructors

### Constructor

> **new ChannelPermissions**(`bits?`): `ChannelPermissions`

Defined in: [src/utils/permissions.ts:224](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/permissions.ts#L224)

#### Parameters

##### bits?

[`ChannelPermissionsResolvable`](../type-aliases/ChannelPermissionsResolvable.md)

#### Returns

`ChannelPermissions`

#### Inherited from

[`BitField`](BitField.md).[`constructor`](BitField.md#constructor)

## Properties

### bitfield

> **bitfield**: `number` = `DEFAULT_BIT`

Defined in: [src/utils/bitField.ts:17](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/bitField.ts#L17)

#### Inherited from

[`BitField`](BitField.md).[`bitfield`](BitField.md#bitfield)

***

### FLAGS

> `readonly` `static` **FLAGS**: `object`

Defined in: [src/utils/permissions.ts:193](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/permissions.ts#L193)

#### CONNECT

> `readonly` **CONNECT**: `number`

#### INVITE\_OTHERS

> `readonly` **INVITE\_OTHERS**: `number`

#### MANAGE\_CHANNEL

> `readonly` **MANAGE\_CHANNEL**: `number`

#### MANAGE\_MESSAGES

> `readonly` **MANAGE\_MESSAGES**: `number`

#### MANAGE\_WEBHOOKS

> `readonly` **MANAGE\_WEBHOOKS**: `number`

#### MASQUERADE

> `readonly` **MASQUERADE**: `number`

#### REACT

> `readonly` **REACT**: `number`

#### READ\_MESSAGE\_HISTORY

> `readonly` **READ\_MESSAGE\_HISTORY**: `number`

#### SEND\_EMBEDS

> `readonly` **SEND\_EMBEDS**: `number`

#### SEND\_MESSAGE

> `readonly` **SEND\_MESSAGE**: `number`

#### SPEAK

> `readonly` **SPEAK**: `number`

#### UPLOAD\_FILES

> `readonly` **UPLOAD\_FILES**: `number`

#### VIEW\_CHANNEL

> `readonly` **VIEW\_CHANNEL**: `number`

#### VOICE\_CALL

> `readonly` **VOICE\_CALL**: `number`

#### Inherited from

[`BitField`](BitField.md).[`FLAGS`](BitField.md#flags)

## Accessors

### self

#### Get Signature

> **get** **self**(): \{(`bits?`): [`BitField`](BitField.md); `FLAGS`: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `number`\>; `resolve`: `number`; \}

Defined in: [src/utils/bitField.ts:42](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/bitField.ts#L42)

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

Defined in: [src/utils/bitField.ts:132](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/bitField.ts#L132)

#### Returns

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`string`\>

#### Inherited from

[`BitField`](BitField.md).[`[iterator]`](BitField.md#iterator)

***

### add()

> **add**(...`bits`): `this`

Defined in: [src/utils/permissions.ts:46](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/permissions.ts#L46)

#### Parameters

##### bits

...[`ChannelPermissionsResolvable`](../type-aliases/ChannelPermissionsResolvable.md)[]

#### Returns

`this`

#### Inherited from

[`BitField`](BitField.md).[`add`](BitField.md#add)

***

### any()

> **any**(`bit`): `boolean`

Defined in: [src/utils/permissions.ts:45](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/permissions.ts#L45)

Checks if any of the bits in the bitfield are set.

#### Parameters

##### bit

[`ChannelPermissionsResolvable`](../type-aliases/ChannelPermissionsResolvable.md)

The bitfield or array of bitfields to check.

#### Returns

`boolean`

True if any bits are set, false otherwise.

#### Inherited from

[`BitField`](BitField.md).[`any`](BitField.md#any)

***

### freeze()

> **freeze**(): [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)\<`this`\>

Defined in: [src/utils/bitField.ts:112](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/bitField.ts#L112)

#### Returns

[`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)\<`this`\>

#### Inherited from

[`BitField`](BitField.md).[`freeze`](BitField.md#freeze)

***

### has()

> **has**(`bit`): `boolean`

Defined in: [src/utils/permissions.ts:48](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/permissions.ts#L48)

checks if a specific permission is set.

#### Parameters

##### bit

[`ChannelPermissionsResolvable`](../type-aliases/ChannelPermissionsResolvable.md)

#### Returns

`boolean`

#### Inherited from

[`BitField`](BitField.md).[`has`](BitField.md#has)

***

### missing()

> **missing**(`bit`): (`"VIEW_CHANNEL"` \| `"READ_MESSAGE_HISTORY"` \| `"SEND_MESSAGE"` \| `"MANAGE_MESSAGES"` \| `"MANAGE_WEBHOOKS"` \| `"INVITE_OTHERS"` \| `"SEND_EMBEDS"` \| `"UPLOAD_FILES"` \| `"MASQUERADE"` \| `"REACT"` \| `"CONNECT"` \| `"SPEAK"` \| `"MANAGE_CHANNEL"` \| `"VOICE_CALL"`)[]

Defined in: [src/utils/permissions.ts:49](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/permissions.ts#L49)

#### Parameters

##### bit

[`ChannelPermissionsResolvable`](../type-aliases/ChannelPermissionsResolvable.md)

#### Returns

(`"VIEW_CHANNEL"` \| `"READ_MESSAGE_HISTORY"` \| `"SEND_MESSAGE"` \| `"MANAGE_MESSAGES"` \| `"MANAGE_WEBHOOKS"` \| `"INVITE_OTHERS"` \| `"SEND_EMBEDS"` \| `"UPLOAD_FILES"` \| `"MASQUERADE"` \| `"REACT"` \| `"CONNECT"` \| `"SPEAK"` \| `"MANAGE_CHANNEL"` \| `"VOICE_CALL"`)[]

***

### remove()

> **remove**(...`bits`): `this`

Defined in: [src/utils/permissions.ts:47](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/permissions.ts#L47)

#### Parameters

##### bits

...[`ChannelPermissionsResolvable`](../type-aliases/ChannelPermissionsResolvable.md)[]

#### Returns

`this`

#### Inherited from

[`BitField`](BitField.md).[`remove`](BitField.md#remove)

***

### serialize()

> **serialize**(): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<[`ChannelPermissionsString`](../type-aliases/ChannelPermissionsString.md), `boolean`\>

Defined in: [src/utils/permissions.ts:44](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/permissions.ts#L44)

#### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<[`ChannelPermissionsString`](../type-aliases/ChannelPermissionsString.md), `boolean`\>

A record of all flags and their boolean values indicating whether they are set.

#### Inherited from

[`BitField`](BitField.md).[`serialize`](BitField.md#serialize)

***

### toArray()

> **toArray**(): (`"VIEW_CHANNEL"` \| `"READ_MESSAGE_HISTORY"` \| `"SEND_MESSAGE"` \| `"MANAGE_MESSAGES"` \| `"MANAGE_WEBHOOKS"` \| `"INVITE_OTHERS"` \| `"SEND_EMBEDS"` \| `"UPLOAD_FILES"` \| `"MASQUERADE"` \| `"REACT"` \| `"CONNECT"` \| `"SPEAK"` \| `"MANAGE_CHANNEL"` \| `"VOICE_CALL"`)[]

Defined in: [src/utils/permissions.ts:50](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/permissions.ts#L50)

Returns an array of all the Permissions that are set in the bitfield.

#### Returns

(`"VIEW_CHANNEL"` \| `"READ_MESSAGE_HISTORY"` \| `"SEND_MESSAGE"` \| `"MANAGE_MESSAGES"` \| `"MANAGE_WEBHOOKS"` \| `"INVITE_OTHERS"` \| `"SEND_EMBEDS"` \| `"UPLOAD_FILES"` \| `"MASQUERADE"` \| `"REACT"` \| `"CONNECT"` \| `"SPEAK"` \| `"MANAGE_CHANNEL"` \| `"VOICE_CALL"`)[]

An array of flag names.

#### Inherited from

[`BitField`](BitField.md).[`toArray`](BitField.md#toarray)

***

### valueOf()

> **valueOf**(): `number`

Defined in: [src/utils/bitField.ts:116](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/bitField.ts#L116)

#### Returns

`number`

#### Inherited from

[`BitField`](BitField.md).[`valueOf`](BitField.md#valueof)

***

### resolve()

> `static` **resolve**(`bit`): `number`

Defined in: [src/utils/permissions.ts:228](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/utils/permissions.ts#L228)

Resolves a bitfield or an array of bitfields into a single number.

#### Parameters

##### bit

[`ChannelPermissionsResolvable`](../type-aliases/ChannelPermissionsResolvable.md)

The bitfield or array of bitfields to resolve.

#### Returns

`number`

The resolved bitfield as a number.

#### Inherited from

[`BitField`](BitField.md).[`resolve`](BitField.md#resolve)
