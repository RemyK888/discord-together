const Discord = require('discord.js');
const client = new Discord.Client();
const { DiscordTogether } = require('../index');

client.discordTogether = new DiscordTogether(client);

client.on('message', async message => {
    if (message.content === 'start') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
                return message.channel.send(`${invite.code}`); // Click the blue link !
            });
        };
    };
});

client.login('your Discord bot token');


