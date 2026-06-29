---
title: "Class: CDNClient"
---

# Class: CDNClient

Defined in: [src/rest/CDNClient.ts:7](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/rest/CDNClient.ts#L7)

## Constructors

### Constructor

> **new CDNClient**(`client`): `CDNClient`

Defined in: [src/rest/CDNClient.ts:9](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/rest/CDNClient.ts#L9)

#### Parameters

##### client

[`BaseClient`](BaseClient.md)

#### Returns

`CDNClient`

## Methods

### post()

> **post**\<`T`\>(`url`, `data`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>

Defined in: [src/rest/CDNClient.ts:107](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/rest/CDNClient.ts#L107)

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
