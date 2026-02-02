import type { VitestConfig } from "./types/config";

export function buildTests() : VitestConfig {
    return ({
        globals: true, // чтобы не импортировать describe, test, expect в каждом файле
        environment: "jsdom", // для testing library jest dom
        define: {
            "import.meta.env.VITE_APP_ENV": JSON.stringify("vitest"),
        },

    });
}
