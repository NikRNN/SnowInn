import type { AliasOptions } from "vite";
import type { BuildPaths } from "./types/config";
// import {buildPaths} from './types/config'
// import path from "path";
// import { fileURLToPath } from "url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

export function buildResolvers(options: BuildPaths): {
  alias: AliasOptions;
  extensions: string[];
} {
  return {
    alias: {
      "@": options.src,
    },
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
  };
}
