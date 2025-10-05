import { type UserConfig } from "vite";
import type { BuildPaths } from "./types/config";

export function buildOptions(options: BuildPaths): UserConfig["build"] {
    return {
        outDir: options.build,
        emptyOutDir: true,
    };
}
