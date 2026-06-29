---
title: "Class: Mentions"
---

# Class: Mentions

Defined in: [src/struct/mentions.ts:8](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/mentions.ts#L8)

Represents the mentions in a message, including users and server members.

## Constructors

### Constructor

> **new Mentions**(`message`, `_users`): `Mentions`

Defined in: [src/struct/mentions.ts:18](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/mentions.ts#L18)

Creates a new Mentions instance.

#### Parameters

##### message

[`MessageStruct`](MessageStruct.md)

The message associated with the mentions.

##### \_users

`string`[]

An array of user IDs mentioned in the message.

#### Returns

`Mentions`

## Properties

### client

> `readonly` **client**: [`Client`](Client.md)

Defined in: [src/struct/mentions.ts:10](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/mentions.ts#L10)

The client instance.

***

### message

> `readonly` **message**: [`MessageStruct`](MessageStruct.md)

Defined in: [src/struct/mentions.ts:19](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/mentions.ts#L19)

The message associated with the mentions.

## Accessors

### members

#### Get Signature

> **get** **members**(): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`ServerMember`](ServerMember.md)\> \| `null`

Defined in: [src/struct/mentions.ts:58](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/mentions.ts#L58)

Retrieves the server members mentioned in the message.

##### Example

```typescript
const members = mentions.members;
if (members) {
  members.forEach(member => console.log(member.displayName));
}
```

##### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`ServerMember`](ServerMember.md)\> \| `null`

A map of user IDs to `ServerMember` instances, or `null` if the message is not in a server.

***

### users

#### Get Signature

> **get** **users**(): [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`User`](User.md)\>

Defined in: [src/struct/mentions.ts:84](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/mentions.ts#L84)

Retrieves the users mentioned in the message.

##### Example

```typescript
const users = mentions.users;
users.forEach(user => console.log(user.username));
```

##### Returns

[`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`User`](User.md)\>

A map of user IDs to `User` instances.

## Methods

### has()

> **has**(`user`): `boolean`

Defined in: [src/struct/mentions.ts:39](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/mentions.ts#L39)

Checks if a specific user is mentioned in the message.

#### Parameters

##### user

[`UserResolvable`](../type-aliases/UserResolvable.md)

The user to check.

#### Returns

`boolean`

`true` if the user is mentioned, otherwise `false`.

#### Throws

Throws an error if the user cannot be resolved.

#### Example

```typescript
if (mentions.has(someUser)) {
  console.log("User is mentioned!");
}
```
