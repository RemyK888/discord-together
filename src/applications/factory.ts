import { DefaultApplicationsConfig } from './config';
import { ApplicationConfig } from './types';

interface CreateApplicationConfigOptions<EXT extends ApplicationConfig[]> {
  /**
   * Array of Application configs to merge with custom
   */
  extends: EXT;
}

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

function mergeApplicationOptions<T extends readonly ApplicationConfig[]>(arr: T): UnionToIntersection<T[number]> {
  return arr.reduce((acc, obj) => ({ ...acc, ...obj }), {} as any);
}

type CreateApplicationConfigReturn<AC extends ApplicationConfig, EXT extends ApplicationConfig[] = []> = EXT extends []
  ? AC
  : AC & UnionToIntersection<EXT[number]>;

/**
 *
 * @param config - your custom config that you want to use
 * @param options
 * @example
 *
 * import { createApplicationConfig, DefaultApplicationsConfig } from "discord-together"
 *
 * const configWithoutExtend = createApplicationConfig({monopoly: "snowflake"})
 * const configWithExtend = createApplicationConfig({sigame: "snowflake"}, {extends: [configWithoutExtend, DefaultApplicationsConfig]})
 *
 * @returns { ApplicationConfig }
 */
export function createApplicationConfig<AC extends ApplicationConfig, EXT extends ApplicationConfig[] = []>(
  config: AC,
  options?: EXT extends [] ? never : CreateApplicationConfigOptions<EXT>,
): CreateApplicationConfigReturn<AC, EXT> {
  return (
    options?.extends ? { ...mergeApplicationOptions(options.extends), ...config } : config
  ) as CreateApplicationConfigReturn<AC, EXT>;
}
