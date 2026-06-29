---
title: "Class: Relationship"
---

# Class: Relationship

Defined in: [src/struct/relationship.ts:16](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/relationship.ts#L16)

Represents a relationship between the client user and another user.
Relationships can be: Friend, Blocked, Incoming, Outgoing, Implicit.

Inspired by discord.js-selfbot-v13's Relationship system.

## Extends

- [`Base`](Base.md)

## Constructors

### Constructor

> **new Relationship**(`client`, `data`): `Relationship`

Defined in: [src/struct/relationship.ts:29](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/relationship.ts#L29)

Creates a new Relationship instance.

#### Parameters

##### client

[`Client`](Client.md)

The client instance.

##### data

The raw relationship data from the API.

###### _id

`string`

**Description**

Other user's Id

###### status

`"User"` \| `"None"` \| `"Friend"` \| `"Blocked"` \| `"Outgoing"` \| `"Incoming"` \| `"BlockedOther"`

**Description**

Relationship status with them

#### Returns

`Relationship`

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructor)

## Properties

### client

> `readonly` **client**: [`Client`](Client.md)

Defined in: [src/struct/base.ts:21](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/base.ts#L21)

The client instance.

#### Inherited from

[`Base`](Base.md).[`client`](Base.md#client)

***

### id

> **id**: `string`

Defined in: [src/struct/base.ts:14](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/base.ts#L14)

The unique identifier for the object.

#### Inherited from

[`Base`](Base.md).[`id`](Base.md#id)

***

### status

> **status**: [`RelationshipStatus`](../enumerations/RelationshipStatus.md) = `RelationshipStatus.NONE`

Defined in: [src/struct/relationship.ts:18](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/relationship.ts#L18)

The status of the relationship.

***

### targetId

> **targetId**: `string`

Defined in: [src/struct/relationship.ts:21](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/relationship.ts#L21)

The ID of the target user.

## Accessors

### createdAt

#### Get Signature

> **get** **createdAt**(): [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

Defined in: [src/struct/relationship.ts:105](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/relationship.ts#L105)

Gets the creation date of the target user (derived from their ID).

##### Returns

[`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

***

### isBlocked

#### Get Signature

> **get** **isBlocked**(): `boolean`

Defined in: [src/struct/relationship.ts:119](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/relationship.ts#L119)

Whether this relationship is a block.

##### Returns

`boolean`

***

### isFriend

#### Get Signature

> **get** **isFriend**(): `boolean`

Defined in: [src/struct/relationship.ts:112](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/relationship.ts#L112)

Whether this relationship is a friendship.

##### Returns

`boolean`

***

### isImplicit

#### Get Signature

> **get** **isImplicit**(): `boolean`

Defined in: [src/struct/relationship.ts:140](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/relationship.ts#L140)

Whether this is an implicit relationship (e.g. shared server or group).

##### Returns

`boolean`

***

### isPendingIncoming

#### Get Signature

> **get** **isPendingIncoming**(): `boolean`

Defined in: [src/struct/relationship.ts:126](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/relationship.ts#L126)

Whether this is a pending incoming friend request.

##### Returns

`boolean`

***

### isPendingOutgoing

#### Get Signature

> **get** **isPendingOutgoing**(): `boolean`

Defined in: [src/struct/relationship.ts:133](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/relationship.ts#L133)

Whether this is a pending outgoing friend request.

##### Returns

`boolean`

***

### type

#### Get Signature

> **get** **type**(): `string`

Defined in: [src/struct/relationship.ts:89](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/relationship.ts#L89)

Gets the relationship type as a human-readable string.

##### Returns

`string`

***

### user

#### Get Signature

> **get** **user**(): [`User`](User.md) \| `null`

Defined in: [src/struct/relationship.ts:82](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/relationship.ts#L82)

Gets the target user of this relationship.
Returns `null` if the user is not cached.

##### Returns

[`User`](User.md) \| `null`

## Methods

### \_clone()

> **\_clone**(): `this`

Defined in: [src/struct/base.ts:84](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/base.ts#L84)

Creates a deep clone of the object.

#### Returns

`this`

A clone of the object.

#### Inherited from

[`Base`](Base.md).[`_clone`](Base.md#_clone)

***

### \_update()

> **\_update**(`data`, `clear?`): `this`

Defined in: [src/struct/base.ts:56](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/base.ts#L56)

Updates the object with new data and returns a clone of the object.

#### Parameters

##### data

[`PartialObject`](../type-aliases/PartialObject.md)

The data to update the object with.

##### clear?

`string`[]

Fields to clear in the object.

#### Returns

`this`

A clone of the updated object.

#### Inherited from

[`Base`](Base.md).[`_update`](Base.md#_update)

***

### accept()

> **accept**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/relationship.ts:162](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/relationship.ts#L162)

Accepts this friend request.
Only works if the status is PendingIncoming.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### block()

> **block**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/relationship.ts:179](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/relationship.ts#L179)

Blocks the target user.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### equals()

> **equals**(`obj?`): `boolean`

Defined in: [src/struct/base.ts:29](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/base.ts#L29)

Compares this object with another to determine if they are equal.

#### Parameters

##### obj?

`Relationship` \| `null`

The object to compare with.

#### Returns

`boolean`

`true` if the objects are equal, otherwise `false`.

#### Inherited from

[`Base`](Base.md).[`equals`](Base.md#equals)

***

### fetchUser()

> **fetchUser**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`User`](User.md)\>

Defined in: [src/struct/relationship.ts:154](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/relationship.ts#L154)

Fetches the full user data for the target of this relationship.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`User`](User.md)\>

A promise that resolves with the target user.

#### Example

```typescript
const targetUser = await relationship.fetchUser();
```

***

### remove()

> **remove**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/relationship.ts:172](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/relationship.ts#L172)

Declines or removes this friend request/relationship.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### toString()

> **toString**(): `string`

Defined in: [src/struct/relationship.ts:190](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/relationship.ts#L190)

Returns a string representation of an object.

#### Returns

`string`

***

### unblock()

> **unblock**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/relationship.ts:186](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/struct/relationship.ts#L186)

Unblocks the target user.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>
