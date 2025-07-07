<p align="center">
<h1><strong>Discord Together</strong></h1>

[![NPM](https://nodei.co/npm/discord-together.png)](https://nodei.co/npm/discord-together/)

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

![DL](https://img.shields.io/npm/dt/discord-together?style=for-the-badge)
</p>

# 🔩 Installation
## Install [discord-together](https://www.npmjs.com/package/discord-together)
```
$ npm install discord-together@latest
```

## Install [discord.js](https://www.npmjs.com/package/discord.js)
```
$ npm install discord.js@latest
```
*Note: supports all versions of Discord.js*

# 🔑 Features
- Easy to use
- Multiple server
- Discord support
- Lightweight
- Works with all DJS versions
- 22+ games available
- Type safe

<br/>

# 💻 Basic example
This is a simple example of code using this package.

```js
import { Client } from "discord.js"
import { DiscordTogether } from "discord-together"

const client = new Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });

client.discordTogether = new DiscordTogether(client);

client.on('messageCreate', async message => {
    if (message.content === 'start') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'sketchheads').then(async res => {
                return message.channel.send(`${res.invite}`);
            });
        };
    };
});

client.login('your Discord bot token');
```

# 🥷 Advanced techniques

We're admit that you can init discord client yourself and use functions

## Config extend

```ts
import { createApplicationConfig, DefaultApplicationsConfig, DiscordTogether } from "discord-together"

// It will return config with DefaultApplicationsConfig and your custom options
// If extends is empty or options not passed, it will return only your custom
const extendedConfig = createApplicationConfig({monopoly: "snowflake"}, {extends: [DefaultApplicationsConfig]})

// You can use your own config here
const instance = new DiscordTogether(client, extendedConfig)
```

## Factory way to create DiscordTogether

```ts
import { createDiscordTogether } from "discord-together"

// It will return function createTogetherCode from DiscordTogether instance
const createTogetherCode = createDiscordTogether(client, applications)
```
<br/>

# 🔨 All available games
 - `youtube`
 - `youtubedev`
 - `poker`
 - `betrayal`
 - `fishing`
 - `chess`
 - `chessdev`
 - `lettertile`
 - `wordsnack`
 - `doodlecrew`
 - `awkword`
 - `spellcast`
 - `checkers`
 - `puttparty`
 - `sketchheads`
 - `ocho`
 - `puttpartyqa`
 - `sketchyartist`
 - `land`
 - `meme`
 - `askaway`
 - `bobble`


# 📷 Image

![Invite link](https://media.discordapp.net/attachments/835896457454026802/837968506846183474/2021-05-01_10h26_17.png)

### *Note: you have to click on the BLUE LINK, not the 'Play' button, in order to start the activity !*

<br/>

![YouTube Together](https://media.discordapp.net/attachments/835896457454026802/837968510843093033/2021-05-01_10h27_31.png?width=1229&height=676)

<br/>

# 🌌 Example of bots made with Discord Together
- [Discord Together Bot](https://github.com/RemyK888/discord-together-bot) by [RemyK](https://github.com/RemyK888)
- [Lambdapse](https://github.com/lambdagit101/lambdapse) by [Lambdaguy101](https://github.com/lambdagit101)

# 🚀 Others

### **Thanks a lot to [3chospirits](https://github.com/3chospirits) who made the typescript declaration file !**

*I would also like to thank all the amazing members of my server who are helping to make this project happen !*

**This package is under MIT license.**

*Note: This package is not affiliated with Discord Inc. or YouTube Inc.*

If you have any problems, you can contact: `RemyK#3876`.
**Discord server:** [Server Link](https://discord.gg/GK8jFXkybz)

[**Github repository**](https://github.com/RemyK888/discord-together)

<hr>

## **Made with ❤ by RemyK**
