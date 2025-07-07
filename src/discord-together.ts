import { Client, Snowflake } from 'discord.js';
import { ObjectKeys } from './types/object-keys';
import { DefaultApplicationsConfig } from './applications/config';
import { ApplicationConfig, ApplicationInviteCodeResponse } from './applications/types';

export class DiscordTogether {
  private applications: ApplicationConfig;
  private client: Client;

  constructor(client: Client, applications: ApplicationConfig = DefaultApplicationsConfig) {
    /**
     * Discord.Client
     */
    this.client = client;
    /**
     * Discord Together applications
     */
    this.applications = { ...DefaultApplicationsConfig, ...applications };
  }

  /**
   *
   * @param channelId - snowflake
   * @param option - is a key from constructor
   * @example
   * client.on('message', async message => {
   *      if (message.content === 'start') {
   *          client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
   *              return message.channel.send(`${invite.code}`); // Click the blue link
   *           });
   *      };
   * });
   * @returns {Promise<{code: string, invite: string}>}
   */
  public async createTogetherCode(
    channelId: Snowflake,
    option: ObjectKeys<typeof this.applications>,
  ): Promise<{ code: string; invite: string }> {
    const appId = this.applications[option];
    try {
      const invite = await this.fetchApplicationInviteCode(appId, channelId);
      return { code: invite.code, invite: `https://discord.com/invite/${invite.code}` };
    } catch (err) {
      throw new Error(`Something went wrong\n ${err}`);
    }
  }

  private async fetchApplicationInviteCode(appId: Snowflake, channelId: Snowflake) {
    if (!this.client.token) {
      throw new Error('Discord token is not provided inside of discord.js Client instance');
    }
    try {
      return await fetch(`https://discord.com/api/v10/channels/${channelId}/invites`, {
        method: 'POST',
        body: JSON.stringify({
          max_age: 86400,
          max_uses: 0,
          target_application_id: appId,
          target_type: 2,
          temporary: false,
          validate: null,
        }),
        headers: {
          Authorization: `Bot ${this.client.token!}`,
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((res: ApplicationInviteCodeResponse) => {
          if (res.error || !res.code) throw new Error('An error occured while retrieving data !');
          if (Number(res.code) === 50013) console.warn('Your bot lacks permissions to perform that action');
          return res;
        });
    } catch (err) {
      throw new Error(`Something went wrong \n ${err}`);
    }
  }
}
