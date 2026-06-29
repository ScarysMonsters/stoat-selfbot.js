---
title: "Class: ServerMember"
---

# Class: ServerMember

Defined in: [src/struct/serverMember.ts:12](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverMember.ts#L12)

Represents a member of a server.

## Extends

- [`Base`](Base.md)

## Constructors

### Constructor

> **new ServerMember**(`client`, `data`): `ServerMember`

Defined in: [src/struct/serverMember.ts:40](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverMember.ts#L40)

Creates a new ServerMember instance.

#### Parameters

##### client

[`Client`](Client.md)

The client instance.

##### data

The raw data for the server member from the API.

###### _id

\{ `server`: `string`; `user`: `string`; \}

**Description**

Unique member id

###### _id.server

`string`

**Description**

Server Id

###### _id.user

`string`

**Description**

User Id

###### avatar?

\{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`

**Description**

Avatar attachment

###### joined_at

`string`

**Description**

Time at which this user joined the server

###### nickname?

`string` \| `null`

**Description**

Member's nickname

###### roles?

`string`[]

**Description**

Member's roles

###### timeout?

`string` \| `null`

**Description**

Timestamp this member is timed out until

#### Returns

`ServerMember`

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructor)

## Properties

### avatar

> **avatar**: [`Attachment`](Attachment.md) \| `null` = `null`

Defined in: [src/struct/serverMember.ts:20](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverMember.ts#L20)

The avatar of the member, or `null` if none is set.

***

### client

> `readonly` **client**: [`Client`](Client.md)

Defined in: [src/struct/base.ts:21](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/base.ts#L21)

The client instance.

#### Inherited from

[`Base`](Base.md).[`client`](Base.md#client)

***

### id

> **id**: `string`

Defined in: [src/struct/base.ts:14](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/base.ts#L14)

The unique identifier for the object.

#### Inherited from

[`Base`](Base.md).[`id`](Base.md#id)

***

### nickname

> **nickname**: `string` \| `null` = `null`

Defined in: [src/struct/serverMember.ts:17](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverMember.ts#L17)

The nickname of the member, or `null` if none is set.

***

### roleIds

> **roleIds**: `string`[] = `[]`

Defined in: [src/struct/serverMember.ts:23](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverMember.ts#L23)

Role IDs assigned to the member

***

### serverId

> **serverId**: `string`

Defined in: [src/struct/serverMember.ts:14](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverMember.ts#L14)

The ID of the server this member belongs to.

## Accessors

### bot

#### Get Signature

> **get** **bot**(): `boolean`

Defined in: [src/struct/serverMember.ts:271](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverMember.ts#L271)

Gets whether the user is a bot.

##### Returns

`boolean`

Whether the user is a bot.

***

### roles

#### Get Signature

> **get** **roles**(): [`Role`](Role.md)[]

Defined in: [src/struct/serverMember.ts:26](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverMember.ts#L26)

Resolved roles assigned to the member (resolved from roleIds + server cache)

##### Returns

[`Role`](Role.md)[]

***

### server

#### Get Signature

> **get** **server**(): [`Server`](Server.md)

Defined in: [src/struct/serverMember.ts:280](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverMember.ts#L280)

Retrieves the server this member belongs to.

##### Returns

[`Server`](Server.md)

The server instance.

***

### user

#### Get Signature

> **get** **user**(): [`User`](User.md)

Defined in: [src/struct/serverMember.ts:253](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverMember.ts#L253)

Retrieves the user associated with this server member.

##### Returns

[`User`](User.md)

The user instance.

***

### username

#### Get Signature

> **get** **username**(): `string`

Defined in: [src/struct/serverMember.ts:262](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverMember.ts#L262)

Gets the username of the user.

##### Returns

`string`

The username of the user.

## Methods

### \_clone()

> **\_clone**(): `this`

Defined in: [src/struct/base.ts:84](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/base.ts#L84)

Creates a deep clone of the object.

#### Returns

`this`

A clone of the object.

#### Inherited from

[`Base`](Base.md).[`_clone`](Base.md#_clone)

***

### \_update()

> **\_update**(`data`, `clear?`): `this`

Defined in: [src/struct/base.ts:56](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/base.ts#L56)

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

### addRole()

> **addRole**(`roleId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`ServerMember`\>

Defined in: [src/struct/serverMember.ts:113](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverMember.ts#L113)

adds a role to the server member.

#### Parameters

##### roleId

`string`

The ID of the role to add to the member.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`ServerMember`\>

***

### ban()

> **ban**(`reason?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/serverMember.ts:154](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverMember.ts#L154)

Bans the server member.

#### Parameters

##### reason?

`string`

The reason for the ban.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the member is banned.

#### Example

```typescript
await member.ban("Violation of rules");
```

***

### edit()

> **edit**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/serverMember.ts:87](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverMember.ts#L87)

Edits this server member directly via the API.

#### Parameters

##### options

The options to edit the member with.

###### avatar?

`string` \| `null`

**Description**

Attachment Id to set for avatar

###### nickname?

`string` \| `null`

**Description**

Member nickname

###### remove?

(`"Avatar"` \| `"Nickname"` \| `"Roles"` \| `"Timeout"` \| `"JoinedAt"`)[]

**Description**

Fields to remove from channel object

**Default**

```ts
[]
```

###### roles?

`string`[] \| `null`

**Description**

Array of role ids

###### timeout?

`string` \| `null`

**Description**

Timestamp this member is timed out until

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### equals()

> **equals**(`obj?`): `boolean`

Defined in: [src/struct/base.ts:29](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/base.ts#L29)

Compares this object with another to determine if they are equal.

#### Parameters

##### obj?

`ServerMember` \| `null`

The object to compare with.

#### Returns

`boolean`

`true` if the objects are equal, otherwise `false`.

#### Inherited from

[`Base`](Base.md).[`equals`](Base.md#equals)

***

### hasPermission()

> **hasPermission**(`permission`): `boolean`

Defined in: [src/struct/serverMember.ts:238](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverMember.ts#L238)

Checks if this server member has a specific permission.

#### Parameters

##### permission

[`FullPermissionsResolvable`](../type-aliases/FullPermissionsResolvable.md)

The permission to check for

#### Returns

`boolean`

Whether the member has the permission

#### Example

```typescript
if (member.hasPermission('MANAGE_MESSAGES')) {
  // Member can manage messages
}
```

note this works on the same basis as stoats permissions checking

***

### kick()

> **kick**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/serverMember.ts:168](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverMember.ts#L168)

Kicks the server member.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the member is kicked.

#### Example

```typescript
await member.kick();
```

***

### leave()

> **leave**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/serverMember.ts:182](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverMember.ts#L182)

Leaves the server.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the member leaves the server.

#### Example

```typescript
await member.leave();
```

***

### permissions()

> **permissions**(): [`FullPermissions`](FullPermissions.md)

Defined in: [src/struct/serverMember.ts:202](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverMember.ts#L202)

Gets the effective permissions for this server member based on their roles.

The permissions are calculated by:
1. Starting with a base FullPermissions with no permissions
2. For each role the member has, applying the role's allow permissions
3. For each role the member has, removing the role's deny permissions

#### Returns

[`FullPermissions`](FullPermissions.md)

The effective permissions for this member

#### Example

```typescript
const permissions = member.getPermissions();
console.log(permissions.has('MANAGE_MESSAGES')); // true or false
```

***

### removeRole()

> **removeRole**(`roleId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`ServerMember`\>

Defined in: [src/struct/serverMember.ts:133](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverMember.ts#L133)

Removes a role from the server member.

#### Parameters

##### roleId

`string`

The ID of the role to remove from the member.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`ServerMember`\>

A promise that resolves with the updated server member instance.

#### Example

```typescript
await member.removeRole("roleId");
```

***

### setNickname()

> **setNickname**(`nickname`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`ServerMember`\>

Defined in: [src/struct/serverMember.ts:102](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverMember.ts#L102)

Sets the nickname of the server member.

#### Parameters

##### nickname

`string` \| `null`

The new nickname to set, or `null` to clear.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`ServerMember`\>

A promise that resolves with the updated server member instance.

#### Example

```typescript
await member.setNickname("NewNickname");
```

***

### timeout()

> **timeout**(`duration`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/serverMember.ts:298](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverMember.ts#L298)

Sets a timeout for the server member.

#### Parameters

##### duration

[`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

The duration of the timeout as a Date object.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the timeout is set.

***

### toString()

> **toString**(): `string`

Defined in: [src/struct/serverMember.ts:289](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/serverMember.ts#L289)

Converts the server member to a string representation.

#### Returns

`string`

A string representation of the server member in the format `<@userId>`.
