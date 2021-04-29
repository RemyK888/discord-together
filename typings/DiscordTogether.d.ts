export = DiscordTogether;
/**
 * Class symbolizing a YoutubeTogether
 */
declare class DiscordTogether {
    /**
     * Create a new YoutubeTogether
     * @param {string} client Discord.Client
     * @param {youtubeTogetherOptions} [options={}] YoutubeTogether options
     * @example
     * const Discord = require('discord.js');
     * const client = new Discord.Client();
     * const { DiscordTogether } = require('discord-together');
     *
     *client.discordTogether = new DiscordTogether(client, {
            token: 'your token'
     * });
     *
     * client.on('message', async message => {
     *      if (message.content === 'start') {
     *          client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
     *              return message.channel.send(`[LINK](${invite.code})`);
     *           });
     *      };
     * });
     *
     * client.login('your token');
     */
    constructor(client: string, options?: youtubeTogetherOptions);
    /**
     * Discord.Client
     */
    client: string;
    /**
     * @ignore
     * @private
     */
    private token;
    /**
     * Create a Youtube Together invite code (note: send the invite using markdown link)
     * @param {string} voiceChannelId
     * @param {togetherChannelOptions} [options={}] Custom Discord together option
     * @example
     * client.on('message', async message => {
     *      if (message.content === 'start') {
     *          client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
     *              return message.channel.send(`[LINK](${invite.code})`);
     *           });
     *      };
     * });
     */
    createTogetherCode(voiceChannelId: string, options?: togetherChannelOptions): Promise<{
        code: string;
    }>;
}

declare namespace DiscordTogether {
    export { youtubeTogetherOptions };
}

type togetherChannelOptions = ('youtube' | 'poker' | 'betrayal' | 'fishing');

declare namespace togetherChannelOptions {
    const youtube: string;
    const poker: string;
    const betrayal: string;
    const fishing: string;
}

declare namespace youtubeTogetherOptions {
    const token: string;
}

/**
 * YoutubeTogether options
 */
type youtubeTogetherOptions = {
    /**
     * The bot token;
     */
    token?: string;
};
