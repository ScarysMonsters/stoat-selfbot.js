---
title: "Class: Badges"
---

# Class: Badges

Defined in: [src/utils/badges.ts:10](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/badges.ts#L10)

Represents a bitfield that can be used to manage flags or permissions.

## Extends

- [`BitField`](BitField.md)

## Constructors

### Constructor

> **new Badges**(`bits?`): `Badges`

Defined in: [src/utils/badges.ts:28](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/badges.ts#L28)

#### Parameters

##### bits?

[`BadgesResolvable`](../type-aliases/BadgesResolvable.md)

#### Returns

`Badges`

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

Defined in: [src/utils/badges.ts:19](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/badges.ts#L19)

#### DEVELOPER

> `readonly` **DEVELOPER**: `number`

#### EARLY\_ADOPTER

> `readonly` **EARLY\_ADOPTER**: `number`

#### RESPONSIBLE\_DISCLOSURE

> `readonly` **RESPONSIBLE\_DISCLOSURE**: `number`

#### REVOLT\_TEAM

> `readonly` **REVOLT\_TEAM**: `number`

#### SUPPORTER

> `readonly` **SUPPORTER**: `number`

#### TRANSLATOR

> `readonly` **TRANSLATOR**: `number`

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

Defined in: [src/utils/badges.ts:13](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/badges.ts#L13)

#### Parameters

##### bits

...[`BadgesResolvable`](../type-aliases/BadgesResolvable.md)[]

#### Returns

`this`

#### Inherited from

[`BitField`](BitField.md).[`add`](BitField.md#add)

***

### any()

> **any**(`bit`): `boolean`

Defined in: [src/utils/badges.ts:12](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/badges.ts#L12)

Checks if any of the bits in the bitfield are set.

#### Parameters

##### bit

[`BadgesResolvable`](../type-aliases/BadgesResolvable.md)

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

Defined in: [src/utils/badges.ts:15](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/badges.ts#L15)

checks if a specific permission is set.

#### Parameters

##### bit

[`BadgesResolvable`](../type-aliases/BadgesResolvable.md)

#### Returns

`boolean`

#### Inherited from

[`BitField`](BitField.md).[`has`](BitField.md#has)

***

### remove()

> **remove**(...`bits`): `this`

Defined in: [src/utils/badges.ts:14](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/badges.ts#L14)

#### Parameters

##### bits

...[`BadgesResolvable`](../type-aliases/BadgesResolvable.md)[]

#### Returns

`this`

#### Inherited from

[`BitField`](BitField.md).[`remove`](BitField.md#remove)

***

### serialize()

> **serialize**(): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<[`BadgeString`](../type-aliases/BadgeString.md), `boolean`\>

Defined in: [src/utils/badges.ts:11](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/badges.ts#L11)

#### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<[`BadgeString`](../type-aliases/BadgeString.md), `boolean`\>

A record of all flags and their boolean values indicating whether they are set.

#### Inherited from

[`BitField`](BitField.md).[`serialize`](BitField.md#serialize)

***

### toArray()

> **toArray**(): `string`[]

Defined in: [src/utils/bitField.ts:76](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/bitField.ts#L76)

Returns an array of all the Permissions that are set in the bitfield.

#### Returns

`string`[]

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

Defined in: [src/utils/badges.ts:32](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/utils/badges.ts#L32)

Resolves a bitfield or an array of bitfields into a single number.

#### Parameters

##### bit

[`BadgesResolvable`](../type-aliases/BadgesResolvable.md)

The bitfield or array of bitfields to resolve.

#### Returns

`number`

The resolved bitfield as a number.

#### Inherited from

[`BitField`](BitField.md).[`resolve`](BitField.md#resolve)
