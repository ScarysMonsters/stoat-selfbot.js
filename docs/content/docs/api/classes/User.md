---
title: "Class: User"
---

# Class: User

Defined in: [src/struct/user.ts:18](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L18)

Represents a user in the client.

## Extends

- [`Base`](Base.md)

## Extended by

- [`ClientUser`](ClientUser.md)

## Constructors

### Constructor

> **new User**(`client`, `data`): `User`

Defined in: [src/struct/user.ts:58](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L58)

Creates a new User instance.

#### Parameters

##### client

[`Client`](Client.md)

The client instance.

##### data

The raw data for the user from the API.

###### _id

`string`

**Description**

Unique Id

###### avatar?

\{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`

**Description**

Avatar attachment

###### badges?

`number`

Format: uint32

**Description**

Bitfield of user badges

https://docs.rs/revolt-models/latest/revolt_models/v0/enum.UserBadges.html

###### bot?

\{ `owner`: `string`; \} \| `null`

**Description**

Bot information

###### discriminator

`string`

**Description**

Discriminator

###### display_name?

`string` \| `null`

**Description**

Display name

###### flags?

`number`

Format: uint32

**Description**

Enum of user flags

https://docs.rs/revolt-models/latest/revolt_models/v0/enum.UserFlags.html

###### online

`boolean`

**Description**

Whether this user is currently online

###### privileged?

`boolean`

**Description**

Whether this user is privileged

###### relations?

`object`[]

**Description**

Relationships with other users

###### relationship

`"User"` \| `"None"` \| `"Friend"` \| `"Blocked"` \| `"Outgoing"` \| `"Incoming"` \| `"BlockedOther"`

**Description**

Current session user's relationship with this user

###### status?

\{ `presence?`: `"Online"` \| `"Idle"` \| `"Focus"` \| `"Busy"` \| `"Invisible"` \| `null`; `text?`: `string` \| `null`; \} \| `null`

**Description**

User's current status

###### username

`string`

**Description**

Username

#### Returns

`User`

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructor)

## Properties

### avatar

> **avatar**: [`Attachment`](Attachment.md) \| `null` = `null`

Defined in: [src/struct/user.ts:29](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L29)

The avatar of the user, or `null` if none is set.

***

### badges

> **badges**: [`Badges`](Badges.md)

Defined in: [src/struct/user.ts:38](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L38)

The badges associated with the user.

***

### bot

> **bot**: `boolean` = `false`

Defined in: [src/struct/user.ts:41](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L41)

Whether the user is a bot.

***

### client

> `readonly` **client**: [`Client`](Client.md)

Defined in: [src/struct/base.ts:21](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/base.ts#L21)

The client instance.

#### Inherited from

[`Base`](Base.md).[`client`](Base.md#client)

***

### discriminator

> **discriminator**: `string` = `"0000"`

Defined in: [src/struct/user.ts:23](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L23)

The discriminator of the user (4 digits).

***

### displayName

> **displayName**: `string` \| `null` = `null`

Defined in: [src/struct/user.ts:26](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L26)

The display name of the user, or `null` if none is set.

***

### flags

> **flags**: `number` = `0`

Defined in: [src/struct/user.ts:50](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L50)

The user's flags.

***

### id

> **id**: `string`

Defined in: [src/struct/base.ts:14](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/base.ts#L14)

The unique identifier for the object.

#### Inherited from

[`Base`](Base.md).[`id`](Base.md#id)

***

### online

> **online**: `boolean` = `false`

Defined in: [src/struct/user.ts:44](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L44)

Whether the user is currently online.

***

### presence

> **presence**: [`Presence`](Presence.md)

Defined in: [src/struct/user.ts:35](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L35)

The presence status of the user.

***

### profile

> **profile**: \{ `background?`: \{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`; `content?`: `string` \| `null`; \} \| `null` = `null`

Defined in: [src/struct/user.ts:47](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L47)

The user's profile, or `null` if not fetched.

#### Union Members

##### Type Literal

\{ `background?`: \{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`; `content?`: `string` \| `null`; \}

##### background?

> `optional` **background?**: \{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`

###### Union Members

###### Type Literal

\{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \}

###### \_id

> **\_id**: `string`

###### Description

Unique Id

###### content\_type

> **content\_type**: `string`

###### Description

Raw content type of this file

###### deleted?

> `optional` **deleted?**: `boolean` \| `null`

###### Description

Whether this file was deleted

###### filename

> **filename**: `string`

###### Description

Original filename

###### message\_id?

> `optional` **message\_id?**: `string` \| `null`

###### metadata

> **metadata**: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}

###### Union Members

###### Type Literal

\{ `type`: `"File"`; \}

***

###### Type Literal

\{ `type`: `"Text"`; \}

***

###### Type Literal

\{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \}

###### height

> **height**: `number`

Format: uint

###### type

> **type**: `"Image"`

###### width

> **width**: `number`

Format: uint

***

###### Type Literal

\{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \}

###### height

> **height**: `number`

Format: uint

###### type

> **type**: `"Video"`

###### width

> **width**: `number`

Format: uint

***

###### Type Literal

\{ `type`: `"Audio"`; \}

###### Description

Parsed metadata of this file

###### object\_id?

> `optional` **object\_id?**: `string` \| `null`

###### Description

Id of the object this file is associated with

###### reported?

> `optional` **reported?**: `boolean` \| `null`

###### Description

Whether this file was reported

###### server\_id?

> `optional` **server\_id?**: `string` \| `null`

###### size

> **size**: `number`

Format: int

###### Description

Size of this file (in bytes)

###### tag

> **tag**: `string`

###### Description

Tag / bucket this file was uploaded to

###### user\_id?

> `optional` **user\_id?**: `string` \| `null`

***

`null`

###### Description

Background visible on user's profile

##### content?

> `optional` **content?**: `string` \| `null`

###### Description

Text content on user's profile

***

`null`

***

### relations

> **relations**: `object`[] = `[]`

Defined in: [src/struct/user.ts:32](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L32)

The relationships of the user.

#### \_id

> **\_id**: `string`

##### Description

Other user's Id

#### status

> **status**: `"User"` \| `"None"` \| `"Friend"` \| `"Blocked"` \| `"Outgoing"` \| `"Incoming"` \| `"BlockedOther"`

##### Description

Relationship status with them

***

### username

> **username**: `string`

Defined in: [src/struct/user.ts:20](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L20)

The username of the user.

## Accessors

### createdAt

#### Get Signature

> **get** **createdAt**(): [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

Defined in: [src/struct/user.ts:144](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L144)

Gets the creation date of the user.

##### Returns

[`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

The date when the user was created.

***

### createdTimestamp

#### Get Signature

> **get** **createdTimestamp**(): `number`

Defined in: [src/struct/user.ts:160](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L160)

Gets the creation timestamp of the user in milliseconds.

##### Returns

`number`

The timestamp of when the user was created.

***

### isOwner

#### Get Signature

> **get** **isOwner**(): `boolean`

Defined in: [src/struct/user.ts:151](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L151)

checks if the user is the owner of the bot.

##### Returns

`boolean`

***

### tag

#### Get Signature

> **get** **tag**(): `string`

Defined in: [src/struct/user.ts:135](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L135)

Returns the tag of the user (username#discriminator).

##### Returns

`string`

The user's tag.

## Methods

### \_clone()

> **\_clone**(): `this`

Defined in: [src/struct/base.ts:84](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/base.ts#L84)

Creates a deep clone of the object.

#### Returns

`this`

A clone of the object.

#### Inherited from

[`Base`](Base.md).[`_clone`](Base.md#_clone)

***

### \_update()

> **\_update**(`data`, `clear?`): `this`

Defined in: [src/struct/base.ts:56](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/base.ts#L56)

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

### avatarURL()

> **avatarURL**(): `string` \| `undefined`

Defined in: [src/struct/user.ts:207](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L207)

#### Returns

`string` \| `undefined`

***

### block()

> **block**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/user.ts:174](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L174)

Blocks the user.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the user is blocked.

#### Example

```typescript
await user.block();
```

***

### createDM()

> **createDM**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`DMChannel`](DMChannel.md)\>

Defined in: [src/struct/user.ts:202](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L202)

Creates a direct message (DM) channel with the user.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`DMChannel`](DMChannel.md)\>

A promise that resolves with the created DM channel.

#### Example

```typescript
const dmChannel = await user.createDM();
```

***

### displayAvatarURL()

> **displayAvatarURL**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

Defined in: [src/struct/user.ts:212](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L212)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

***

### equals()

> **equals**(`obj?`): `boolean`

Defined in: [src/struct/base.ts:29](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/base.ts#L29)

Compares this object with another to determine if they are equal.

#### Parameters

##### obj?

`User` \| `null`

The object to compare with.

#### Returns

`boolean`

`true` if the objects are equal, otherwise `false`.

#### Inherited from

[`Base`](Base.md).[`equals`](Base.md#equals)

***

### fetch()

> **fetch**(`force?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`User`\>

Defined in: [src/struct/user.ts:262](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L262)

Fetches the latest data for the user from the API.

#### Parameters

##### force?

`boolean` = `false`

Whether to force a fetch even if the user is cached.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`User`\>

A promise that resolves with the updated user instance.

***

### fetchDefaultAvatar()

> **fetchDefaultAvatar**(): `string`

Defined in: [src/struct/user.ts:221](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L221)

Returns the default avatar URL for this user.

#### Returns

`string`

The default avatar URL.

***

### fetchMutual()

> **fetchMutual**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `channels`: `string`[]; `servers`: `string`[]; `users`: `string`[]; \}\>

Defined in: [src/struct/user.ts:251](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L251)

Fetches mutual servers, channels, and friends for this user.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `channels`: `string`[]; `servers`: `string`[]; `users`: `string`[]; \}\>

A promise that resolves with mutual data.

#### Example

```typescript
const mutual = await user.fetchMutual();
```

***

### fetchProfile()

> **fetchProfile**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `background?`: \{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`; `content?`: `string` \| `null`; \}\>

Defined in: [src/struct/user.ts:235](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L235)

Fetches the profile of the user.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `background?`: \{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`; `content?`: `string` \| `null`; \}\>

A promise that resolves with the user's profile.

#### Example

```typescript
const profile = await user.fetchProfile();
```

***

### toString()

> **toString**(): `string`

Defined in: [src/struct/user.ts:271](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L271)

Converts the user to a string representation.

#### Returns

`string`

A string representation of the user in the format `<@userId>`.

***

### unblock()

> **unblock**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/user.ts:188](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L188)

Unblocks the user.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the user is unblocked.

#### Example

```typescript
await user.unblock();
```
