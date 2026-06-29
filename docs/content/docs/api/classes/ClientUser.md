---
title: "Class: ClientUser"
---

# Class: ClientUser

Defined in: [src/struct/clientUser.ts:15](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/clientUser.ts#L15)

Represents the client user, which is the authenticated user.
Extends User with selfbot-specific methods for managing profile and status.

## Extends

- [`User`](User.md)

## Constructors

### Constructor

> **new ClientUser**(`client`, `data`): `ClientUser`

Defined in: [src/struct/clientUser.ts:28](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/clientUser.ts#L28)

#### Parameters

##### client

[`Client`](Client.md)

##### data

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

`ClientUser`

#### Overrides

[`User`](User.md).[`constructor`](User.md#constructor)

## Properties

### avatar

> **avatar**: [`Attachment`](Attachment.md) \| `null` = `null`

Defined in: [src/struct/user.ts:29](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L29)

The avatar of the user, or `null` if none is set.

#### Inherited from

[`User`](User.md).[`avatar`](User.md#avatar)

***

### badges

> **badges**: [`Badges`](Badges.md)

Defined in: [src/struct/user.ts:38](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L38)

The badges associated with the user.

#### Inherited from

[`User`](User.md).[`badges`](User.md#badges)

***

### bot

> **bot**: `boolean` = `false`

Defined in: [src/struct/user.ts:41](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L41)

Whether the user is a bot.

#### Inherited from

[`User`](User.md).[`bot`](User.md#bot)

***

### client

> `readonly` **client**: [`Client`](Client.md)

Defined in: [src/struct/base.ts:21](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/base.ts#L21)

The client instance.

#### Inherited from

[`User`](User.md).[`client`](User.md#client)

***

### discriminator

> **discriminator**: `string` = `"0000"`

Defined in: [src/struct/user.ts:23](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L23)

The discriminator of the user (4 digits).

#### Inherited from

[`User`](User.md).[`discriminator`](User.md#discriminator)

***

### displayName

> **displayName**: `string` \| `null` = `null`

Defined in: [src/struct/user.ts:26](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L26)

The display name of the user, or `null` if none is set.

#### Inherited from

[`User`](User.md).[`displayName`](User.md#displayname)

***

### flags

> **flags**: `number` = `0`

Defined in: [src/struct/user.ts:50](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L50)

The user's flags.

#### Inherited from

[`User`](User.md).[`flags`](User.md#flags)

***

### id

> **id**: `string`

Defined in: [src/struct/base.ts:14](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/base.ts#L14)

The unique identifier for the object.

#### Inherited from

[`User`](User.md).[`id`](User.md#id)

***

### notes

> **notes**: [`NotesChannel`](NotesChannel.md) \| `null` = `null`

Defined in: [src/struct/clientUser.ts:17](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/clientUser.ts#L17)

The notes channel associated with the client user, if any.

***

### online

> **online**: `boolean` = `false`

Defined in: [src/struct/user.ts:44](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L44)

Whether the user is currently online.

#### Inherited from

[`User`](User.md).[`online`](User.md#online)

***

### owner

> **owner**: `string` \| `null` = `null`

Defined in: [src/struct/clientUser.ts:20](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/clientUser.ts#L20)

The bot owner ID, if this account is a bot.

***

### presence

> **presence**: [`Presence`](Presence.md)

Defined in: [src/struct/user.ts:35](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L35)

The presence status of the user.

#### Inherited from

[`User`](User.md).[`presence`](User.md#presence)

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

#### Inherited from

[`User`](User.md).[`profile`](User.md#profile)

***

### profileBackground

> **profileBackground**: `string` \| `null` = `null`

Defined in: [src/struct/clientUser.ts:26](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/clientUser.ts#L26)

The user's profile background, if any.

***

### profileContent

> **profileContent**: `string` \| `null` = `null`

Defined in: [src/struct/clientUser.ts:23](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/clientUser.ts#L23)

The user's profile content, if any.

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

#### Inherited from

[`User`](User.md).[`relations`](User.md#relations)

***

### username

> **username**: `string`

Defined in: [src/struct/user.ts:20](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L20)

The username of the user.

#### Inherited from

[`User`](User.md).[`username`](User.md#username)

## Accessors

### createdAt

#### Get Signature

> **get** **createdAt**(): [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

Defined in: [src/struct/user.ts:144](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L144)

Gets the creation date of the user.

##### Returns

[`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

The date when the user was created.

#### Inherited from

[`User`](User.md).[`createdAt`](User.md#createdat)

***

### createdTimestamp

#### Get Signature

> **get** **createdTimestamp**(): `number`

Defined in: [src/struct/user.ts:160](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L160)

Gets the creation timestamp of the user in milliseconds.

##### Returns

`number`

The timestamp of when the user was created.

#### Inherited from

[`User`](User.md).[`createdTimestamp`](User.md#createdtimestamp)

***

### isOwner

#### Get Signature

> **get** **isOwner**(): `boolean`

Defined in: [src/struct/user.ts:151](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L151)

checks if the user is the owner of the bot.

##### Returns

`boolean`

#### Inherited from

[`User`](User.md).[`isOwner`](User.md#isowner)

***

### tag

#### Get Signature

> **get** **tag**(): `string`

Defined in: [src/struct/user.ts:135](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L135)

Returns the tag of the user (username#discriminator).

##### Returns

`string`

The user's tag.

#### Inherited from

[`User`](User.md).[`tag`](User.md#tag)

## Methods

### \_clone()

> **\_clone**(): `this`

Defined in: [src/struct/base.ts:84](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/base.ts#L84)

Creates a deep clone of the object.

#### Returns

`this`

A clone of the object.

#### Inherited from

[`User`](User.md).[`_clone`](User.md#_clone)

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

[`User`](User.md).[`_update`](User.md#_update)

***

### avatarURL()

> **avatarURL**(): `string` \| `undefined`

Defined in: [src/struct/user.ts:207](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L207)

#### Returns

`string` \| `undefined`

#### Inherited from

[`User`](User.md).[`avatarURL`](User.md#avatarurl)

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

#### Inherited from

[`User`](User.md).[`block`](User.md#block)

***

### changeEmail()

> **changeEmail**(`newEmail`, `currentPassword`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/clientUser.ts:161](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/clientUser.ts#L161)

Changes the client user's email.

#### Parameters

##### newEmail

`string`

The new email address.

##### currentPassword

`string`

The current password for verification.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### changePassword()

> **changePassword**(`currentPassword`, `newPassword`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/clientUser.ts:145](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/clientUser.ts#L145)

Changes the client user's password.

#### Parameters

##### currentPassword

`string`

The current password.

##### newPassword

`string`

The new password.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

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

#### Inherited from

[`User`](User.md).[`createDM`](User.md#createdm)

***

### displayAvatarURL()

> **displayAvatarURL**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

Defined in: [src/struct/user.ts:212](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L212)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

#### Inherited from

[`User`](User.md).[`displayAvatarURL`](User.md#displayavatarurl)

***

### editProfile()

> **editProfile**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/clientUser.ts:131](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/clientUser.ts#L131)

Edits the client user's profile.

#### Parameters

##### options

The profile fields to edit.

###### avatar?

`string` \| `null`

**Description**

Attachment Id for avatar

###### badges?

`number` \| `null`

Format: int32

**Description**

Bitfield of user badges

###### display_name?

`string` \| `null`

**Description**

New display name

###### flags?

`number` \| `null`

Format: int32

**Description**

Enum of user flags

###### profile?

\{ `background?`: `string` \| `null`; `content?`: `string` \| `null`; \} \| `null`

**Description**

New user profile data

This is applied as a partial.

###### remove?

(`"Avatar"` \| `"StatusText"` \| `"StatusPresence"` \| `"ProfileContent"` \| `"ProfileBackground"` \| `"DisplayName"` \| `"Internal"`)[]

**Description**

Fields to remove from user object

**Default**

```ts
[]
```

###### status?

\{ `presence?`: `"Online"` \| `"Idle"` \| `"Focus"` \| `"Busy"` \| `"Invisible"` \| `null`; `text?`: `string` \| `null`; \} \| `null`

**Description**

New user status

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the profile is updated.

#### Example

```typescript
await clientUser.editProfile({
  profile: { content: "Hello, I'm using stoat-selfbot.js!" },
});
```

***

### equals()

> **equals**(`obj?`): `boolean`

Defined in: [src/struct/base.ts:29](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/base.ts#L29)

Compares this object with another to determine if they are equal.

#### Parameters

##### obj?

`ClientUser` \| `null`

The object to compare with.

#### Returns

`boolean`

`true` if the objects are equal, otherwise `false`.

#### Inherited from

[`User`](User.md).[`equals`](User.md#equals)

***

### fetch()

> **fetch**(`force?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`User`](User.md)\>

Defined in: [src/struct/user.ts:262](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L262)

Fetches the latest data for the user from the API.

#### Parameters

##### force?

`boolean` = `false`

Whether to force a fetch even if the user is cached.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`User`](User.md)\>

A promise that resolves with the updated user instance.

#### Inherited from

[`User`](User.md).[`fetch`](User.md#fetch)

***

### fetchDefaultAvatar()

> **fetchDefaultAvatar**(): `string`

Defined in: [src/struct/user.ts:221](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L221)

Returns the default avatar URL for this user.

#### Returns

`string`

The default avatar URL.

#### Inherited from

[`User`](User.md).[`fetchDefaultAvatar`](User.md#fetchdefaultavatar)

***

### fetchFlags()

> **fetchFlags**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`number`\>

Defined in: [src/struct/clientUser.ts:228](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/clientUser.ts#L228)

Fetches the client user's flags.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`number`\>

The flags value.

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

#### Inherited from

[`User`](User.md).[`fetchMutual`](User.md#fetchmutual)

***

### fetchProfile()

> **fetchProfile**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `background?`: \{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`; `content?`: `string` \| `null`; \}\>

Defined in: [src/struct/clientUser.ts:178](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/clientUser.ts#L178)

Fetches the client user's profile.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `background?`: \{ `_id`: `string`; `content_type`: `string`; `deleted?`: `boolean` \| `null`; `filename`: `string`; `message_id?`: `string` \| `null`; `metadata`: \{ `type`: `"File"`; \} \| \{ `type`: `"Text"`; \} \| \{ `height`: `number`; `type`: `"Image"`; `width`: `number`; \} \| \{ `height`: `number`; `type`: `"Video"`; `width`: `number`; \} \| \{ `type`: `"Audio"`; \}; `object_id?`: `string` \| `null`; `reported?`: `boolean` \| `null`; `server_id?`: `string` \| `null`; `size`: `number`; `tag`: `string`; `user_id?`: `string` \| `null`; \} \| `null`; `content?`: `string` \| `null`; \}\>

A promise that resolves with the client user's profile.

#### Example

```typescript
const profile = await clientUser.fetchProfile();
```

#### Overrides

[`User`](User.md).[`fetchProfile`](User.md#fetchprofile)

***

### setAvatar()

> **setAvatar**(`avatar`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/clientUser.ts:214](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/clientUser.ts#L214)

Sets the avatar of the client user.

#### Parameters

##### avatar

`string` \| `null`

The avatar ID to set, or `null` to remove the avatar.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the avatar is updated.

#### Example

```typescript
await clientUser.setAvatar("avatar_id_here");
await clientUser.setAvatar(null); // Remove avatar
```

***

### setDisplayName()

> **setDisplayName**(`name`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/clientUser.ts:195](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/clientUser.ts#L195)

Sets the display name of the client user.

#### Parameters

##### name

`string`

The new display name.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the display name is updated.

#### Example

```typescript
await clientUser.setDisplayName("Cool Display Name");
```

***

### setStatus()

#### Call Signature

> **setStatus**(`text?`, `presence?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/clientUser.ts:101](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/clientUser.ts#L101)

Updates the status of the client user.

##### Parameters

###### text?

`string` \| `null`

The status text to set, or `null` to clear the status.

###### presence?

`"Online"` \| `"Idle"` \| `"Focus"` \| `"Busy"` \| `"Invisible"`

The presence status (e.g., Online, Idle, etc.).

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the status has been successfully updated.

##### Example

```typescript
await clientUser.setStatus("Available", "Online");
```

#### Call Signature

> **setStatus**(`presence?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/clientUser.ts:102](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/clientUser.ts#L102)

Updates the status of the client user.

##### Parameters

###### presence?

[`Status`](../enumerations/Status.md)

The presence status (e.g., Online, Idle, etc.).

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the status has been successfully updated.

##### Example

```typescript
await clientUser.setStatus("Available", "Online");
```

***

### setUsername()

> **setUsername**(`username`, `password?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/struct/clientUser.ts:77](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/clientUser.ts#L77)

Updates the username of the client user.

#### Parameters

##### username

`string`

The new username to set.

##### password?

`string`

The current password of the user (required for non-bot accounts).

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the username has been successfully updated.

#### Throws

Throws an error if the client user is a bot and a password is provided.

#### Example

```typescript
await clientUser.setUsername("NewUsername", "CurrentPassword");
```

***

### toString()

> **toString**(): `string`

Defined in: [src/struct/user.ts:271](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/struct/user.ts#L271)

Converts the user to a string representation.

#### Returns

`string`

A string representation of the user in the format `<@userId>`.

#### Inherited from

[`User`](User.md).[`toString`](User.md#tostring)

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

#### Inherited from

[`User`](User.md).[`unblock`](User.md#unblock)
