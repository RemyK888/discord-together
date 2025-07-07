import { Snowflake } from 'discord.js';

/**
 * Mapping of application names to their Discord Snowflake IDs.
 */
export type ApplicationConfig = Record<string, Snowflake>;

/**
 * Response structure for an application invite code.
 */
export interface ApplicationInviteCodeResponse {
  code: string;
  error: never;
}
