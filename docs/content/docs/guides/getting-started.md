---
title: Getting Started
---

## Premier bot

```ts
import { Client } from 'stoat-selfbot.js';

const client = new Client();

client.on('ready', () => {
  console.log(`Connecté en tant que ${client.user.username}`);
});

client.login(process.env.TOKEN);
```

## Envoyer un message

```ts
const channel = await client.channels.fetch('channel_id');
await channel.sendMessage({ content: 'Hello depuis stoat-selfbot.js !' });
```
