---
title: "Class: WebSocketClient"
---

# Class: WebSocketClient

Defined in: [src/client/webSocket.ts:9](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/client/webSocket.ts#L9)

Represents the WebSocket client used for real-time communication with the Stoat API.

## Constructors

### Constructor

> **new WebSocketClient**(`client`): `WebSocketClient`

Defined in: [src/client/webSocket.ts:45](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/client/webSocket.ts#L45)

Creates a new WebSocketClient instance.

#### Parameters

##### client

[`Client`](Client.md)

The client instance.

#### Returns

`WebSocketClient`

## Properties

### connected

> **connected**: `boolean` = `false`

Defined in: [src/client/webSocket.ts:23](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/client/webSocket.ts#L23)

Whether the WebSocket client is connected.

***

### heartbeatInterval?

> `optional` **heartbeatInterval?**: `Timeout`

Defined in: [src/client/webSocket.ts:11](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/client/webSocket.ts#L11)

The interval for sending heartbeats, in milliseconds.

***

### lastPingTimestamp?

> `optional` **lastPingTimestamp?**: `number`

Defined in: [src/client/webSocket.ts:14](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/client/webSocket.ts#L14)

The timestamp of the last ping sent, in milliseconds.

***

### lastPongAck

> **lastPongAck**: `boolean` = `false`

Defined in: [src/client/webSocket.ts:17](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/client/webSocket.ts#L17)

Whether the last pong acknowledgment was received.

***

### ready

> **ready**: `boolean` = `false`

Defined in: [src/client/webSocket.ts:29](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/client/webSocket.ts#L29)

Whether the WebSocket client is ready.

***

### reconnecting

> **reconnecting**: [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`unknown`\> \| `null` = `null`

Defined in: [src/client/webSocket.ts:26](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/client/webSocket.ts#L26)

A promise representing the reconnecting process, or `null` if not reconnecting.

***

### retryCount

> **retryCount**: `number` = `0`

Defined in: [src/client/webSocket.ts:32](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/client/webSocket.ts#L32)

The number of reconnection attempts made.

***

### socket?

> `optional` **socket?**: [`WebSocket`](https://developer.mozilla.org/docs/Web/API/WebSocket) \| `null`

Defined in: [src/client/webSocket.ts:20](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/client/webSocket.ts#L20)

The WebSocket connection instance.

## Accessors

### ping

#### Get Signature

> **get** **ping**(): `number`

Defined in: [src/client/webSocket.ts:95](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/client/webSocket.ts#L95)

Gets the current ping (latency) of the WebSocket connection.

##### Returns

`number`

The ping in milliseconds, or 0 if not connected.

## Methods

### beginTyping()

> **beginTyping**(`channelId`): `void`

Defined in: [src/client/webSocket.ts:412](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/client/webSocket.ts#L412)

Sends a BeginTyping event to indicate the user is typing in a channel.

#### Parameters

##### channelId

`string`

The channel ID.

#### Returns

`void`

***

### connect()

> **connect**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`WebSocketClient`\>

Defined in: [src/client/webSocket.ts:314](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/client/webSocket.ts#L314)

Connects to the WebSocket server.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`WebSocketClient`\>

A promise that resolves when the connection is established and authenticated.

***

### destroy()

> **destroy**(`isUserInitiated?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/client/webSocket.ts:379](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/client/webSocket.ts#L379)

Destroys the WebSocket connection and optionally triggers reconnect.

#### Parameters

##### isUserInitiated?

`boolean`

Whether the disconnect was initiated by the user.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the connection is destroyed.

***

### endTyping()

> **endTyping**(`channelId`): `void`

Defined in: [src/client/webSocket.ts:420](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/client/webSocket.ts#L420)

Sends an EndTyping event to indicate the user stopped typing in a channel.

#### Parameters

##### channelId

`string`

The channel ID.

#### Returns

`void`

***

### send()

> **send**(`data`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/client/webSocket.ts:64](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/client/webSocket.ts#L64)

Sends data through the WebSocket connection.

#### Parameters

##### data

`unknown`

The data to send.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the data is sent.

#### Throws

Throws an error if the WebSocket is not open.

***

### sendHeartbeat()

> **sendHeartbeat**(): `void`

Defined in: [src/client/webSocket.ts:119](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/client/webSocket.ts#L119)

Sends a heartbeat to the server to keep the connection alive.

#### Returns

`void`

***

### setHeartbeatTimer()

> **setHeartbeatTimer**(`time`): `void`

Defined in: [src/client/webSocket.ts:105](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/client/webSocket.ts#L105)

Sets the heartbeat interval for the WebSocket connection.

#### Parameters

##### time

`number`

The interval time in milliseconds. Use `-1` to clear the interval.

#### Returns

`void`

***

### subscribe()

> **subscribe**(`serverId`): `void`

Defined in: [src/client/webSocket.ts:429](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/client/webSocket.ts#L429)

Subscribes to UserUpdate events for a server.
Required to receive user updates in servers.

#### Parameters

##### serverId

`string`

The server ID to subscribe to.

#### Returns

`void`
