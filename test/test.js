const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });
const { DiscordTogether } = require('../index.js');

client.discordTogether = new DiscordTogether(client);

client.on('messageCreate', async message => { // 'message' for Discord.js v12
    if (message.content === 'start') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'puttparty').then(async invite => { // message.member.voice.channelId for Discord.js v12
                return message.channel.send(`${invite.code}`); // Click the blue link !
            });
        };
    };
});

client.login('Discord bot token');