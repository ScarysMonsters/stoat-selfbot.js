---
title: "Class: VoiceClient"
---

# Class: VoiceClient

Defined in: [src/client/voiceClient.ts:9](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/client/voiceClient.ts#L9)

VoiceClient acts as a factory for creating AudioPlayer instances.
Users manage the AudioPlayer instances themselves rather than the VoiceClient managing them internally.
This design gives users full control over their voice connections and audio playback.

## Constructors

### Constructor

> **new VoiceClient**(`client`): `VoiceClient`

Defined in: [src/client/voiceClient.ts:14](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/client/voiceClient.ts#L14)

#### Parameters

##### client

[`Client`](Client.md)

#### Returns

`VoiceClient`

## Methods

### connectToChannel()

> **connectToChannel**(`channelId`, `serverId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AudioPlayer`](AudioPlayer.md)\>

Defined in: [src/client/voiceClient.ts:69](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/client/voiceClient.ts#L69)

Creates a new AudioPlayer instance and immediately connects it to the voice channel.
This is a convenience method that combines createPlayer() and connect().

#### Parameters

##### channelId

`string`

The ID of the voice channel to connect to

##### serverId

`string`

The ID of the server containing the voice channel

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`AudioPlayer`](AudioPlayer.md)\>

A new connected AudioPlayer instance

#### Example

```typescript
// Create and connect in one step
const player = await client.voice.connectToChannel('voice-channel-id', 'server-id');

// Player is already connected and ready to use
await player.playFromUrl('https://example.com/music.mp3');
```

***

### createPlayer()

> **createPlayer**(`channelId`, `serverId`): [`AudioPlayer`](AudioPlayer.md)

Defined in: [src/client/voiceClient.ts:48](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/client/voiceClient.ts#L48)

Creates a new AudioPlayer instance for the specified voice channel.

#### Parameters

##### channelId

`string`

The ID of the voice channel to connect to

##### serverId

`string`

The ID of the server containing the voice channel

#### Returns

[`AudioPlayer`](AudioPlayer.md)

A new AudioPlayer instance that the user can manage

#### Example

```typescript
// Create a player for a specific voice channel
const player = client.voice.createPlayer('voice-channel-id', 'server-id');

// Set up event listeners
player.on('connected', () => {
  console.log('Connected to voice channel!');
});

player.on('audioStart', (source, type) => {
  console.log(`Started playing ${type}: ${source}`);
});

// Connect and play audio
await player.connect();
await player.playFromFile('./music.mp3');

// The user is responsible for managing the player lifecycle
await player.disconnect();
```

***

### disconnectFromChannel()

> **disconnectFromChannel**(`serverId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/client/voiceClient.ts:85](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/client/voiceClient.ts#L85)

Disconnects the AudioPlayer from the specified server.

#### Parameters

##### serverId

`string`

The ID of the server to disconnect from

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### stopPlayerInChannel()

> **stopPlayerInChannel**(`serverId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/client/voiceClient.ts:98](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/client/voiceClient.ts#L98)

Stops the AudioPlayer in the specified server.

#### Parameters

##### serverId

`string`

The ID of the server whose player should be stopped

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>
