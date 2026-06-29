---
title: "Class: MFAManager"
---

# Class: MFAManager

Defined in: [src/managers/mfaManager.ts:39](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/mfaManager.ts#L39)

Manages multi-factor authentication (MFA) for the authenticated user.
Provides methods to check MFA status, manage TOTP, and handle recovery codes.

## Example

```typescript
// Check MFA status
const status = await client.mfa.getStatus();

// Get available MFA methods
const methods = await client.mfa.getMethods();

// Enable TOTP
await client.mfa.enableTOTP("secret-key", "123456");

// Get recovery codes
const codes = await client.mfa.getRecoveryCodes();
console.log("Recovery codes:", codes);
```

## Constructors

### Constructor

> **new MFAManager**(`client`): `MFAManager`

Defined in: [src/managers/mfaManager.ts:42](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/mfaManager.ts#L42)

#### Parameters

##### client

[`Client`](Client.md)

#### Returns

`MFAManager`

## Properties

### client

> `readonly` **client**: [`Client`](Client.md)

Defined in: [src/managers/mfaManager.ts:40](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/mfaManager.ts#L40)

## Methods

### disableTOTP()

> **disableTOTP**(`code`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/mfaManager.ts:96](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/mfaManager.ts#L96)

Disables TOTP-based MFA for the authenticated user.

#### Parameters

##### code

`string`

The current TOTP code to confirm the action.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### enableTOTP()

> **enableTOTP**(`secret`, `code`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [src/managers/mfaManager.ts:84](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/mfaManager.ts#L84)

Enables TOTP-based MFA for the authenticated user.

#### Parameters

##### secret

`string`

The TOTP secret key.

##### code

`string`

The current TOTP code to verify.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### generateTicket()

> **generateTicket**(`code`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`MFATicket`](../interfaces/MFATicket.md)\>

Defined in: [src/managers/mfaManager.ts:71](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/mfaManager.ts#L71)

Generates an MFA ticket using a TOTP code.

#### Parameters

##### code

`string`

The TOTP code from the authenticator app.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`MFATicket`](../interfaces/MFATicket.md)\>

The generated MFA ticket.

***

### getMethods()

> **getMethods**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`MFAMethod`](../interfaces/MFAMethod.md)[]\>

Defined in: [src/managers/mfaManager.ts:60](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/mfaManager.ts#L60)

Gets the available MFA methods for the authenticated user.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`MFAMethod`](../interfaces/MFAMethod.md)[]\>

An array of MFA methods.

***

### getRecoveryCodes()

> **getRecoveryCodes**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

Defined in: [src/managers/mfaManager.ts:107](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/mfaManager.ts#L107)

Gets the recovery codes for the authenticated user's MFA.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`string`[]\>

An array of recovery code strings.

***

### getStatus()

> **getStatus**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`\>

Defined in: [src/managers/mfaManager.ts:51](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/mfaManager.ts#L51)

Gets the current MFA status for the authenticated user.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`any`\>

The MFA status data.
