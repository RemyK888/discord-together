<p align="center">
  <h1><strong>Discord Together</strong></h1>
  <a href="https://nodei.co/npm/discord-together/">
    <img src="https://nodei.co/npm/discord-together.png" alt="NPM">
  </a>
  <br/>
  <a href="https://forthebadge.com">
    <img src="https://forthebadge.com/images/badges/made-with-javascript.svg" alt="Made with JavaScript">
  </a>
  <br/>
  <img src="https://img.shields.io/npm/dt/discord-together?style=for-the-badge" alt="Downloads">
</p>

---

# Discord Together

A simple, type-safe, and lightweight Node.js library to generate Discord Together invite links for over 23+ activities and games, supporting all versions of [discord.js](https://www.npmjs.com/package/discord.js).

---

## 🔩 Installation

### Install [discord-together](https://www.npmjs.com/package/discord-together)
```sh
npm install discord-together@latest
```

### Install [discord.js](https://www.npmjs.com/package/discord.js)
```sh
npm install discord.js@latest
```
*Supports all versions of Discord.js*

---

## 🔑 Features

- 🚀 Easy to use
- 🌐 Multiple server support
- 🛠️ Works with all Discord.js versions
- 🎮 23+ games and activities
- 🪶 Lightweight and type-safe
- 🤝 Actively maintained
- 📦 Extendable configuration

---

## 📚 Table of Contents

- [Basic Example](#-basic-example)
- [API Reference](#-api-reference)
- [Advanced Usage](#-advanced-usage)
  - [Custom Application Config](#custom-application-config)
  - [Factory Usage](#factory-usage)
- [Available Games](#-all-available-games)
- [Example Bots](#-example-of-bots-made-with-discord-together)
- [License & Credits](#-others)
- [Support](#support)

---

## 💻 Basic Example

A simple example using this package with Discord.js v14+:

```js
import { Client, GatewayIntentBits } from 'discord.js';
import { DiscordTogether } from 'discord-together';

const client = new Discord.Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const togetherInstance = new DiscordTogether(client);

client.on('messageCreate', async message => { 
    if (message.content === 'start') {
        if(message.member.voice.channel) {
            togetherInstance.createTogetherCode(message.member.voice.channel.id, 'chess').then(async res => {
                return message.channel.send(`${res.invite}`);
            })
        };
    };
});

client.login('TOKEN');
```

---

## 📝 API Reference

### `DiscordTogether` class

#### Constructor

```ts
new DiscordTogether(client: Client, applications?: ApplicationConfig)
```
- `client`: Your Discord.js client instance (must be logged in).
- `applications` (optional): Custom application config. Defaults to built-in games.

#### Methods

##### `createTogetherCode(channelId: Snowflake, application: string): Promise<{ code: string, invite: string }>`
- `channelId`: The ID of the voice channel.
- `application`: The key of the game/activity (see [Available Games](#-all-available-games)).
- **Returns:** An object with the invite code and the full invite URL.

---

### `createDiscordTogether` factory

```ts
import { createDiscordTogether } from "discord-together";

const createTogetherCode = createDiscordTogether(client, applications);
```
- Returns the `createTogetherCode` function directly for functional usage.

---

## ⚙️ Advanced Usage

### Custom Application Config

You can extend or override the default games with your own:

```ts
import { createApplicationConfig, DefaultApplicationsConfig, DiscordTogether } from "discord-together";

// Extend the default config with your own games
const extendedConfig = createApplicationConfig(
  { monopoly: "your_snowflake_id" },
  { extends: [DefaultApplicationsConfig] }
);

const instance = new DiscordTogether(client, extendedConfig);
```

### Factory Usage

```ts
import { createDiscordTogether } from "discord-together";

// Returns the createTogetherCode function
const createTogetherCode = createDiscordTogether(client, applications);
```

---

## 🎮 All Available Games

| Key            | Description                |
|----------------|---------------------------|
| youtube        | YouTube Together          |
| youtubedev     | YouTube Dev               |
| poker          | Poker Night               |
| betrayal       | Betrayal.io               |
| fishing        | Fishington.io             |
| chess          | Chess in the Park         |
| chessdev       | Chess Dev                 |
| lettertile     | Letter Tile               |
| wordsnack      | Word Snack                |
| doodlecrew     | Doodle Crew               |
| awkword        | Awkword                   |
| spellcast      | SpellCast                 |
| checkers       | Checkers in the Park      |
| puttparty      | Putt Party                |
| sketchheads    | Sketch Heads              |
| ocho           | Ocho                      |
| puttpartyqa    | Putt Party QA             |
| sketchyartist  | Sketchy Artist            |
| land           | Land                      |
| meme           | Meme                      |
| askaway        | Ask Away                  |
| bobble         | Bobble                    |
| bashout        | Bash Out                  |

---


## 🌌 Example of Bots Made with Discord Together

- [Discord Together Bot](https://github.com/RemyK888/discord-together-bot) by [RemyK](https://github.com/RemyK888)
- [Lambdapse](https://github.com/lambdagit101/lambdapse) by [Lambdaguy101](https://github.com/lambdagit101)

---

## 📝 License & Credits

- **License:** MIT
- **Author:** [RemyK](https://github.com/RemyK888)
- **Special thanks:** [Ayomits](https://github.com/Ayomits) for the TypeScript rewrite, and all contributors and community members!

*This package is not affiliated with Discord Inc. or YouTube Inc.*

---

## 💬 Support

If you have any problems or questions, feel free to contact [RemyK](https://discord.com/users/509397999924019211).

- **Discord server:** [Server Link](https://discord.gg/GK8jFXkybz)
- **GitHub repository:** [discord-together](https://github.com/RemyK888/discord-together)

---

<hr>

<p align="center"><b>Made with ❤ by RemyK</b></p>
