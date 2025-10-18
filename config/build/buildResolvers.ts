import type { AliasOptions } from "vite";
import type { BuildPaths } from "./types/config";

export function buildResolvers(options: BuildPaths): {
  alias: AliasOptions;
  } {
    return {
        alias: {
            src: options.src,
            app: options.app,
            shared: options.shared,
            entities: options.entities,
            features: options.features,
            pages: options.pages,
            widgets: options.widgets,
        },
    };
}
