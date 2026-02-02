import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export type BuildMode = "development" | "production";

export type CssConfig = {
    modules: {
        generateScopedName: string
    }
}

export type VitestConfig = {

        globals: boolean,
        environment: "jsdom",
        define?: Record<string, string>

}

export interface BuildPaths {
  build: string;
  src: string;
  app: string;
  shared: string;
  entities: string;
  features: string;
  pages: string;
  widgets: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;

}

export const buildPaths: BuildPaths = {
    build: "build",
    src: path.resolve(__dirname, "../../../src"),
    app: path.resolve(__dirname, "../../../src/app"),
    shared: path.resolve(__dirname, "../../../src/shared"),
    entities: path.resolve(__dirname, "../../../src/entities"),
    features: path.resolve(__dirname, "../../../src/features"),
    pages: path.resolve(__dirname, "../../../src/pages"),
    widgets: path.resolve(__dirname, "../../../src/widgets"),
};
