---
title: Getting Started
---

## First bot

```ts
import { Client } from 'stoat-selfbot.js';

const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}`);
});

client.login(process.env.TOKEN);
```

## Send a message

```ts
const channel = await client.channels.fetch('channel_id');
await channel.sendMessage({ content: 'Hello from stoat-selfbot.js!' });
```
