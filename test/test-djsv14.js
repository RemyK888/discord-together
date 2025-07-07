const Discord = require('discord.js');
const { DiscordTogether } = require('discord-together');

const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds, Discord.GatewayIntentBits.GuildMessages, Discord.GatewayIntentBits.MessageContent] });
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