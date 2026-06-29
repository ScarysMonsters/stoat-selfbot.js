/**
 * Selfbot Example - discord.js style
 *
 * This example demonstrates how to create a selfbot using discord.js-like syntax.
 *
 * IMPORTANT SECURITY WARNINGS:
 * - Selfbots may violate the platform's Terms of Service. Use at your own risk.
 * - Never share your session token with anyone.
 * - Store tokens in environment variables, never hardcode them.
 */

import { Client, MessageStruct } from "stoat-selfbot.js";

// Create a new selfbot client
const client = new Client({
  fetchMembers: true,
});

// Ready event - emitted when the selfbot is connected and ready
client.on("ready", () => {
  console.log(`client is ready!`);
  console.log(`Logged in as: ${client.user?.username}`);
  console.log(`User ID: ${client.user?.id}`);
  console.log(`Servers: ${client.servers.cache.size}`);
});

// messageCreate event - emitted when a new message is sent
client.on("messageCreate", (message: MessageStruct) => {
  if (message.author?.id !== client.user?.id) {
    return;
  }

  console.log(`📨 My message: ${message.content}`);

  // Simple command handling
  const prefix = "!";
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift()?.toLowerCase();

  switch (command) {
    case "ping":
      message.reply("🏓 Pong!");
      break;

    case "help":
      message.reply(`
**Selfbot Commands:**
\`!ping\` - Test response
\`!status <text>\` - Set your status
\`!info\` - Show selfbot info
\`!help\` - Show this help message
      `);
      break;

    case "status":
      const statusText = args.join(" ");
      if (statusText) {
        client.user?.setStatus(statusText);
        message.reply(`Status set to: ${statusText}`);
      } else {
        message.reply("Please provide a status text.");
      }
      break;

    case "info":
      message.reply(`
**Selfbot Info:**
Username: ${client.user?.username}
User ID: ${client.user?.id}
Uptime: ${Math.floor((client.upTime || 0) / 1000)}s
Servers: ${client.servers.cache.size}
Channels: ${client.channels.cache.size}
      `);
      break;

    default:
      break;
  }
});

// messageUpdate event - emitted when a message is edited
client.on("messageUpdate", (oldMessage: MessageStruct, newMessage: MessageStruct) => {
  // Only log our own message edits
  if (newMessage.author?.id === client.user?.id) {
    console.log(`Edited message: "${oldMessage.content}" → "${newMessage.content}"`);
  }
});

// messageDelete event - emitted when a message is deleted
client.on("messageDelete", (message: MessageStruct) => {
  // Only log our own deleted messages
  if (message.author?.id === client.user?.id) {
    console.log(`Deleted message: "${message.content}"`);
  }
});

// guildMemberAdd event - emitted when a member joins a server
client.on("guildMemberAdd", (member) => {
  console.log(`New member joined: ${member.user?.username} in ${member.server?.name}`);
});

// guildMemberRemove event - emitted when a member leaves a server
client.on("guildMemberRemove", (member) => {
  console.log(`Member left: ${member.user?.username} from ${member.server?.name}`);
});

// messageReactionAdd event 
client.on("messageReactionAdd", (message: MessageStruct) => {
  console.log(`Reaction added to message: "${message.content?.substring(0, 50)}..."`);
});

// messageReactionRemove event 
client.on("messageReactionRemove", (message: MessageStruct) => {
  console.log(`Reaction removed from message: "${message.content?.substring(0, 50)}..."`);
});

// channelCreate event (discord.js style)
client.on("channelCreate", (channel) => {
  console.log(`New channel created: ${channel.name}`);
});

// channelDelete event (discord.js style)
client.on("channelDelete", (channel) => {
  console.log(`Channel deleted: ${channel.name}`);
});

// Error handling
client.on("error", (error) => {
  console.error("error:", error);
});

// Handle process termination gracefully
process.on("SIGINT", async () => {
  console.log("\nShutting down...");
  await client.destroy();
  process.exit(0);
});

// Login with your session token
// check -> README or https://github.com/ScarysMonsters/stoat-script/tree/main/token

const SESSION_TOKEN = process.env.SESSION_TOKEN;

client.login(SESSION_TOKEN);
