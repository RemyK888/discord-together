const fetch = require('node-fetch');

/**
 * YoutubeTogether options
 * @typedef {object} youtubeTogetherOptions
 * @property {string} [token='none'] The bot token;
 */
const youtubeTogetherOptions = {
    token: 'none'
};

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
    fishing: 'fishing'
};

/**
 * Class symbolizing a YoutubeTogether
 */
class DiscordTogether {
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
    constructor(client, options = {}) {
        if (!client) {
            throw new SyntaxError('Invalid Discord.Client !');
        };
        if (!options || !options.token || options.token === 'none') {
            throw new SyntaxError('Invalid token !');
        };
        /**
         * Discord.Client
         */
        this.client = client;
        /**
         * @ignore
         * @private
         */
        this.token = options.token;
    };

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
    async createTogetherCode(voiceChannelId, options = {}) {
        /**
         * @param {string} code The invite link (only use the blue link)
         */
        let returnData = {
            code: 'none'
        };
        if (options && options.toLowerCase() == 'youtube' || options.toLowerCase() == 'poker' || options.toLowerCase() == 'betrayal' || options.toLowerCase() == 'fishing') {
            switch (options) {
                case 'youtube':
                    try {
                        await fetch(`https://discord.com/api/v8/channels/${voiceChannelId}/invites`, {
                            method: 'POST',
                            body: JSON.stringify({
                                max_age: 86400,
                                max_uses: 0,
                                target_application_id: '755600276941176913',
                                target_type: 2,
                                temporary: false,
                                validate: null
                            }),
                            headers: {
                                'Authorization': `Bot ${this.token}`,
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
                        throw new Error('An error occured while starting Youtube together !');
                    }
                    break;
                case 'poker':
                    try {
                        await fetch(`https://discord.com/api/v8/channels/${voiceChannelId}/invites`, {
                            method: 'POST',
                            body: JSON.stringify({
                                max_age: 86400,
                                max_uses: 0,
                                target_application_id: '755827207812677713',
                                target_type: 2,
                                temporary: false,
                                validate: null
                            }),
                            headers: {
                                'Authorization': `Bot ${this.token}`,
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
                        throw new Error('An error occured while starting poker together !');
                    }
                    break;
                case 'betrayal':
                    try {
                        await fetch(`https://discord.com/api/v8/channels/${voiceChannelId}/invites`, {
                            method: 'POST',
                            body: JSON.stringify({
                                max_age: 86400,
                                max_uses: 0,
                                target_application_id: '773336526917861400',
                                target_type: 2,
                                temporary: false,
                                validate: null
                            }),
                            headers: {
                                'Authorization': `Bot ${this.token}`,
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
                        throw new Error('An error occured while starting betrayal together !');
                    }
                    break;
                case 'fishing':
                    try {
                        await fetch(`https://discord.com/api/v8/channels/${voiceChannelId}/invites`, {
                            method: 'POST',
                            body: JSON.stringify({
                                max_age: 86400,
                                max_uses: 0,
                                target_application_id: '814288819477020702',
                                target_type: 2,
                                temporary: false,
                                validate: null
                            }),
                            headers: {
                                'Authorization': `Bot ${this.token}`,
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
                    break;
            };
            return returnData;
        } else {
            throw new SyntaxError('Invalid option !');
        }
    };
};

module.exports = DiscordTogether;