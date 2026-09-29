import { transformAsync } from "@babel/core";
import type { Plugin } from "vite";
import { createFilter } from "@rollup/pluginutils";

import {
    productionOptimizerPlugin,
    type ProductionOptimizerOptions,
} from "../babel";

export function productionOptimizerVitePlugin(
    options: ProductionOptimizerOptions,
): Plugin {

    return {
        name: "production-optimizer-vite",

        enforce: "pre",

        async transform(code, id) {

            const filter = createFilter(/\.(jsx|tsx)$/);

            if (!filter(id)) {
                return null;
            }

            if (id.includes("node_modules")) {
                return null;
            }

            const result = await transformAsync(code, {
                filename: id,

                babelrc: false,
                configFile: false,
                parserOpts: {
                    sourceType: "module",
                    plugins: [
                        "typescript",
                        "jsx",
                    ],
                },

                plugins: [
                    [
                        productionOptimizerPlugin,
                        options,
                    ],
                ],

                sourceMaps: true,
            });

            if (!result?.code) {
                return null;
            }

            return {
                code: result.code,
                map: result.map,
            };
        },
    };
}