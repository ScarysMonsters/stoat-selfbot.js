---
title: "Class: AccountManager"
---

# Class: AccountManager

Defined in: [src/managers/accountManager.ts:23](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/accountManager.ts#L23)

Manages the authenticated user's account settings.
Provides methods for email changes, password changes, account deletion,
disabling, password resets, and email verification.

## Example

```typescript
// Change email
await client.account.changeEmail("new@example.com", "currentPassword");

// Change password
await client.account.changePassword("oldPassword", "newPassword");

// Resend verification email
await client.account.resendVerification();

// Verify account with code
await client.account.verify("verification-code");
```

## Constructors

### Constructor

> **new AccountManager**(`client`): `AccountManager`

Defined in: [src/managers/accountManager.ts:26](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/accountManager.ts#L26)

#### Parameters

##### client

[`Client`](Client.md)

#### Returns

`AccountManager`

## Properties

### client

> `readonly` **client**: [`Client`](Client.md)

Defined in: [src/managers/accountManager.ts:24](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/accountManager.ts#L24)

## Methods

### changeEmail()

> **changeEmail**(`newEmail`, `currentPassword`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/accountManager.ts:36](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/accountManager.ts#L36)

Changes the authenticated user's email address.

#### Parameters

##### newEmail

`string`

The new email address.

##### currentPassword

`string`

The current password for confirmation.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### changePassword()

> **changePassword**(`currentPassword`, `newPassword`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/accountManager.ts:49](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/accountManager.ts#L49)

Changes the authenticated user's password.

#### Parameters

##### currentPassword

`string`

The current password.

##### newPassword

`string`

The new password to set.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### delete()

> **delete**(`password`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/accountManager.ts:62](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/accountManager.ts#L62)

Deletes the authenticated user's account.
This action is irreversible.

#### Parameters

##### password

`string`

The current password for confirmation.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### disable()

> **disable**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/accountManager.ts:72](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/accountManager.ts#L72)

Disables the authenticated user's account.
The account can be re-enabled later.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### resendVerification()

> **resendVerification**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/accountManager.ts:90](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/accountManager.ts#L90)

Resends the account verification email.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### resetPassword()

> **resetPassword**(`email`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/accountManager.ts:81](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/accountManager.ts#L81)

Requests a password reset email.

#### Parameters

##### email

`string`

The email address associated with the account.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### verify()

> **verify**(`code`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/accountManager.ts:99](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/1b9ee56ae2d958141519151132c15064f87b2571/src/managers/accountManager.ts#L99)

Verifies the account using a verification code.

#### Parameters

##### code

`string`

The verification code received via email.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>
