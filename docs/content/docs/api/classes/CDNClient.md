---
title: "Class: CDNClient"
---

# Class: CDNClient

Defined in: [src/rest/CDNClient.ts:7](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/rest/CDNClient.ts#L7)

## Constructors

### Constructor

> **new CDNClient**(`client`): `CDNClient`

Defined in: [src/rest/CDNClient.ts:9](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/rest/CDNClient.ts#L9)

#### Parameters

##### client

[`BaseClient`](BaseClient.md)

#### Returns

`CDNClient`

## Methods

### post()

> **post**\<`T`\>(`url`, `data`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>

Defined in: [src/rest/CDNClient.ts:107](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/rest/CDNClient.ts#L107)

POST request.

#### Type Parameters

##### T

`T`

#### Parameters

##### url

`string`

The URL for the request.

##### data

`FormData`

The request body.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>

The API response.
