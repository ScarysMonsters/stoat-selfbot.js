---
title: "Interface: ClientEvents"
---

# Interface: ClientEvents

Defined in: [src/client/baseClient.ts:76](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L76)

Represents the events that the client can emit (discord.js style).

## Properties

### auth

> **auth**: \[`any`\]

Defined in: [src/client/baseClient.ts:166](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L166)

Emitted when an auth event is received (e.g., MFA challenge).

***

### channelAck

> **channelAck**: \[[`Channel`](../classes/Channel.md), `string`\]

Defined in: [src/client/baseClient.ts:154](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L154)

Emitted when a channel is acknowledged.

***

### channelCreate

> **channelCreate**: \[[`Channel`](../classes/Channel.md)\]

Defined in: [src/client/baseClient.ts:96](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L96)

Emitted when a channel is created.

***

### channelDelete

> **channelDelete**: \[[`Channel`](../classes/Channel.md)\]

Defined in: [src/client/baseClient.ts:98](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L98)

Emitted when a channel is deleted.

***

### channelUpdate

> **channelUpdate**: \[[`Channel`](../classes/Channel.md), [`Channel`](../classes/Channel.md)\]

Defined in: [src/client/baseClient.ts:100](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L100)

Emitted when a channel is updated.

***

### debug

> **debug**: \[`unknown`\]

Defined in: [src/client/baseClient.ts:78](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L78)

Emitted when a debug message is logged.

***

### emojiCreate

> **emojiCreate**: \[[`Emoji`](../classes/Emoji.md)\]

Defined in: [src/client/baseClient.ts:148](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L148)

Emitted when an emoji is created.

***

### emojiDelete

> **emojiDelete**: \[[`Emoji`](../classes/Emoji.md)\]

Defined in: [src/client/baseClient.ts:152](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L152)

Emitted when an emoji is deleted.

***

### emojiUpdate

> **emojiUpdate**: \[[`Emoji`](../classes/Emoji.md), [`Emoji`](../classes/Emoji.md)\]

Defined in: [src/client/baseClient.ts:150](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L150)

Emitted when an emoji is updated.

***

### error

> **error**: \[`unknown`\]

Defined in: [src/client/baseClient.ts:126](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L126)

Emitted when an error occurs.

***

### groupJoin

> **groupJoin**: \[[`Channel`](../classes/Channel.md), [`User`](../classes/User.md)\]

Defined in: [src/client/baseClient.ts:120](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L120)

Emitted when a group member joins.

***

### groupLeave

> **groupLeave**: \[[`Channel`](../classes/Channel.md), [`User`](../classes/User.md)\]

Defined in: [src/client/baseClient.ts:122](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L122)

Emitted when a group member leaves.

***

### guildMemberAdd

> **guildMemberAdd**: \[[`ServerMember`](../classes/ServerMember.md)\]

Defined in: [src/client/baseClient.ts:108](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L108)

Emitted when a server member joins (discord.js: guildMemberAdd).

***

### guildMemberRemove

> **guildMemberRemove**: \[[`ServerMember`](../classes/ServerMember.md)\]

Defined in: [src/client/baseClient.ts:110](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L110)

Emitted when a server member leaves (discord.js: guildMemberRemove).

***

### guildMemberUpdate

> **guildMemberUpdate**: \[[`ServerMember`](../classes/ServerMember.md), [`ServerMember`](../classes/ServerMember.md)\]

Defined in: [src/client/baseClient.ts:112](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L112)

Emitted when a server member is updated (discord.js: guildMemberUpdate).

***

### logout

> **logout**: \[\]

Defined in: [src/client/baseClient.ts:164](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L164)

Emitted when the client is logged out.

***

### messageAppend

> **messageAppend**: \[[`MessageStruct`](../classes/MessageStruct.md), [`MessageStruct`](../classes/MessageStruct.md)\]

Defined in: [src/client/baseClient.ts:170](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L170)

Emitted when data is appended to a message (e.g., embeds loaded).

***

### messageCreate

> **messageCreate**: \[[`MessageStruct`](../classes/MessageStruct.md)\]

Defined in: [src/client/baseClient.ts:80](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L80)

Emitted when a message is received.

***

### messageDelete

> **messageDelete**: \[[`MessageStruct`](../classes/MessageStruct.md)\]

Defined in: [src/client/baseClient.ts:82](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L82)

Emitted when a message is deleted.

***

### messageDeleteBulk

> **messageDeleteBulk**: \[`string`[]\]

Defined in: [src/client/baseClient.ts:90](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L90)

Emitted when messages are bulk deleted.

***

### messagePin

> **messagePin**: \[[`MessageStruct`](../classes/MessageStruct.md)\]

Defined in: [src/client/baseClient.ts:92](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L92)

Emitted when a message is pinned.

***

### messageReactionAdd

> **messageReactionAdd**: \[[`MessageStruct`](../classes/MessageStruct.md), `string`, `string`\]

Defined in: [src/client/baseClient.ts:86](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L86)

Emitted when a reaction is added to a message.

***

### messageReactionRemove

> **messageReactionRemove**: \[[`MessageStruct`](../classes/MessageStruct.md), `string`, `string`\]

Defined in: [src/client/baseClient.ts:88](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L88)

Emitted when a reaction is removed from a message.

***

### messageUnpin

> **messageUnpin**: \[[`MessageStruct`](../classes/MessageStruct.md)\]

Defined in: [src/client/baseClient.ts:94](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L94)

Emitted when a message is unpinned.

***

### messageUpdate

> **messageUpdate**: \[[`MessageStruct`](../classes/MessageStruct.md), [`MessageStruct`](../classes/MessageStruct.md)\]

Defined in: [src/client/baseClient.ts:84](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L84)

Emitted when a message is updated.

***

### raw

> **raw**: \[`unknown`\]

Defined in: [src/client/baseClient.ts:128](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L128)

Emitted when a raw event is received.

***

### ready

> **ready**: \[[`Client`](../classes/Client.md)\]

Defined in: [src/client/baseClient.ts:124](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L124)

Emitted when the client is ready.

***

### roleCreate

> **roleCreate**: \[[`Role`](../classes/Role.md)\]

Defined in: [src/client/baseClient.ts:130](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L130)

Emitted when a role is created.

***

### roleDelete

> **roleDelete**: \[[`Role`](../classes/Role.md)\]

Defined in: [src/client/baseClient.ts:132](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L132)

Emitted when a role is deleted.

***

### roleUpdate

> **roleUpdate**: \[[`Role`](../classes/Role.md), [`Role`](../classes/Role.md)\]

Defined in: [src/client/baseClient.ts:134](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L134)

Emitted when a role is updated.

***

### serverBanAdd

> **serverBanAdd**: \[[`ServerBan`](../classes/ServerBan.md)\]

Defined in: [src/client/baseClient.ts:158](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L158)

Emitted when a server ban is created.

***

### serverBanRemove

> **serverBanRemove**: \[[`ServerBan`](../classes/ServerBan.md)\]

Defined in: [src/client/baseClient.ts:160](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L160)

Emitted when a server ban is removed.

***

### serverCreate

> **serverCreate**: \[[`Server`](../classes/Server.md)\]

Defined in: [src/client/baseClient.ts:102](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L102)

Emitted when a server is created.

***

### serverDelete

> **serverDelete**: \[[`Server`](../classes/Server.md)\]

Defined in: [src/client/baseClient.ts:104](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L104)

Emitted when a server is deleted.

***

### serverRoleCreate

> **serverRoleCreate**: \[[`Role`](../classes/Role.md)\]

Defined in: [src/client/baseClient.ts:162](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L162)

Emitted when a server role is created.

***

### serverUpdate

> **serverUpdate**: \[[`Server`](../classes/Server.md), [`Server`](../classes/Server.md)\]

Defined in: [src/client/baseClient.ts:106](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L106)

Emitted when a server is updated.

***

### typingStart

> **typingStart**: \[[`Channel`](../classes/Channel.md), [`User`](../classes/User.md)\]

Defined in: [src/client/baseClient.ts:116](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L116)

Emitted when a user is typing.

***

### typingStop

> **typingStop**: \[[`Channel`](../classes/Channel.md), [`User`](../classes/User.md)\]

Defined in: [src/client/baseClient.ts:118](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L118)

Emitted when a user stops typing.

***

### userPlatformWipe

> **userPlatformWipe**: \[`any`\]

Defined in: [src/client/baseClient.ts:168](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L168)

Emitted when a user platform wipe event is received.

***

### userRelationship

> **userRelationship**: \[[`User`](../classes/User.md), `string`\]

Defined in: [src/client/baseClient.ts:156](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L156)

Emitted when a user relationship changes (discord.js: relationshipAdd/Remove).

***

### userUpdate

> **userUpdate**: \[[`User`](../classes/User.md), [`User`](../classes/User.md)\]

Defined in: [src/client/baseClient.ts:114](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L114)

Emitted when a user is updated.

***

### voiceChannelJoin

> **voiceChannelJoin**: \[[`VoiceChannelJoinData`](VoiceChannelJoinData.md)\]

Defined in: [src/client/baseClient.ts:144](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L144)

Emitted when a user joins a voice channel.

***

### voiceChannelLeave

> **voiceChannelLeave**: \[[`VoiceChannelLeaveData`](VoiceChannelLeaveData.md)\]

Defined in: [src/client/baseClient.ts:146](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L146)

Emitted when a user leaves a voice channel.

***

### voiceStateUpdate

> **voiceStateUpdate**: \[[`UserVoiceStateUpdateData`](UserVoiceStateUpdateData.md)\]

Defined in: [src/client/baseClient.ts:142](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L142)

Emitted when a user's voice state is updated (discord.js: voiceStateUpdate).

***

### webhookCreate

> **webhookCreate**: \[[`WebhookCreateData`](WebhookCreateData.md)\]

Defined in: [src/client/baseClient.ts:136](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L136)

Emitted when a webhook is created.

***

### webhookDelete

> **webhookDelete**: \[[`WebhookDeleteData`](WebhookDeleteData.md)\]

Defined in: [src/client/baseClient.ts:138](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L138)

Emitted when a webhook is deleted.

***

### webhookUpdate

> **webhookUpdate**: \[[`WebhookUpdateData`](WebhookUpdateData.md)\]

Defined in: [src/client/baseClient.ts:140](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/client/baseClient.ts#L140)

Emitted when a webhook is updated.
