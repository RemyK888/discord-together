const Discord = require('discord.js');
const client = new Discord.Client();
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client, {
    token: 'your token'
});

client.on('message', async message => {
    if (message.content === 'start') {
        client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
            return message.channel.send(`${invite.code}`);
        });
    };
});

client.login('your token');

