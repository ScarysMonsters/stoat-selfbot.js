---
title: "Class: MessageEmbed"
---

# Class: MessageEmbed

Defined in: [src/struct/messageEmbed.ts:17](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/messageEmbed.ts#L17)

Represents a message embed, which can include rich content such as titles, descriptions, URLs, and media.

## Constructors

### Constructor

> **new MessageEmbed**(): `MessageEmbed`

#### Returns

`MessageEmbed`

## Methods

### setColor()

> **setColor**(`color`): `this`

Defined in: [src/struct/messageEmbed.ts:53](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/messageEmbed.ts#L53)

Sets the color of the embed.

#### Parameters

##### color

`string`

The color to set (e.g., a hex code).

#### Returns

`this`

The updated `MessageEmbed` instance.

***

### setDescription()

> **setDescription**(`description`): `this`

Defined in: [src/struct/messageEmbed.ts:64](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/messageEmbed.ts#L64)

Sets the description of the embed.

#### Parameters

##### description

`string`

The description to set.

#### Returns

`this`

The updated `MessageEmbed` instance.

***

### setIcon()

> **setIcon**(`iconURL`): `this`

Defined in: [src/struct/messageEmbed.ts:42](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/messageEmbed.ts#L42)

Sets the icon URL of the embed.

#### Parameters

##### iconURL

`string`

The URL of the icon to set.

#### Returns

`this`

The updated `MessageEmbed` instance.

***

### setMedia()

> **setMedia**(`media`): `this`

Defined in: [src/struct/messageEmbed.ts:86](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/messageEmbed.ts#L86)

Sets the media (e.g., image or video) of the embed.

#### Parameters

##### media

`string` \| `Readable` \| `File`

The media URL, File or Stream to set.

#### Returns

`this`

The updated `MessageEmbed` instance.

***

### setTitle()

> **setTitle**(`title`): `this`

Defined in: [src/struct/messageEmbed.ts:31](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/messageEmbed.ts#L31)

Sets the title of the embed.

#### Parameters

##### title

`string`

The title to set.

#### Returns

`this`

The updated `MessageEmbed` instance.

***

### setURL()

> **setURL**(`url`): `this`

Defined in: [src/struct/messageEmbed.ts:75](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/messageEmbed.ts#L75)

Sets the URL of the embed.

#### Parameters

##### url

`string`

The URL to set.

#### Returns

`this`

The updated `MessageEmbed` instance.

***

### toJSON()

> **toJSON**(): `object`

Defined in: [src/struct/messageEmbed.ts:141](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/messageEmbed.ts#L141)

Converts the embed to a JSON object that can be sent to the API.

#### Returns

`object`

The JSON representation of the embed.

##### colour?

> `optional` **colour?**: `string` \| `null`

##### description?

> `optional` **description?**: `string` \| `null`

##### icon\_url?

> `optional` **icon\_url?**: `string` \| `null`

##### media?

> `optional` **media?**: `string` \| `null`

##### title?

> `optional` **title?**: `string` \| `null`

##### url?

> `optional` **url?**: `string` \| `null`

***

### toJSONWithMedia()

> **toJSONWithMedia**(`client`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `colour?`: `string` \| `null`; `description?`: `string` \| `null`; `icon_url?`: `string` \| `null`; `media?`: `string` \| `null`; `title?`: `string` \| `null`; `url?`: `string` \| `null`; \}\>

Defined in: [src/struct/messageEmbed.ts:97](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/struct/messageEmbed.ts#L97)

#### Parameters

##### client

[`Client`](Client.md)

The client instance used to send the embed.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ `colour?`: `string` \| `null`; `description?`: `string` \| `null`; `icon_url?`: `string` \| `null`; `media?`: `string` \| `null`; `title?`: `string` \| `null`; `url?`: `string` \| `null`; \}\>

SendableEmbed
Converts the embed to a JSON object that can be sent to the API, including media handling.
