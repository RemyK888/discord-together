const Discord = require('discord.js');
const client = new Discord.Client();
const { DiscordTogether } = require('../index.js');

client.discordTogether = new DiscordTogether(client);

client.on('message', async message => {
    if (message.content === 'start') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelId, 'sketchheads').then(async invite => {
                return message.channel.send(`${invite.code}`); // Click the blue link !
            });
        };
    };
});

client.login('Discord bot token');