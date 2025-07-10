import { Client } from 'discord.js';
import { DiscordTogether } from './DiscordTogether';
import { ApplicationConfig, DefaultApplicationsConfig } from './applications';

/**
 * Factory method to create a Together code generator.
 * @param client Discord.js client instance
 * @param applications Custom applications config (optional)
 */
export function createDiscordTogether<AC extends ApplicationConfig = typeof DefaultApplicationsConfig>(
  client: Client,
  applications: ApplicationConfig = DefaultApplicationsConfig,
) {
  const instance = new DiscordTogether<AC>(client, applications as unknown as AC);
  return instance.createTogetherCode;
}
