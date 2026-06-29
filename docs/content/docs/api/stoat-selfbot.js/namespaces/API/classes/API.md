---
title: "Class: API"
---

# Class: API

Defined in: node\_modules/.pnpm/revolt-api@0.8.9/node\_modules/revolt-api/lib/index.d.ts:62

API Client

## Constructors

### Constructor

> **new API**(`__namedParameters?`): `API`

Defined in: node\_modules/.pnpm/revolt-api@0.8.9/node\_modules/revolt-api/lib/index.d.ts:66

#### Parameters

##### \_\_namedParameters?

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`Options`](../interfaces/Options.md)\>

#### Returns

`API`

## Accessors

### auth

#### Get Signature

> **get** **auth**(): [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

Defined in: node\_modules/.pnpm/revolt-api@0.8.9/node\_modules/revolt-api/lib/index.d.ts:70

Generate authentication options.

##### Returns

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `string`\>

***

### config

#### Get Signature

> **get** **config**(): [`RequestOptions`](../interfaces/RequestOptions.md)

Defined in: node\_modules/.pnpm/revolt-api@0.8.9/node\_modules/revolt-api/lib/index.d.ts:74

Generate config to pass through to API.

##### Returns

[`RequestOptions`](../interfaces/RequestOptions.md)

## Methods

### delete()

#### Call Signature

> **delete**\<`Path`, `Route`\>(`path`, `params?`, `config?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Route`\[`"response"`\]\>

Defined in: node\_modules/.pnpm/revolt-api@0.8.9/node\_modules/revolt-api/lib/index.d.ts:160

Send HTTP DELETE request.

##### Type Parameters

###### Path

`Path` *extends* `"/auth/mfa/totp"` \| `` `/users/${string}/friend` `` \| `"-/users/{target}/friend"` \| `` `/users/${string}/block` `` \| `"-/users/{target}/block"` \| `` `/bots/${string}` `` \| `"-/bots/{target}"` \| `` `/channels/${string}` `` \| `"-/channels/{target}"` \| `` `/channels/${string}/messages/${string}/pin` `` \| `"-/channels/{target}/messages/{msg}/pin"` \| `` `/channels/${string}/messages/${string}` `` \| `"-/channels/{target}/messages/{msg}"` \| `` `/channels/${string}/messages/bulk` `` \| `"-/channels/{target}/messages/bulk"` \| `` `/channels/${string}/recipients/${string}` `` \| `"-/channels/{target}/recipients/{member}"` \| `` `/channels/${string}/messages/${string}/reactions/${string}` `` \| `"-/channels/{target}/messages/{msg}/reactions/{emoji}"` \| `` `/channels/${string}/messages/${string}/reactions` `` \| `"-/channels/{target}/messages/{msg}/reactions"` \| `` `/servers/${string}` `` \| `"-/servers/{target}"` \| `` `/servers/${string}/members/${string}` `` \| `"-/servers/{target}/members/{member}"` \| `` `/servers/${string}/bans/${string}` `` \| `"-/servers/{server}/bans/{target}"` \| `` `/servers/${string}/roles/${string}` `` \| `"-/servers/{target}/roles/{role_id}"` \| `` `/invites/${string}` `` \| `"-/invites/{target}"` \| `` `/custom/emoji/${string}` `` \| `"-/custom/emoji/{emoji_id}"` \| `` `/auth/session/${string}` `` \| `"-/auth/session/{id}"` \| `` `/webhooks/${string}/${string}` `` \| `"-/webhooks/{webhook_id}/{token}"` \| `` `/webhooks/${string}` `` \| `"-/webhooks/{webhook_id}"`

###### Route

`Route` *extends* `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` & `object`

##### Parameters

###### path

`Path`

Path

###### params?

`any`

Body or Query Parameters

###### config?

[`RequestOptions`](../interfaces/RequestOptions.md)

Axios configuration

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Route`\[`"response"`\]\>

Typed Response Data

#### Call Signature

> **delete**\<`Path`, `Route`\>(`path`, `params?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Route`\[`"response"`\]\>

Defined in: node\_modules/.pnpm/revolt-api@0.8.9/node\_modules/revolt-api/lib/index.d.ts:170

Send HTTP DELETE request.

##### Type Parameters

###### Path

`Path` *extends* `"/auth/mfa/totp"` \| `` `/users/${string}/friend` `` \| `"-/users/{target}/friend"` \| `` `/users/${string}/block` `` \| `"-/users/{target}/block"` \| `` `/bots/${string}` `` \| `"-/bots/{target}"` \| `` `/channels/${string}/messages/${string}/pin` `` \| `"-/channels/{target}/messages/{msg}/pin"` \| `` `/channels/${string}/messages/${string}` `` \| `"-/channels/{target}/messages/{msg}"` \| `` `/channels/${string}/recipients/${string}` `` \| `"-/channels/{target}/recipients/{member}"` \| `` `/channels/${string}/messages/${string}/reactions` `` \| `"-/channels/{target}/messages/{msg}/reactions"` \| `` `/servers/${string}/members/${string}` `` \| `"-/servers/{target}/members/{member}"` \| `` `/servers/${string}/bans/${string}` `` \| `"-/servers/{server}/bans/{target}"` \| `` `/servers/${string}/roles/${string}` `` \| `"-/servers/{target}/roles/{role_id}"` \| `` `/invites/${string}` `` \| `"-/invites/{target}"` \| `` `/custom/emoji/${string}` `` \| `"-/custom/emoji/{emoji_id}"` \| `` `/auth/session/${string}` `` \| `"-/auth/session/{id}"` \| `` `/webhooks/${string}/${string}` `` \| `"-/webhooks/{webhook_id}/{token}"` \| `` `/webhooks/${string}` `` \| `"-/webhooks/{webhook_id}"`

###### Route

`Route` *extends* `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` & `object`

##### Parameters

###### path

`Path`

Path

###### params?

`any`

Body or Query Parameters

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Route`\[`"response"`\]\>

Typed Response Data

***

### get()

#### Call Signature

> **get**\<`Path`, `Route`\>(`path`, `params`, `config?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Route`\[`"response"`\]\>

Defined in: node\_modules/.pnpm/revolt-api@0.8.9/node\_modules/revolt-api/lib/index.d.ts:94

Send HTTP GET request.

##### Type Parameters

###### Path

`Path` *extends* `"/"` \| `"/auth/session/all"` \| `"/auth/mfa/"` \| `"/auth/mfa/methods"` \| `"/sync/unreads"` \| `` `/users/${string}` `` \| `"-/users/{target}"` \| `` `/users/${string}/flags` `` \| `"-/users/{target}/flags"` \| `` `/users/${string}/default_avatar` `` \| `"-/users/{target}/default_avatar"` \| `` `/users/${string}/profile` `` \| `"-/users/{target}/profile"` \| `` `/users/${string}/dm` `` \| `"-/users/{target}/dm"` \| `` `/users/${string}/mutual` `` \| `"-/users/{target}/mutual"` \| `` `/bots/${string}/invite` `` \| `"-/bots/{target}/invite"` \| `` `/bots/${string}` `` \| `"-/bots/{bot}"` \| `` `/channels/${string}` `` \| `"-/channels/{target}"` \| `` `/channels/${string}/members` `` \| `"-/channels/{target}/members"` \| `` `/channels/${string}/messages` `` \| `"-/channels/{target}/messages"` \| `` `/channels/${string}/messages/${string}` `` \| `"-/channels/{target}/messages/{msg}"` \| `` `/channels/${string}/webhooks` `` \| `"-/channels/{channel_id}/webhooks"` \| `` `/servers/${string}` `` \| `"-/servers/{target}"` \| `` `/servers/${string}/members` `` \| `"-/servers/{target}/members"` \| `` `/servers/${string}/members/${string}` `` \| `"-/servers/{target}/members/{member}"` \| `` `/servers/${string}/members_experimental_query` `` \| `"-/servers/{target}/members_experimental_query"` \| `` `/servers/${string}/bans` `` \| `"-/servers/{target}/bans"` \| `` `/servers/${string}/invites` `` \| `"-/servers/{target}/invites"` \| `` `/servers/${string}/roles/${string}` `` \| `"-/servers/{target}/roles/{role_id}"` \| `` `/servers/${string}/emojis` `` \| `"-/servers/{target}/emojis"` \| `` `/invites/${string}` `` \| `"-/invites/{target}"` \| `` `/custom/emoji/${string}` `` \| `"-/custom/emoji/{emoji_id}"` \| `"/auth/account/"` \| `"/onboard/hello"` \| `` `/webhooks/${string}/${string}` `` \| `"-/webhooks/{webhook_id}/{token}"` \| `` `/webhooks/${string}` `` \| `"-/webhooks/{webhook_id}"`

###### Route

`Route` *extends* `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` & `object`

##### Parameters

###### path

`Path`

Path

###### params

`Route`\[`"params"`\]

Body or Query Parameters

###### config?

[`RequestOptions`](../interfaces/RequestOptions.md)

Axios configuration

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Route`\[`"response"`\]\>

Typed Response Data

#### Call Signature

> **get**\<`Path`, `Route`\>(`path`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Route`\[`"response"`\]\>

Defined in: node\_modules/.pnpm/revolt-api@0.8.9/node\_modules/revolt-api/lib/index.d.ts:103

Send HTTP GET request.

##### Type Parameters

###### Path

`Path` *extends* `"/"` \| `"/auth/session/all"` \| `"/auth/mfa/"` \| `"/auth/mfa/methods"` \| `"/sync/unreads"` \| `` `/users/${string}` `` \| `"-/users/{target}"` \| `` `/users/${string}/flags` `` \| `"-/users/{target}/flags"` \| `` `/users/${string}/default_avatar` `` \| `"-/users/{target}/default_avatar"` \| `` `/users/${string}/profile` `` \| `"-/users/{target}/profile"` \| `` `/users/${string}/dm` `` \| `"-/users/{target}/dm"` \| `` `/users/${string}/mutual` `` \| `"-/users/{target}/mutual"` \| `` `/bots/${string}/invite` `` \| `"-/bots/{target}/invite"` \| `` `/bots/${string}` `` \| `"-/bots/{bot}"` \| `` `/channels/${string}` `` \| `"-/channels/{target}"` \| `` `/channels/${string}/members` `` \| `"-/channels/{target}/members"` \| `` `/channels/${string}/messages/${string}` `` \| `"-/channels/{target}/messages/{msg}"` \| `` `/channels/${string}/webhooks` `` \| `"-/channels/{channel_id}/webhooks"` \| `` `/servers/${string}/bans` `` \| `"-/servers/{target}/bans"` \| `` `/servers/${string}/invites` `` \| `"-/servers/{target}/invites"` \| `` `/servers/${string}/roles/${string}` `` \| `"-/servers/{target}/roles/{role_id}"` \| `` `/servers/${string}/emojis` `` \| `"-/servers/{target}/emojis"` \| `` `/invites/${string}` `` \| `"-/invites/{target}"` \| `` `/custom/emoji/${string}` `` \| `"-/custom/emoji/{emoji_id}"` \| `"/auth/account/"` \| `"/onboard/hello"` \| `` `/webhooks/${string}/${string}` `` \| `"-/webhooks/{webhook_id}/{token}"` \| `` `/webhooks/${string}` `` \| `"-/webhooks/{webhook_id}"`

###### Route

`Route` *extends* `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` & `object`

##### Parameters

###### path

`Path`

Path

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Route`\[`"response"`\]\>

Typed Response Data

***

### patch()

#### Call Signature

> **patch**\<`Path`, `Route`\>(`path`, `params`, `config?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Route`\[`"response"`\]\>

Defined in: node\_modules/.pnpm/revolt-api@0.8.9/node\_modules/revolt-api/lib/index.d.ts:116

Send HTTP PATCH request.

##### Type Parameters

###### Path

`Path` *extends* `"/auth/account/change/password"` \| `"/auth/account/change/email"` \| `"/auth/account/reset_password"` \| `"/auth/mfa/recovery"` \| `` `/users/${string}` `` \| `"-/users/{target}"` \| `` `/bots/${string}` `` \| `"-/bots/{target}"` \| `` `/channels/${string}` `` \| `"-/channels/{target}"` \| `` `/channels/${string}/messages/${string}` `` \| `"-/channels/{target}/messages/{msg}"` \| `` `/servers/${string}` `` \| `"-/servers/{target}"` \| `` `/servers/${string}/members/${string}` `` \| `"-/servers/{server}/members/{member}"` \| `` `/servers/${string}/roles/${string}` `` \| `"-/servers/{target}/roles/{role_id}"` \| `` `/servers/${string}/roles/ranks` `` \| `"-/servers/{target}/roles/ranks"` \| `` `/auth/session/${string}` `` \| `"-/auth/session/{id}"` \| `` `/webhooks/${string}/${string}` `` \| `"-/webhooks/{webhook_id}/{token}"` \| `` `/webhooks/${string}` `` \| `"-/webhooks/{webhook_id}"`

###### Route

`Route` *extends* `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` & `object`

##### Parameters

###### path

`Path`

Path

###### params

`Route`\[`"params"`\]

Body or Query Parameters

###### config?

[`RequestOptions`](../interfaces/RequestOptions.md)

Axios configuration

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Route`\[`"response"`\]\>

Typed Response Data

#### Call Signature

> **patch**\<`Path`, `Route`\>(`path`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Route`\[`"response"`\]\>

Defined in: node\_modules/.pnpm/revolt-api@0.8.9/node\_modules/revolt-api/lib/index.d.ts:125

Send HTTP PATCH request.

##### Type Parameters

###### Path

`Path` *extends* `"/auth/mfa/recovery"`

###### Route

`Route` *extends* `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` & `object`

##### Parameters

###### path

`Path`

Path

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Route`\[`"response"`\]\>

Typed Response Data

***

### post()

#### Call Signature

> **post**\<`Path`, `Route`\>(`path`, `params`, `config?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Route`\[`"response"`\]\>

Defined in: node\_modules/.pnpm/revolt-api@0.8.9/node\_modules/revolt-api/lib/index.d.ts:183

Send HTTP POST request.

##### Type Parameters

###### Path

`Path` *extends* `"/users/friend"` \| `"/bots/create"` \| `"/auth/session/logout"` \| `"/auth/account/delete"` \| `"/auth/account/disable"` \| `"/auth/account/reset_password"` \| `"/auth/account/reverify"` \| `"/auth/mfa/totp"` \| `"/auth/mfa/recovery"` \| `"/servers/create"` \| `"/sync/settings/fetch"` \| `"/sync/settings/set"` \| `"/channels/create"` \| `` `/bots/${string}/invite` `` \| `"-/bots/{target}/invite"` \| `` `/channels/${string}/invites` `` \| `"-/channels/{target}/invites"` \| `` `/channels/${string}/messages` `` \| `"-/channels/{target}/messages"` \| `` `/channels/${string}/search` `` \| `"-/channels/{target}/search"` \| `` `/channels/${string}/messages/${string}/pin` `` \| `"-/channels/{target}/messages/{msg}/pin"` \| `` `/channels/${string}/join_call` `` \| `"-/channels/{target}/join_call"` \| `` `/channels/${string}/webhooks` `` \| `"-/channels/{target}/webhooks"` \| `` `/servers/${string}/channels` `` \| `"-/servers/{server}/channels"` \| `` `/servers/${string}/roles` `` \| `"-/servers/{target}/roles"` \| `` `/invites/${string}` `` \| `"-/invites/{target}"` \| `"/safety/report"` \| `"/auth/account/create"` \| `` `/auth/account/verify/${string}` `` \| `"-/auth/account/verify/{code}"` \| `"/auth/session/login"` \| `"/onboard/complete"` \| `"/policy/acknowledge"` \| `"/push/subscribe"` \| `"/push/unsubscribe"` \| `` `/webhooks/${string}/${string}` `` \| `"-/webhooks/{webhook_id}/{token}"` \| `` `/webhooks/${string}/${string}/github` `` \| `"-/webhooks/{webhook_id}/{token}/github"`

###### Route

`Route` *extends* `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `never` \| `object` & `object` \| `never` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` & `object`

##### Parameters

###### path

`Path`

Path

###### params

`Route`\[`"params"`\]

Body or Query Parameters

###### config?

[`RequestOptions`](../interfaces/RequestOptions.md)

Axios configuration

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Route`\[`"response"`\]\>

Typed Response Data

#### Call Signature

> **post**\<`Path`, `Route`\>(`path`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Route`\[`"response"`\]\>

Defined in: node\_modules/.pnpm/revolt-api@0.8.9/node\_modules/revolt-api/lib/index.d.ts:192

Send HTTP POST request.

##### Type Parameters

###### Path

`Path` *extends* `"/auth/session/logout"` \| `"/auth/account/delete"` \| `"/auth/account/disable"` \| `"/auth/mfa/totp"` \| `"/auth/mfa/recovery"` \| `` `/channels/${string}/invites` `` \| `"-/channels/{target}/invites"` \| `` `/channels/${string}/messages/${string}/pin` `` \| `"-/channels/{target}/messages/{msg}/pin"` \| `` `/channels/${string}/join_call` `` \| `"-/channels/{target}/join_call"` \| `` `/invites/${string}` `` \| `"-/invites/{target}"` \| `` `/auth/account/verify/${string}` `` \| `"-/auth/account/verify/{code}"` \| `"/policy/acknowledge"` \| `"/push/unsubscribe"` \| `` `/webhooks/${string}/${string}/github` `` \| `"-/webhooks/{webhook_id}/{token}/github"`

###### Route

`Route` *extends* `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `never` \| `object` & `object` \| `never` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` & `object`

##### Parameters

###### path

`Path`

Path

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Route`\[`"response"`\]\>

Typed Response Data

***

### put()

#### Call Signature

> **put**\<`Path`, `Route`\>(`path`, `params`, `config?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Route`\[`"response"`\]\>

Defined in: node\_modules/.pnpm/revolt-api@0.8.9/node\_modules/revolt-api/lib/index.d.ts:138

Send HTTP PUT request.

##### Type Parameters

###### Path

`Path` *extends* `"/auth/account/delete"` \| `"/auth/mfa/ticket"` \| `"/auth/mfa/totp"` \| `` `/users/${string}/friend` `` \| `"-/users/{target}/friend"` \| `` `/users/${string}/block` `` \| `"-/users/{target}/block"` \| `` `/channels/${string}/ack/${string}` `` \| `"-/channels/{target}/ack/{message}"` \| `` `/channels/${string}/recipients/${string}` `` \| `"-/channels/{group_id}/recipients/{member_id}"` \| `` `/channels/${string}/permissions/${string}` `` \| `"-/channels/{target}/permissions/{role_id}"` \| `` `/channels/${string}/permissions/default` `` \| `"-/channels/{target}/permissions/default"` \| `` `/channels/${string}/messages/${string}/reactions/${string}` `` \| `"-/channels/{target}/messages/{msg}/reactions/{emoji}"` \| `` `/servers/${string}/ack` `` \| `"-/servers/{target}/ack"` \| `` `/servers/${string}/bans/${string}` `` \| `"-/servers/{server}/bans/{target}"` \| `` `/servers/${string}/permissions/${string}` `` \| `"-/servers/{target}/permissions/{role_id}"` \| `` `/servers/${string}/permissions/default` `` \| `"-/servers/{target}/permissions/default"` \| `` `/custom/emoji/${string}` `` \| `"-/custom/emoji/{id}"`

###### Route

`Route` *extends* `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` & `object`

##### Parameters

###### path

`Path`

Path

###### params

`Route`\[`"params"`\]

Body or Query Parameters

###### config?

[`RequestOptions`](../interfaces/RequestOptions.md)

Axios configuration

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Route`\[`"response"`\]\>

Typed Response Data

#### Call Signature

> **put**\<`Path`, `Route`\>(`path`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Route`\[`"response"`\]\>

Defined in: node\_modules/.pnpm/revolt-api@0.8.9/node\_modules/revolt-api/lib/index.d.ts:147

Send HTTP PUT request.

##### Type Parameters

###### Path

`Path` *extends* `` `/users/${string}/friend` `` \| `"-/users/{target}/friend"` \| `` `/users/${string}/block` `` \| `"-/users/{target}/block"` \| `` `/channels/${string}/ack/${string}` `` \| `"-/channels/{target}/ack/{message}"` \| `` `/channels/${string}/recipients/${string}` `` \| `"-/channels/{group_id}/recipients/{member_id}"` \| `` `/channels/${string}/messages/${string}/reactions/${string}` `` \| `"-/channels/{target}/messages/{msg}/reactions/{emoji}"` \| `` `/servers/${string}/ack` `` \| `"-/servers/{target}/ack"`

###### Route

`Route` *extends* `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `object` & `object` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` \| `never` & `object`

##### Parameters

###### path

`Path`

Path

##### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Route`\[`"response"`\]\>

Typed Response Data

***

### req()

> **req**\<`Method`, `Routes`, `Path`, `Route`\>(`method`, `path`, `params`, `config?`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Route`\[`"response"`\]\>

Defined in: node\_modules/.pnpm/revolt-api@0.8.9/node\_modules/revolt-api/lib/index.d.ts:83

Send any arbitrary request.

#### Type Parameters

##### Method

`Method` *extends* `"get"` \| `"delete"` \| `"post"` \| `"put"` \| `"patch"`

##### Routes

`Routes` *extends* `PickRoutes`\<`Method`\>

##### Path

`Path` *extends* `"/"` \| `"/auth/account/change/password"` \| `"/auth/account/change/email"` \| `"/auth/account/delete"` \| `"/auth/account/disable"` \| `"/auth/account/reset_password"` \| `"/auth/account/reverify"` \| `"/auth/mfa/"` \| `"/auth/mfa/methods"` \| `"/auth/mfa/ticket"` \| `"/auth/mfa/totp"` \| `"/auth/mfa/recovery"` \| `"/sync/settings/fetch"` \| `"/sync/settings/set"` \| `"/sync/unreads"` \| `` `/users/${string}` `` \| `"-/users/{target}"` \| `` `/users/${string}/flags` `` \| `"-/users/{target}/flags"` \| `` `/users/${string}/default_avatar` `` \| `"-/users/{target}/default_avatar"` \| `` `/users/${string}/profile` `` \| `"-/users/{target}/profile"` \| `` `/users/${string}/dm` `` \| `"-/users/{target}/dm"` \| `` `/users/${string}/mutual` `` \| `"-/users/{target}/mutual"` \| `` `/users/${string}/friend` `` \| `"-/users/{target}/friend"` \| `` `/users/${string}/block` `` \| `"-/users/{target}/block"` \| `` `/bots/${string}/invite` `` \| `"-/bots/{target}/invite"` \| `` `/bots/${string}` `` \| `"-/bots/{bot}"` \| `"-/bots/{target}"` \| `` `/channels/${string}/ack/${string}` `` \| `"-/channels/{target}/ack/{message}"` \| `` `/channels/${string}` `` \| `"-/channels/{target}"` \| `` `/channels/${string}/members` `` \| `"-/channels/{target}/members"` \| `` `/channels/${string}/invites` `` \| `"-/channels/{target}/invites"` \| `` `/channels/${string}/messages` `` \| `"-/channels/{target}/messages"` \| `` `/channels/${string}/search` `` \| `"-/channels/{target}/search"` \| `` `/channels/${string}/messages/${string}/pin` `` \| `"-/channels/{target}/messages/{msg}/pin"` \| `` `/channels/${string}/messages/${string}` `` \| `"-/channels/{target}/messages/{msg}"` \| `` `/channels/${string}/messages/bulk` `` \| `"-/channels/{target}/messages/bulk"` \| `` `/channels/${string}/recipients/${string}` `` \| `"-/channels/{group_id}/recipients/{member_id}"` \| `"-/channels/{target}/recipients/{member}"` \| `` `/channels/${string}/join_call` `` \| `"-/channels/{target}/join_call"` \| `` `/channels/${string}/permissions/${string}` `` \| `"-/channels/{target}/permissions/{role_id}"` \| `` `/channels/${string}/permissions/default` `` \| `"-/channels/{target}/permissions/default"` \| `` `/channels/${string}/messages/${string}/reactions/${string}` `` \| `"-/channels/{target}/messages/{msg}/reactions/{emoji}"` \| `` `/channels/${string}/messages/${string}/reactions` `` \| `"-/channels/{target}/messages/{msg}/reactions"` \| `` `/channels/${string}/webhooks` `` \| `"-/channels/{target}/webhooks"` \| `"-/channels/{channel_id}/webhooks"` \| `` `/servers/${string}` `` \| `"-/servers/{target}"` \| `` `/servers/${string}/ack` `` \| `"-/servers/{target}/ack"` \| `` `/servers/${string}/channels` `` \| `"-/servers/{server}/channels"` \| `` `/servers/${string}/members` `` \| `"-/servers/{target}/members"` \| `` `/servers/${string}/members/${string}` `` \| `"-/servers/{target}/members/{member}"` \| `"-/servers/{server}/members/{member}"` \| `` `/servers/${string}/members_experimental_query` `` \| `"-/servers/{target}/members_experimental_query"` \| `` `/servers/${string}/bans/${string}` `` \| `"-/servers/{server}/bans/{target}"` \| `` `/servers/${string}/bans` `` \| `"-/servers/{target}/bans"` \| `` `/servers/${string}/invites` `` \| `"-/servers/{target}/invites"` \| `` `/servers/${string}/roles` `` \| `"-/servers/{target}/roles"` \| `` `/servers/${string}/roles/${string}` `` \| `"-/servers/{target}/roles/{role_id}"` \| `` `/servers/${string}/permissions/${string}` `` \| `"-/servers/{target}/permissions/{role_id}"` \| `` `/servers/${string}/permissions/default` `` \| `"-/servers/{target}/permissions/default"` \| `` `/servers/${string}/emojis` `` \| `"-/servers/{target}/emojis"` \| `` `/servers/${string}/roles/ranks` `` \| `"-/servers/{target}/roles/ranks"` \| `` `/invites/${string}` `` \| `"-/invites/{target}"` \| `` `/custom/emoji/${string}` `` \| `"-/custom/emoji/{id}"` \| `"-/custom/emoji/{emoji_id}"` \| `"/safety/report"` \| `"/auth/account/create"` \| `"/auth/account/"` \| `` `/auth/account/verify/${string}` `` \| `"-/auth/account/verify/{code}"` \| `` `/auth/session/${string}` `` \| `"-/auth/session/{id}"` \| `"/onboard/hello"` \| `"/onboard/complete"` \| `"/policy/acknowledge"` \| `"/push/subscribe"` \| `"/push/unsubscribe"` \| `` `/webhooks/${string}/${string}` `` \| `"-/webhooks/{webhook_id}/{token}"` \| `` `/webhooks/${string}` `` \| `"-/webhooks/{webhook_id}"` \| `` `/webhooks/${string}/${string}/github` `` \| `"-/webhooks/{webhook_id}/{token}/github"`

##### Route

`Route` *extends* `PickRoutes`\<`Method`\> & `object`

#### Parameters

##### method

`Method`

HTTP Method

##### path

`Path`

Path

##### params

`Route`\[`"params"`\]

Body or Query Parameters

##### config?

[`RequestOptions`](../interfaces/RequestOptions.md)

Request configuration

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`Route`\[`"response"`\]\>

Typed Response Data
