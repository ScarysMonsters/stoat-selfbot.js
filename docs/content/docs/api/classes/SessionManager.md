---
title: "Class: SessionManager"
---

# Class: SessionManager

Defined in: [src/managers/sessionManager.ts:36](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/sessionManager.ts#L36)

Manages the authenticated user's sessions.
Provides methods to list, edit, and delete sessions.

## Example

```typescript
// Fetch all sessions
const sessions = await client.sessions.fetchAll();
console.log(`You have ${sessions.size} active sessions`);

// Edit a session's friendly name
await client.sessions.edit(sessionId, { name: "My Laptop" });

// Delete (revoke) a session
await client.sessions.delete(sessionId);

// Logout (revoke current session)
await client.sessions.logout();
```

## Constructors

### Constructor

> **new SessionManager**(`client`): `SessionManager`

Defined in: [src/managers/sessionManager.ts:40](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/sessionManager.ts#L40)

#### Parameters

##### client

[`Client`](Client.md)

#### Returns

`SessionManager`

## Properties

### cache

> `readonly` **cache**: [`Collection`](Collection.md)\<`string`, [`SessionInfo`](../interfaces/SessionInfo.md)\>

Defined in: [src/managers/sessionManager.ts:38](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/sessionManager.ts#L38)

***

### client

> `readonly` **client**: [`Client`](Client.md)

Defined in: [src/managers/sessionManager.ts:37](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/sessionManager.ts#L37)

## Methods

### delete()

> **delete**(`sessionId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/sessionManager.ts:83](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/sessionManager.ts#L83)

Deletes (revokes) a session by ID.
Removes the session from the cache.

#### Parameters

##### sessionId

`string`

The ID of the session to delete.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### edit()

> **edit**(`sessionId`, `options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/sessionManager.ts:68](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/sessionManager.ts#L68)

Edits a session's properties (e.g. friendly name).
Updates the cache if the session is present.

#### Parameters

##### sessionId

`string`

The ID of the session to edit.

##### options

The properties to update.

###### name?

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### fetchAll()

> **fetchAll**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Collection`](Collection.md)\<`string`, [`SessionInfo`](../interfaces/SessionInfo.md)\>\>

Defined in: [src/managers/sessionManager.ts:50](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/sessionManager.ts#L50)

Fetches all sessions for the authenticated user.
Caches the results.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`Collection`](Collection.md)\<`string`, [`SessionInfo`](../interfaces/SessionInfo.md)\>\>

A collection of session info keyed by session ID.

***

### logout()

> **logout**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/sessionManager.ts:94](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/managers/sessionManager.ts#L94)

Logs out the current session.
This effectively revokes the session token used by this client.

After calling this, the client will no longer be able to make API requests.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>
