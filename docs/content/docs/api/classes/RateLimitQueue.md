---
title: "Class: RateLimitQueue"
---

# Class: RateLimitQueue

Defined in: [src/rest/restUtils/rateLimitQueue.ts:17](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/rest/restUtils/rateLimitQueue.ts#L17)

## Constructors

### Constructor

> **new RateLimitQueue**(): `RateLimitQueue`

#### Returns

`RateLimitQueue`

## Methods

### request()

> **request**\<`T`\>(`config`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`AxiosResponse`\<`T`, `any`, \{ \}\>\>

Defined in: [src/rest/restUtils/rateLimitQueue.ts:21](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/2686c14076438dd3965dd61adb0b3b812660218e/src/rest/restUtils/rateLimitQueue.ts#L21)

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### config

`AxiosRequestConfig`\<`any`\> & `object`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`AxiosResponse`\<`T`, `any`, \{ \}\>\>
