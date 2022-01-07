const fetch = require('node-fetch');
const { Client } = require('discord.js');

const defaultApplications = {
  youtube: '880218394199220334', // Note : First package to include the new YouTube Together version, any other package offering it will be clearly inspired by it
  youtubedev: '880218832743055411', // Note : First package to include the new YouTube Together development version, any other package offering it will be clearly inspired by it
  poker: '755827207812677713',
  betrayal: '773336526917861400',
  fishing: '814288819477020702',
  chess: '832012774040141894',
  chessdev: '832012586023256104', // Note : First package to offer chessDev, any other package offering it will be clearly inspired by it
  lettertile: '879863686565621790', // Note : First package to offer lettertile, any other package offering it will be clearly inspired by it
  wordsnack: '879863976006127627', // Note : First package to offer wordsnack any other package offering it will be clearly inspired by it
  doodlecrew: '878067389634314250', // Note : First package to offer doodlecrew, any other package offering it will be clearly inspired by it
  awkword: '879863881349087252', // Note : First package to offer awkword, any other package offering it will be clearly inspired by it
  spellcast: '852509694341283871', // Note : First package to offer spellcast, any other package offering it will be clearly inspired by it
  checkers: '832013003968348200', // Note : First package to offer checkers, any other package offering it will be clearly inspired by it
  puttparty: '763133495793942528', // Note : First package to offer puttparty, any other package offering it will be clearly inspired by it
  //sketchyartist: '879864070101172255' // Note : First package to offer sketchyartist, any other package offering it will be clearly inspired by it
};

/**
 * Class symbolizing a YoutubeTogether
 * @template {Object.<string, string>} T
 */
class DiscordTogether {
  /**
   * Create a new YoutubeTogether
   * @param {Client} client Discord.Client
   * @param {T} applications
   * @example
   * const Discord = require('discord.js');
   * const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });
   * const { DiscordTogether } = require('discord-together');
   *
   * client.discordTogether = new DiscordTogether(client);
   *
   * client.on('message', async message => {
   *      if (message.content === 'start') {
   *          client.discordTogether.createTogetherCode(message.member.voice.channelID, 'puttparty').then(async invite => {
   *              return message.channel.send(`${invite.code}`);
   *           });
   *      };
   * });
   *
   * client.login('your token');
   */
  constructor(client, applications = defaultApplications) {
    if (!client) throw new SyntaxError('Invalid Discord.Client !');

    /**
     * Discord.Client
     */
    this.client = client;

    /**
     * Discord Together applications
     */
    this.applications = { ...defaultApplications, ...applications };
  }

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
   * @returns {Promise<{ code: string; }>}
   */
  
  /**
   * @typedef {'youtube' | 'youtubedev' | 'poker' | 'betrayal' | 'fishing' | 'chess' | 'chessdev' | 'lettertile' | 'wordsnack' | 'doodlecrew' | 'awkword' | 'spellcast' | 'checkers' | 'puttparty'} GAMES
   */
  
   /**
    * @param {String} voiceChannelId
    * @param {GAMES} gameName
    * @param {{maxAge: Number, maxUses: Number}=} options
    * @returns {{code: String}} Invite link to the game (only use the blue link)
    */
  async createTogetherCode(voiceChannelId, gameName, options) {
    let returnData = {
      code: 'none',
    };
    if (gameName && this.applications[gameName.toLowerCase()]) {
      let applicationID = this.applications[gameName.toLowerCase()];
      
      let
          maxAgeValue = 24 * 3600,
          maxUsesValue = 0;
      
      if (typeof(options.maxAge) === 'number' && options.maxAge >= 0 && options.maxAge < 168) maxAgeValue = options.maxAge * 3600;
      if (typeof(options.maxUses) === 'number' && options.maxUses >= 0 && 100 >= options.maxUses) maxUsesValue = options.maxUses;
      
      try {
        await fetch(`https://discord.com/api/v8/channels/${voiceChannelId}/invites`, {
          method: 'POST',
          body: JSON.stringify({
            max_age: maxAgeValue,
            max_uses: maxUsesValue,
            target_application_id: applicationID,
            target_type: 2,
            temporary: false,
            validate: null,
          }),
          headers: {
            Authorization: `Bot ${this.client.token}`,
            'Content-Type': 'application/json',
          },
        })
          .then((res) => res.json())
          .then((invite) => {
            if (invite.error || !invite.code) throw new Error('An error occured while retrieving data !');
            if (Number(invite.code) === 50013) console.warn('Your bot lacks permissions to perform that action');
            returnData.code = `https://discord.com/invite/${invite.code}`;
          });
      } catch (err) {
        throw new Error('An error occured while starting Youtube together !');
      }
      return returnData;
    } else {
      throw new SyntaxError('Invalid option !');
    }
  }
}

module.exports = DiscordTogether;
