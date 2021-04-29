<center>
<h1><strong>Discord Together</strong></h1>

[![NPM](https://nodei.co/npm/discord-together.png)](https://nodei.co/npm/discord-together/)

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
</center>

# 🔩 Installation
## Install [discord-together](https://www.npmjs.com/package/discord-together)
```
$ npm install discord-together@latest
```

## Install [discord.js](https://www.npmjs.com/package/discord.js)
```
$ npm install discord.js
```

# 🔑 Features
- Easy to use
- Multiple server
- Discord support
- Lightweight

### <u>Documentation ➩ coming soon !</u>

<br/>

# 💻 Code example
This is a simple example of code using this package.

```js
const Discord = require('discord.js');
const client = new Discord.Client();
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client, {
    token: 'your token'
});

client.on('message', async message => {
    if (message.content === 'start') {
        client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
            return message.channel.send(`[LINK](${invite.code})`);
        });
    };
});

client.login('your token');
```
<br/>

# 🔧 Options
- Youtube
```js
        client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
            return message.channel.send(`[LINK](${invite.code})`);
        });
```

- Poker
```js
        client.discordTogether.createTogetherCode(message.member.voice.channelID, 'poker').then(async invite => {
            return message.channel.send(`[LINK](${invite.code})`);
        });
```

- Betrayal
```js
        client.discordTogether.createTogetherCode(message.member.voice.channelID, 'betrayal').then(async invite => {
            return message.channel.send(`[LINK](${invite.code})`);
        });
```

- Fishing
```js
        client.discordTogether.createTogetherCode(message.member.voice.channelID, 'fishing').then(async invite => {
            return message.channel.send(`[LINK](${invite.code})`);
        });
```


# 🌌 Example of bots made with Discord Together
- [Discord Together Bot](https://github.com/RemyK888/discord-together-bot) by [RemyK](https://github.com/RemyK888)

# 🚀 Others

**This package is under MIT license.**

*Note: This package is not affiliated with Discord or YouTube.*

If you have any problems, you can contact: `RemyK#3876`.
**Discord server:** [Server Link](https://discord.gg/GK8jFXkybz)

[**Github repository**](https://github.com/RemyK888/discord-together)

<hr>

## **Made with ❤ by RemyK**


