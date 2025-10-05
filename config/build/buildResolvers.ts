import type { AliasOptions } from "vite";
import type { BuildPaths } from "./types/config";

// import path from "path";

export function buildResolvers(options: BuildPaths): {
  alias: AliasOptions;
  // extensions: string[];
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
    // extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
    };
}
