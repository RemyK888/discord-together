const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds, Discord.GatewayIntentBits.GuildMessages, Discord.GatewayIntentBits.MessageContent] });
const { DiscordTogether } = require('../index.js');

client.discordTogether = new DiscordTogether(client);

client.on('messageCreate', async message => { 
    if (message.content === 'start') {
        console.log('cccc')
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'sketchyartist').then(async invite => { 
                return message.channel.send(`${invite.code}`); // Click the blue link !
            });
        };
    };
});

client.login('Discord bot token');