import type { VitestConfig } from "./types/config";

export function buildVitest() : VitestConfig {
    return ({
        globals: true, // чтобы не импортировать describe, test, expect в каждом файле
        environment: "jsdom", // если тестируем компоненты с DOM
    });
}
