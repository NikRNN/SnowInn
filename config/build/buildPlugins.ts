import { type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import progress from "vite-plugin-progress";
import svgr from "vite-plugin-svgr";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import { analyzer } from "vite-bundle-analyzer";

export function buildPlugins(): PluginOption[] {
    return [
        react(),
        progress(),
        svgr({
            // экспорт по умолчанию как React компонент
            include: "**/*.svg",

        }),
        ViteMinifyPlugin({}),
        analyzer({
            openAnalyzer: false,
        }),
    ];
}
