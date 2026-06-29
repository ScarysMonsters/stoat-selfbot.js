---
title: "Class: RestClient"
---

# Class: RestClient

Defined in: [src/rest/restClient.ts:25](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/rest/restClient.ts#L25)

## Constructors

### Constructor

> **new RestClient**(`client`): `RestClient`

Defined in: [src/rest/restClient.ts:27](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/rest/restClient.ts#L27)

#### Parameters

##### client

[`BaseClient`](BaseClient.md)

#### Returns

`RestClient`

## Methods

### delete()

> **delete**\<`T`\>(`url`, `body?`, `query?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>

Defined in: [src/rest/restClient.ts:221](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/rest/restClient.ts#L221)

DELETE request.

#### Type Parameters

##### T

`T`

#### Parameters

##### url

`string`

The URL path for the request.

##### body?

`any`

The request body (optional).

##### query?

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string` \| `number`\>

Query parameters (if applicable).

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>

The API response.

***

### get()

> **get**\<`T`\>(`url`, `query?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>

Defined in: [src/rest/restClient.ts:162](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/rest/restClient.ts#L162)

GET request.

#### Type Parameters

##### T

`T`

#### Parameters

##### url

`string`

The URL path for the request.

##### query?

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string` \| `number`\>

Query parameters (if applicable).

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>

The API response.

***

### getConfig()

> **getConfig**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`ApiDiscoveryResponse`\>

Defined in: [src/rest/restClient.ts:103](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/rest/restClient.ts#L103)

Fetches the API configuration (discovery endpoint).
Sets the CDN URL, WebSocket URL, and voice options on the client.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`ApiDiscoveryResponse`\>

#### Throws

If the configuration cannot be fetched.

***

### patch()

> **patch**\<`T`\>(`url`, `body?`, `query?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>

Defined in: [src/rest/restClient.ts:191](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/rest/restClient.ts#L191)

PATCH request.

#### Type Parameters

##### T

`T`

#### Parameters

##### url

`string`

The URL path for the request.

##### body?

`any`

The request body.

##### query?

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string` \| `number`\>

Query parameters (if applicable).

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>

The API response.

***

### post()

> **post**\<`T`\>(`url`, `body?`, `query?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>

Defined in: [src/rest/restClient.ts:176](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/rest/restClient.ts#L176)

POST request.

#### Type Parameters

##### T

`T`

#### Parameters

##### url

`string`

The URL path for the request.

##### body?

`any`

The request body.

##### query?

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string` \| `number`\>

Query parameters (if applicable).

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>

The API response.

***

### put()

> **put**\<`T`\>(`url`, `body?`, `query?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>

Defined in: [src/rest/restClient.ts:206](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/rest/restClient.ts#L206)

PUT request.

#### Type Parameters

##### T

`T`

#### Parameters

##### url

`string`

The URL path for the request.

##### body?

`any`

The request body.

##### query?

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string` \| `number`\>

Query parameters (if applicable).

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`T`\>

The API response.
