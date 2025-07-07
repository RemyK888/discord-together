import { Client, Snowflake } from 'discord.js';
import { ObjectKeys } from './types/object-keys';
import { DefaultApplicationsConfig } from './applications/config';
import { ApplicationConfig, ApplicationInviteCodeResponse } from './applications/types';

export class DiscordTogether<AC extends ApplicationConfig = typeof DefaultApplicationsConfig> {
  private applications: AC;
  private client: Client;

  /**
   * @param client Discord.js client instance (needs token)
   * @param applications Custom applications config (optional)
   */
  constructor(client: Client, applications: AC = DefaultApplicationsConfig as unknown as AC) {
    this.client = client;
    this.applications = applications;
  }

  /**
   * Create a Together invite code for a specific application.
   * @param channelId Voice channel ID
   * @param application Application key from config
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
      throw new Error(`Failed to create Together code: ${err}`);
    }
  }

  private async fetchApplicationInviteCode(
    appId: Snowflake,
    channelId: Snowflake,
  ): Promise<ApplicationInviteCodeResponse> {
    if (!this.client.token) {
      throw new Error('Discord token is not provided in the Client instance');
    }
    const response = await fetch(`https://discord.com/api/v10/channels/${channelId}/invites`, {
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
    });
    const res: ApplicationInviteCodeResponse = await response.json();
    if (res.error || !res.code) throw new Error('An error occurred while retrieving data!');
    if (Number(res.code) === 50013) console.warn('Your bot lacks permissions to perform that action');
    return res;
  }
}

/**
 * Factory method to create a Together code generator.
 * @param client Discord.js client instance
 * @param applications Custom applications config (optional)
 */
export function createDiscordTogether(client: Client, applications: ApplicationConfig = DefaultApplicationsConfig) {
  const instance = new DiscordTogether(client, applications);
  return instance.createTogetherCode;
}
