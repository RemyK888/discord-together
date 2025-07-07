import { ApplicationConfig } from './types';

interface CreateApplicationConfigOptions<EXT extends ApplicationConfig[]> {
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
 * Create a new application config, optionally extending others.
 */
export function createApplicationConfig<AC extends ApplicationConfig, EXT extends ApplicationConfig[] = []>(
  config: AC,
  options?: EXT extends [] ? never : CreateApplicationConfigOptions<EXT>,
): CreateApplicationConfigReturn<AC, EXT> {
  return (
    options?.extends ? { ...mergeApplicationOptions(options.extends), ...config } : config
  ) as CreateApplicationConfigReturn<AC, EXT>;
}
