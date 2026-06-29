---
title: "Interface: clientOptions"
---

# Interface: clientOptions

Defined in: [src/client/baseClient.ts:179](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/client/baseClient.ts#L179)

Represents the options for configuring the selfbot client.

## Properties

### fetchMembers?

> `optional` **fetchMembers?**: `boolean`

Defined in: [src/client/baseClient.ts:181](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/client/baseClient.ts#L181)

Whether to fetch all members of a server.

***

### ignoreEvents?

> `optional` **ignoreEvents?**: `string`[]

Defined in: [src/client/baseClient.ts:184](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/client/baseClient.ts#L184)

Events for the client to ignore.

***

### MessageCache?

> `optional` **MessageCache?**: `object`

Defined in: [src/client/baseClient.ts:198](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/client/baseClient.ts#L198)

#### maxSize?

> `optional` **maxSize?**: `number`

The maximum size of the cache.

***

### rest?

> `optional` **rest?**: `object`

Defined in: [src/client/baseClient.ts:187](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/client/baseClient.ts#L187)

Configuration for REST API requests.

#### instanceCDNURL?

> `optional` **instanceCDNURL?**: `string`

URL for Stoat CDN instance without trailing slash

#### instanceURL?

> `optional` **instanceURL?**: `string`

URL for Stoat API instance without trailing slash

#### retries?

> `optional` **retries?**: `number`

The number of retries for failed REST requests.

#### timeout?

> `optional` **timeout?**: `number`

The timeout for REST requests in milliseconds.

***

### ws?

> `optional` **ws?**: `object`

Defined in: [src/client/baseClient.ts:204](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/client/baseClient.ts#L204)

Configuration for WebSocket connections.

#### heartbeatInterval?

> `optional` **heartbeatInterval?**: `number`

The interval for sending heartbeats in milliseconds.

#### instanceURL?

> `optional` **instanceURL?**: `string`

URL for Stoat WebSocket instance without trailing slash

#### reconnect?

> `optional` **reconnect?**: `boolean`

Whether to automatically reconnect on disconnection.
