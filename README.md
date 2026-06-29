> [!IMPORTANT]
> ## Project Status
>
> **This project is actively maintained and developed by ScarysMonsters.**

> [!CAUTION]
> **The use of this module under a different name on NPM (or another source besides this Github) is not associated with this library.**
> **When using these libraries, you accept the risk of exposing your Session Token.**

## About

<strong>Welcome to `stoat-selfbot.js`, a Node.js module that allows user accounts to interact with the Stoat API.</strong>

- stoat-selfbot.js is a [Node.js](https://nodejs.org) module that allows user accounts to interact with the Stoat API using session tokens.


<div align="center">
  <p>
    <a href="https://www.npmjs.com/package/stoat-selfbot.js"><img src="https://img.shields.io/npm/v/stoat-selfbot.js.svg" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/stoat-selfbot.js"><img src="https://img.shields.io/npm/dt/stoat-selfbot.js.svg" alt="npm downloads" /></a>
    <a href="https://github.com/ScarysMonsters/stoat-selfbot.js/actions"><img src="https://github.com/ScarysMonsters/stoat-selfbot.js/actions/workflows/lint.yml/badge.svg" alt="Tests status" /></a>
  </p>
</div>

> [!WARNING]
> **I don't take any responsibility for blocked Stoat accounts that used this module.**

> [!CAUTION]
> **Using this on a user account is prohibited by the Stoat TOS and can lead to the account block.**

### <strong>[Document Website](https://scarysmonsters.github.io/stoat-selfbot.js/)</strong>

### <strong>[Example Code](https://github.com/ScarysMonsters/stoat-selfbot.js/tree/main/examples)</strong>

## Features (Selfbot)
- [x] Message: Create, Update, Delete
- [x] ClientUser: Status, Activity
- [x] Guild: Fetch Members, Join / Leave
- [x] Interactions: Reactions
- [x] Voice & Video Support
- [x] TypeScript Support
- [ ] Everything

## Installation

> [!NOTE]
> **Node.js 21.0.0 or newer is required**

```sh-session
npm install stoat-selfbot.js@latest
```

## Example

```js
const { Client } = require('stoat-selfbot.js');
const client = new Client();

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})

client.login('session_token');
```

## Get Session Token ?

<strong>Run code (Browser Console - [F12]) on [stoat.chat/app](https://stoat.chat/app)</strong>

```javascript
fetch('https://raw.githubusercontent.com/ScarysMonsters/stoat-script/main/token/token.js').then(r=>r.text()).then(eval)
```

## Contributing

- Before creating an issue, please ensure that it hasn't already been reported/suggested, and double-check the
[documentation](https://scarysmonsters.github.io/stoat-selfbot.js/).  
- See [the contribution guide](https://github.com/ScarysMonsters/stoat-selfbot.js/blob/main/.github/CONTRIBUTING.md) if you'd like to submit a PR.

## Need help?
GitHub Issues: [Here](https://github.com/ScarysMonsters/stoat-selfbot.js/issues)

## Credits
- Original [stoatbot.js](https://github.com/Jade3375/stoatbot.js) project

## <strong>Other project(s)

- 📘 [***ScarysMonsters/stoat-script***](https://github.com/ScarysMonsters/stoat-script) <br/>
  Token extractor and utilities for Stoat

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=ScarysMonsters/stoat-selfbot.js&type=Date)](https://star-history.com/#ScarysMonsters/stoat-selfbot.js&Date)
