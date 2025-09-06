import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export type BuildMode = "development" | "production";

export interface BuildPaths {
  build: string;
  src: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
}

export const buildPaths: BuildPaths = {
  build: "build",
  src: path.resolve(__dirname, "./src"),
};
