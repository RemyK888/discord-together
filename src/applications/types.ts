import { Snowflake } from 'discord.js';

export type ApplicationConfig = Record<string, Snowflake>;

export interface ApplicationInviteCodeResponse {
  code: string;
  error: never;
}
