import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";
import svgr from "vite-plugin-svgr";

const config: StorybookConfig = {
    stories: [
        "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",

    ],
    addons: [
        "@storybook/addon-essentials",
        "@storybook/addon-viewport",
        "@storybook/addon-onboarding",
        "@storybook/addon-a11y",
        "@storybook/experimental-addon-test",

    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },

    async viteFinal(customConfig) {
        const { mergeConfig } = await import("vite");

        return mergeConfig(customConfig, {
            plugins: [
                svgr({
                    include: "**/*.svg",
                }),
            ],
            resolve: {

                alias: {
                    src: path.resolve(__dirname, "../../src"),
                    app: path.resolve(__dirname, "../../src/app"),
                    shared: path.resolve(__dirname, "../../src/shared"),
                    entities: path.resolve(__dirname, "../../src/entities"),
                    features: path.resolve(__dirname, "../../src/features"),
                    pages: path.resolve(__dirname, "../../src/pages"),
                    widgets: path.resolve(__dirname, "../../src/widgets"),
                },
            },
            // css: {
            //     postcss: null,
            //     preprocessorOptions: {
            //         scss: {
            //         // для импорта scss
            //             additionalData: " @use \"../../src/app/styles/index.scss\" ",
            //         },
            //     },
            // },
            optimizeDeps: {
                include: ["storybook-dark-mode"],
            },
        });
    },
};

export default config;
