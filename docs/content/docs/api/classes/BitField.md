---
title: "Class: BitField"
---

# Class: BitField

Defined in: [src/utils/bitField.ts:15](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/bitField.ts#L15)

Represents a bitfield that can be used to manage flags or permissions.

## Extended by

- [`Badges`](Badges.md)
- [`FullPermissions`](FullPermissions.md)
- [`ChannelPermissions`](ChannelPermissions.md)
- [`UserPermissions`](UserPermissions.md)
- [`ServerPermissions`](ServerPermissions.md)

## Constructors

### Constructor

> **new BitField**(`bits?`): `BitField`

Defined in: [src/utils/bitField.ts:18](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/bitField.ts#L18)

#### Parameters

##### bits?

`BitFieldResolvable` = `DEFAULT_BIT`

#### Returns

`BitField`

## Properties

### bitfield

> **bitfield**: `number` = `DEFAULT_BIT`

Defined in: [src/utils/bitField.ts:17](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/bitField.ts#L17)

***

### FLAGS

> `static` **FLAGS**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `number`\> = `{}`

Defined in: [src/utils/bitField.ts:16](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/bitField.ts#L16)

## Accessors

### self

#### Get Signature

> **get** **self**(): \{(`bits?`): `BitField`; `FLAGS`: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `number`\>; `resolve`: `number`; \}

Defined in: [src/utils/bitField.ts:42](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/bitField.ts#L42)

Returns the class that this instance belongs to.

##### Returns

The class of the bitfield.

\{(`bits?`): `BitField`; `FLAGS`: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `number`\>; `resolve`: `number`; \}

###### FLAGS

> **FLAGS**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `number`\>

###### resolve()

> **resolve**(`bit`): `number`

###### Parameters

###### bit

`BitFieldResolvable`

###### Returns

`number`

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`string`\>

Defined in: [src/utils/bitField.ts:132](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/bitField.ts#L132)

#### Returns

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<`string`\>

***

### add()

> **add**(...`bits`): `this`

Defined in: [src/utils/bitField.ts:80](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/bitField.ts#L80)

#### Parameters

##### bits

...`BitFieldResolvable`[]

#### Returns

`this`

***

### any()

> **any**(`bit`): `boolean`

Defined in: [src/utils/bitField.ts:59](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/bitField.ts#L59)

Checks if any of the bits in the bitfield are set.

#### Parameters

##### bit

`BitFieldResolvable`

The bitfield or array of bitfields to check.

#### Returns

`boolean`

True if any bits are set, false otherwise.

***

### freeze()

> **freeze**(): [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)\<`this`\>

Defined in: [src/utils/bitField.ts:112](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/bitField.ts#L112)

#### Returns

[`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)\<`this`\>

***

### has()

> **has**(`bit`): `boolean`

Defined in: [src/utils/bitField.ts:67](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/bitField.ts#L67)

checks if a specific permission is set.

#### Parameters

##### bit

`BitFieldResolvable`

#### Returns

`boolean`

***

### remove()

> **remove**(...`bits`): `this`

Defined in: [src/utils/bitField.ts:96](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/bitField.ts#L96)

#### Parameters

##### bits

...`BitFieldResolvable`[]

#### Returns

`this`

***

### serialize()

> **serialize**(): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `boolean`\>

Defined in: [src/utils/bitField.ts:124](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/bitField.ts#L124)

#### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `boolean`\>

A record of all flags and their boolean values indicating whether they are set.

***

### toArray()

> **toArray**(): `string`[]

Defined in: [src/utils/bitField.ts:76](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/bitField.ts#L76)

Returns an array of all the Permissions that are set in the bitfield.

#### Returns

`string`[]

An array of flag names.

***

### valueOf()

> **valueOf**(): `number`

Defined in: [src/utils/bitField.ts:116](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/bitField.ts#L116)

#### Returns

`number`

***

### resolve()

> `static` **resolve**(`bit`): `number`

Defined in: [src/utils/bitField.ts:27](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/bitField.ts#L27)

Resolves a bitfield or an array of bitfields into a single number.

#### Parameters

##### bit

`BitFieldResolvable`

The bitfield or array of bitfields to resolve.

#### Returns

`number`

The resolved bitfield as a number.
