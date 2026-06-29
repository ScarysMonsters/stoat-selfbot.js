---
title: "Class: BotManager"
---

# Class: BotManager

Defined in: [src/managers/botManager.ts:38](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/botManager.ts#L38)

Manages bot accounts for the authenticated user.
Provides methods to create, fetch, edit, and delete bots.

## Example

```typescript
// Create a new bot
const bot = await client.bots.create("My Bot", { public: false });
console.log(`Created bot: ${bot.name} (${bot.id})`);

// Fetch all owned bots
const bots = await client.bots.fetchAll();
console.log(`You own ${bots.size} bots`);

// Edit a bot
await client.bots.edit(bot.id, { description: "A cool bot" });

// Delete a bot
await client.bots.delete(bot.id);
```

## Constructors

### Constructor

> **new BotManager**(`client`): `BotManager`

Defined in: [src/managers/botManager.ts:42](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/botManager.ts#L42)

#### Parameters

##### client

[`Client`](Client.md)

#### Returns

`BotManager`

## Properties

### cache

> `readonly` **cache**: [`Collection`](Collection.md)\<`string`, [`BotData`](../interfaces/BotData.md)\>

Defined in: [src/managers/botManager.ts:40](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/botManager.ts#L40)

***

### client

> `readonly` **client**: [`Client`](Client.md)

Defined in: [src/managers/botManager.ts:39](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/botManager.ts#L39)

## Methods

### create()

> **create**(`name`, `options?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`BotData`](../interfaces/BotData.md)\>

Defined in: [src/managers/botManager.ts:70](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/botManager.ts#L70)

Creates a new bot.

#### Parameters

##### name

`string`

The name of the bot.

##### options?

Additional options for bot creation.

###### public?

`boolean`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`BotData`](../interfaces/BotData.md)\>

The created bot data.

***

### delete()

> **delete**(`botId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/botManager.ts:126](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/botManager.ts#L126)

Deletes a bot.
Removes the bot from the cache.

#### Parameters

##### botId

`string`

The ID of the bot to delete.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### edit()

> **edit**(`botId`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/botManager.ts:100](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/botManager.ts#L100)

Edits a bot's properties.

#### Parameters

##### botId

`string`

The ID of the bot to edit.

##### options

The properties to update.

###### description?

`string`

###### interactions_url?

`string`

###### name?

`string`

###### public?

`boolean`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### fetch()

> **fetch**(`botId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`BotData`](../interfaces/BotData.md)\>

Defined in: [src/managers/botManager.ts:87](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/botManager.ts#L87)

Fetches a specific bot by ID.
Caches the result.

#### Parameters

##### botId

`string`

The ID of the bot to fetch.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`BotData`](../interfaces/BotData.md)\>

The bot data.

***

### fetchAll()

> **fetchAll**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Collection`](Collection.md)\<`string`, [`BotData`](../interfaces/BotData.md)\>\>

Defined in: [src/managers/botManager.ts:52](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/botManager.ts#L52)

Fetches all bots owned by the authenticated user.
Caches the results.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Collection`](Collection.md)\<`string`, [`BotData`](../interfaces/BotData.md)\>\>

A collection of bot data keyed by bot ID.

***

### fetchInvite()

> **fetchInvite**(`botId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

Defined in: [src/managers/botManager.ts:137](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/botManager.ts#L137)

Fetches the invite URL for a bot.

#### Parameters

##### botId

`string`

The ID of the bot.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`\>

The invite URL string.
