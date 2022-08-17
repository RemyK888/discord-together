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

<br/>

# 💻 Code example
This is a simple example of code using this package.

```js
const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);

client.on('messageCreate', async message => {
    if (message.content === 'start') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'sketchheads').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
});

client.login('your Discord bot token');
```
<br/>

# 🔧 Options
- Youtube
```js
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
```
You can also choose the development version of YouTube, use: `youtubeDev`.

- Poker
```js
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'poker').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
```

- Chess
```js
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'chess').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
``` 
*Or Checkers in the Park*
```js
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'checkers').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
```
You can also choose the development version of chess, use: `chessDev`.

- Betrayal
```js
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'betrayal').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
```

- Fishington
```js
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'fishing').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
```

- Letter Tile
```js
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'lettertile').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
```

- Words Snack
```js
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'wordsnack').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
```

- Doodle Crew
```js
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'doodlecrew').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
```

- SpellCast
```js
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'spellcast').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
```

- Awkword
```js
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'awkword').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
```

- Puttparty
```js
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'puttparty').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
```

- Sketchheads
```js
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'sketchheads').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
```

- Ocho
```js
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'ocho').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
```

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


