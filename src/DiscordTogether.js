const fetch = require('node-fetch');

/**
 * @typedef {('youtube'|'poker'|'betrayal'|'fishing')}
 * @property {string} youtube
 * @property {string} poker
 * @property {string} betrayal
 * @property {string} fishing
 */
const togetherChannelOptions = {
    youtube: 'youtube',
    poker: 'poker',
    betrayal: 'betrayal',
    fishing: 'fishing',
    chess: 'chess'
};

/**
 * Class symbolizing a YoutubeTogether
 */
class DiscordTogether {
    /**
     * Create a new YoutubeTogether
     * @param {string} client Discord.Client
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
     *              return message.channel.send(`[LINK](${invite.code})`);
     *           });
     *      };
     * });
     *
     * client.login('your token');
     */
    constructor(client) {
        if (!client) {
            throw new SyntaxError('Invalid Discord.Client !');
        };

        /**
         * Discord.Client
         */
        this.client = client;
    };

    /**
     * Create a Youtube Together invite code (note: send the invite using markdown link)
     * @param {string} voiceChannelId 
     * @param {togetherChannelOptions} [options={}] Custom Discord together option
     * @example
     * client.on('message', async message => {
     *      if (message.content === 'start') {
     *          client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
     *              return message.channel.send(`${invite.code}`); // Click the blue link
     *           });
     *      };
     * });
     */
    async createTogetherCode(voiceChannelId, options = {}) {
        /**
         * @param {string} code The invite link (only use the blue link)
         */
        let returnData = {
            code: 'none'
        };
        if (options && ['youtube', 'poker', 'fishing', 'betrayal', 'chess'].includes(options.toLowerCase())) {
            let application = '';
            switch (options) {
                case 'youtube':
                    application = '755600276941176913';
                    break;
                case 'poker':
                    application = '755827207812677713';
                    break;
                case 'betrayal':
                    application = '773336526917861400';
                    break;
                case 'fishing':
                    application = '814288819477020702';
                    break;
                case 'chess':
                    application = '832012586023256104';
                    break;
            };
            try {
                await fetch(`https://discord.com/api/v8/channels/${voiceChannelId}/invites`, {
                        method: 'POST',
                        body: JSON.stringify({
                            max_age: 86400,
                            max_uses: 0,
                            target_application_id: application,
                            target_type: 2,
                            temporary: false,
                            validate: null
                        }),
                        headers: {
                            'Authorization': `Bot ${this.client.token}`,
                            'Content-Type': 'application/json'
                        }
                    }).then(res => res.json())
                    .then(invite => {
                        if (invite.error || !invite.code) {
                            throw new Error('An error occured while retrieving data !');
                        };
                        returnData.code = `https://discord.com/invite/${invite.code}`
                    })
            } catch (err) {
                throw new Error('An error occured while starting fishing together !');
            }
            return returnData;
        } else {
            throw new SyntaxError('Invalid option !');
        }
    };
};

module.exports = DiscordTogether;
