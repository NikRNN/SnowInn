import type { BuildMode, CssConfig } from "./types/config";

export function buildCss(mode: BuildMode): CssConfig {
    return {
        modules: {
            generateScopedName:
        mode === "development"
            ? "[path][name]__[local]" // для dev подробно
            : "[hash:base64:5]", // для prod сжато
        },
    };
}
