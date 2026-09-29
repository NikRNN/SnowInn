import { type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import progress from "vite-plugin-progress";
import svgr from "vite-plugin-svgr";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import { analyzer } from "vite-bundle-analyzer";
import tailwindcss from "@tailwindcss/vite";
import type { BuildMode } from "./types/config";
import { productionOptimizerVitePlugin } from "./plugins/vite";

export function buildPlugins(options: BuildMode): PluginOption[] {
    const isProd = options === "production";
    return [
        react(),
        progress(),
        svgr({
            // экспорт по умолчанию как React компонент
            include: "**/*.svg",
        }),
        isProd && ViteMinifyPlugin({}),
        analyzer({
            openAnalyzer: false,
        }),
        tailwindcss(),
        isProd && productionOptimizerVitePlugin({
            removeProps: [
                "data-testid",
            ],
            removeConsole: [
                "log"
            ]
        })
    ];
}
