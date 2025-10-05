import type { BuildMode } from "./types/config";

export function buildDefine(options: BuildMode) {
    const isDev = options === "development";

    return {
        __IS_DEV: isDev,
    };
}
