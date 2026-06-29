---
title: "Class: UserPermissions"
---

# Class: UserPermissions

Defined in: [src/utils/permissions.ts:53](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/permissions.ts#L53)

User-specific permissions.
Permissions that apply to user-level interactions.

## Extends

- [`BitField`](BitField.md)

## Constructors

### Constructor

> **new UserPermissions**(`bits?`): `UserPermissions`

Defined in: [src/utils/permissions.ts:249](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/permissions.ts#L249)

#### Parameters

##### bits?

[`UserPermissionsResolvable`](../type-aliases/UserPermissionsResolvable.md)

#### Returns

`UserPermissions`

#### Inherited from

[`BitField`](BitField.md).[`constructor`](BitField.md#constructor)

## Properties

### bitfield

> **bitfield**: `number` = `DEFAULT_BIT`

Defined in: [src/utils/bitField.ts:17](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/bitField.ts#L17)

#### Inherited from

[`BitField`](BitField.md).[`bitfield`](BitField.md#bitfield)

***

### FLAGS

> `readonly` `static` **FLAGS**: `object`

Defined in: [src/utils/permissions.ts:238](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/permissions.ts#L238)

#### ACCESS

> `readonly` **ACCESS**: `number`

#### INVITE

> `readonly` **INVITE**: `number`

#### SEND\_MESSAGES

> `readonly` **SEND\_MESSAGES**: `number`

#### VIEW\_PROFILE

> `readonly` **VIEW\_PROFILE**: `number`

#### Inherited from

[`BitField`](BitField.md).[`FLAGS`](BitField.md#flags)

## Accessors

### self

#### Get Signature

> **get** **self**(): \{(`bits?`): [`BitField`](BitField.md); `FLAGS`: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `number`\>; `resolve`: `number`; \}

Defined in: [src/utils/bitField.ts:42](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/bitField.ts#L42)

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

Defined in: [src/utils/bitField.ts:132](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/bitField.ts#L132)

#### Returns

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`string`\>

#### Inherited from

[`BitField`](BitField.md).[`[iterator]`](BitField.md#iterator)

***

### add()

> **add**(...`bits`): `this`

Defined in: [src/utils/permissions.ts:56](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/permissions.ts#L56)

#### Parameters

##### bits

...[`UserPermissionsResolvable`](../type-aliases/UserPermissionsResolvable.md)[]

#### Returns

`this`

#### Inherited from

[`BitField`](BitField.md).[`add`](BitField.md#add)

***

### any()

> **any**(`bit`): `boolean`

Defined in: [src/utils/permissions.ts:55](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/permissions.ts#L55)

Checks if any of the bits in the bitfield are set.

#### Parameters

##### bit

[`UserPermissionsResolvable`](../type-aliases/UserPermissionsResolvable.md)

The bitfield or array of bitfields to check.

#### Returns

`boolean`

True if any bits are set, false otherwise.

#### Inherited from

[`BitField`](BitField.md).[`any`](BitField.md#any)

***

### freeze()

> **freeze**(): [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)\<`this`\>

Defined in: [src/utils/bitField.ts:112](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/bitField.ts#L112)

#### Returns

[`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)\<`this`\>

#### Inherited from

[`BitField`](BitField.md).[`freeze`](BitField.md#freeze)

***

### has()

> **has**(`bit`): `boolean`

Defined in: [src/utils/permissions.ts:58](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/permissions.ts#L58)

checks if a specific permission is set.

#### Parameters

##### bit

[`UserPermissionsResolvable`](../type-aliases/UserPermissionsResolvable.md)

#### Returns

`boolean`

#### Inherited from

[`BitField`](BitField.md).[`has`](BitField.md#has)

***

### missing()

> **missing**(`bit`): (`"ACCESS"` \| `"VIEW_PROFILE"` \| `"SEND_MESSAGES"` \| `"INVITE"`)[]

Defined in: [src/utils/permissions.ts:59](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/permissions.ts#L59)

#### Parameters

##### bit

[`UserPermissionsResolvable`](../type-aliases/UserPermissionsResolvable.md)

#### Returns

(`"ACCESS"` \| `"VIEW_PROFILE"` \| `"SEND_MESSAGES"` \| `"INVITE"`)[]

***

### remove()

> **remove**(...`bits`): `this`

Defined in: [src/utils/permissions.ts:57](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/permissions.ts#L57)

#### Parameters

##### bits

...[`UserPermissionsResolvable`](../type-aliases/UserPermissionsResolvable.md)[]

#### Returns

`this`

#### Inherited from

[`BitField`](BitField.md).[`remove`](BitField.md#remove)

***

### serialize()

> **serialize**(): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<[`UserPermissionsString`](../type-aliases/UserPermissionsString.md), `boolean`\>

Defined in: [src/utils/permissions.ts:54](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/permissions.ts#L54)

#### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<[`UserPermissionsString`](../type-aliases/UserPermissionsString.md), `boolean`\>

A record of all flags and their boolean values indicating whether they are set.

#### Inherited from

[`BitField`](BitField.md).[`serialize`](BitField.md#serialize)

***

### toArray()

> **toArray**(): (`"ACCESS"` \| `"VIEW_PROFILE"` \| `"SEND_MESSAGES"` \| `"INVITE"`)[]

Defined in: [src/utils/permissions.ts:60](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/permissions.ts#L60)

Returns an array of all the Permissions that are set in the bitfield.

#### Returns

(`"ACCESS"` \| `"VIEW_PROFILE"` \| `"SEND_MESSAGES"` \| `"INVITE"`)[]

An array of flag names.

#### Inherited from

[`BitField`](BitField.md).[`toArray`](BitField.md#toarray)

***

### valueOf()

> **valueOf**(): `number`

Defined in: [src/utils/bitField.ts:116](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/bitField.ts#L116)

#### Returns

`number`

#### Inherited from

[`BitField`](BitField.md).[`valueOf`](BitField.md#valueof)

***

### resolve()

> `static` **resolve**(`bit`): `number`

Defined in: [src/utils/permissions.ts:253](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/permissions.ts#L253)

Resolves a bitfield or an array of bitfields into a single number.

#### Parameters

##### bit

[`UserPermissionsResolvable`](../type-aliases/UserPermissionsResolvable.md)

The bitfield or array of bitfields to resolve.

#### Returns

`number`

The resolved bitfield as a number.

#### Inherited from

[`BitField`](BitField.md).[`resolve`](BitField.md#resolve)
