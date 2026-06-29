---
title: "Class: UUID"
---

# Class: UUID

Defined in: [src/utils/UUID.ts:3](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/UUID.ts#L3)

## Extends

- `any`

## Constructors

### Constructor

> **new UUID**(): `UUID`

#### Returns

`UUID`

#### Inherited from

`null.constructor`

## Properties

### ENCODING

> `readonly` `static` **ENCODING**: `"0123456789ABCDEFGHJKMNPQRSTVWXYZ"` = `"0123456789ABCDEFGHJKMNPQRSTVWXYZ"`

Defined in: [src/utils/UUID.ts:4](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/UUID.ts#L4)

***

### ENCODING\_LENGTH

> `readonly` `static` **ENCODING\_LENGTH**: `number` = `UUID.ENCODING.length`

Defined in: [src/utils/UUID.ts:5](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/UUID.ts#L5)

***

### RANDOM\_LENGTH

> `readonly` `static` **RANDOM\_LENGTH**: `16` = `16`

Defined in: [src/utils/UUID.ts:6](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/UUID.ts#L6)

***

### TIME\_LENGTH

> `readonly` `static` **TIME\_LENGTH**: `10` = `10`

Defined in: [src/utils/UUID.ts:7](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/UUID.ts#L7)

***

### TIME\_MAX

> `readonly` `static` **TIME\_MAX**: `number`

Defined in: [src/utils/UUID.ts:8](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/UUID.ts#L8)

## Accessors

### PROG

#### Get Signature

> **get** `static` **PROG**(): `number`

Defined in: [src/utils/UUID.ts:9](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/UUID.ts#L9)

##### Returns

`number`

## Methods

### generate()

> `static` **generate**(`timestamp?`): `string`

Defined in: [src/utils/UUID.ts:42](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/UUID.ts#L42)

#### Parameters

##### timestamp?

`number` = `...`

#### Returns

`string`

***

### timestampOf()

> `static` **timestampOf**(`id`): [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

Defined in: [src/utils/UUID.ts:46](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/utils/UUID.ts#L46)

#### Parameters

##### id

`string`

#### Returns

[`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)
