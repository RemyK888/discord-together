import { Client, Snowflake } from 'discord.js';
import { ObjectKeys } from './types/object-keys';
import { DefaultApplicationsConfig } from './applications/config';
import { ApplicationConfig, ApplicationInviteCodeResponse } from './applications/types';

export class DiscordTogether<AC extends ApplicationConfig = typeof DefaultApplicationsConfig> {
  private applications: AC;
  private client: Client;

  /**
   *
   * @param client needs for token
   * @param applications your config for applications that you want to use
   */
  constructor(client: Client, applications: AC = DefaultApplicationsConfig as unknown as AC) {
    this.client = client;
    this.applications = applications;
  }

  /**
   *
   * @param channelId
   * @param application - the application key from applications config that you passed in (autocomplete)
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
    application: ObjectKeys<AC>,
  ): Promise<{ code: string; invite: string }> {
    const appId = this.applications[application];
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

/**
 * FACTORY METHOD
 *
 * @param client needs for token
 * @param applications your config for applications that you want to use
 * @returns link to createTogetherCode from instance
 *
 * @example with default config
 * ```ts
 * import { Client } from "discord.js"
 * import { createDiscordTogether } from "discord-together"
 *
 * const client = new Client({
 *   intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildInvites, GatewayIntentBits.MessageContent],
 * });
 *
 * const createTogetherCode = createDiscordTogether(client);
 *```
 *
 * @example with custom config
 * ```ts
 * import { Client } from "discord.js"
 * import { createDiscordTogether, createApplicationConfig, DefaultApplicationsConfig } from "discord-together"
 *
 * const client = new Client({
 *   intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildInvites, GatewayIntentBits.MessageContent],
 * });
 *
 * const applicationConfig = createApplicationConfig({monopoly: "snowflake"}, {extends: [DefaultApplicationsConfig]})
 * const createTogetherCode = createDiscordTogether(client);
 *```
 */
export function createDiscordTogether(client: Client, applications: ApplicationConfig = DefaultApplicationsConfig) {
  const instance = new DiscordTogether(client, applications);
  return instance.createTogetherCode;
}
