import type { BuildOptions } from "./types/config";

import { buildOptions } from "./buildOptions";
import { buildServer } from "./buildServer";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { buildCss } from "./buildCSS";

export function buildViteConfig(options: BuildOptions) {
  const { mode, paths } = options;

  return {
    mode,
    plugins: buildPlugins(),
    resolve: buildResolvers(paths),
    build: buildOptions(paths),
    server: buildServer(mode),
    css: buildCss(mode),
  };
}
