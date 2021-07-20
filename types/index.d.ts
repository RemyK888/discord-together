import Discord from 'discord.js';

declare class DiscordTogether<T extends {
    [x: string]: string;
}> {
    /**
     * Create a new YoutubeTogether
     * @param {Discord.Client} client Discord.Client
     * @param {T} applications
     * @example
     * const Discord = require('discord.js');
     * const client = new Discord.Client();
     * const { DiscordTogether } = require('discord-together');
     *
     * client.discordTogether = new DiscordTogether(client);
     *
     * client.on('message', async message => {
     *      if (message.content === 'start') {
     *          client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
     *              return message.channel.send(`${invite.code}`);
     *           });
     *      };
     * });
     *
     * client.login('your token');
     */
    constructor(client: Discord.Client, applications?: T);
    /**
     * Discord.Client
     */
    client: string;
    applications: {
        youtube: string;
        poker: string;
        betrayal: string;
        fishing: string;
        chess: string;
    } & T;
    /**
     * Create a Youtube Together invite code (note: send the invite using markdown link)
     * @param {string} voiceChannelId
     * @param {keyof (defaultApplications & T)} option
     * @example
     * client.on('message', async message => {
     *      if (message.content === 'start') {
     *          client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
     *              return message.channel.send(`${invite.code}`); // Click the blue link
     *           });
     *      };
     * });
     */
    createTogetherCode(voiceChannelId: string, option: keyof ({
        youtube: string;
        poker: string;
        betrayal: string;
        fishing: string;
        chess: string;
    } & T)): Promise<{
        code: string;
    }>;
}