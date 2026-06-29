---
title: "Interface: RoleCreateOptions"
---

# Interface: RoleCreateOptions

Defined in: [src/managers/roleManager.ts:9](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/roleManager.ts#L9)

## Properties

### colour?

> `optional` **colour?**: `string`

Defined in: [src/managers/roleManager.ts:11](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/roleManager.ts#L11)

The colour of the role.

***

### hoist?

> `optional` **hoist?**: `boolean`

Defined in: [src/managers/roleManager.ts:13](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/roleManager.ts#L13)

Whether the role is displayed separately in the member list.

***

### permissions?

> `optional` **permissions?**: `object`

Defined in: [src/managers/roleManager.ts:17](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/roleManager.ts#L17)

Permissions to set for the role.

#### a?

> `optional` **a?**: (`"ManageChannel"` \| `"ManageServer"` \| `"ManagePermissions"` \| `"ManageRole"` \| `"ManageCustomisation"` \| `"KickMembers"` \| `"BanMembers"` \| `"TimeoutMembers"` \| `"AssignRoles"` \| `"ChangeNickname"` \| `"ManageNicknames"` \| `"ChangeAvatar"` \| `"RemoveAvatars"` \| `"ViewChannel"` \| `"ReadMessageHistory"` \| `"SendMessage"` \| `"ManageMessages"` \| `"ManageWebhooks"` \| `"InviteOthers"` \| `"SendEmbeds"` \| `"UploadFiles"` \| `"Masquerade"` \| `"React"` \| `"Connect"` \| `"Speak"` \| `"Video"` \| `"MuteMembers"` \| `"DeafenMembers"` \| `"MoveMembers"` \| `"MentionEveryone"` \| `"MentionRoles"` \| `"GrantAll"`)[]

#### d?

> `optional` **d?**: (`"ManageChannel"` \| `"ManageServer"` \| `"ManagePermissions"` \| `"ManageRole"` \| `"ManageCustomisation"` \| `"KickMembers"` \| `"BanMembers"` \| `"TimeoutMembers"` \| `"AssignRoles"` \| `"ChangeNickname"` \| `"ManageNicknames"` \| `"ChangeAvatar"` \| `"RemoveAvatars"` \| `"ViewChannel"` \| `"ReadMessageHistory"` \| `"SendMessage"` \| `"ManageMessages"` \| `"ManageWebhooks"` \| `"InviteOthers"` \| `"SendEmbeds"` \| `"UploadFiles"` \| `"Masquerade"` \| `"React"` \| `"Connect"` \| `"Speak"` \| `"Video"` \| `"MuteMembers"` \| `"DeafenMembers"` \| `"MoveMembers"` \| `"MentionEveryone"` \| `"MentionRoles"` \| `"GrantAll"`)[]

***

### rank?

> `optional` **rank?**: `number`

Defined in: [src/managers/roleManager.ts:15](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/232ee19abdb70d025ff74ac26e186d01e1635e82/src/managers/roleManager.ts#L15)

The rank of the role, used for ordering.
