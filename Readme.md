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

client.discordTogether = new DiscordTogether(client);

client.on('message', async message => {
    if (message.content === 'start') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'poker').then(async invite => {
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
client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
```

- Poker
```js
client.discordTogether.createTogetherCode(message.member.voice.channelID, 'poker').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
```

- Chess
```js
client.discordTogether.createTogetherCode(message.member.voice.channelID, 'chess').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
```

- Betrayal
```js
client.discordTogether.createTogetherCode(message.member.voice.channelID, 'betrayal').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
```

- Fishing
```js
client.discordTogether.createTogetherCode(message.member.voice.channelID, 'fishing').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
```

- Custom application ID
```js
client.discordTogether.createTogetherCode(message.member.voice.channelID, 'application ID').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
```

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

**This package is under MIT license.**

*Note: This package is not affiliated with Discord or YouTube.*

If you have any problems, you can contact: `RemyK#3876`.
**Discord server:** [Server Link](https://discord.gg/GK8jFXkybz)

[**Github repository**](https://github.com/RemyK888/discord-together)

<hr>

## **Made with ❤ by RemyK**


