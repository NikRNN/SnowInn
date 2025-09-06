import { defineConfig } from "vite";
import { buildViteConfig } from "./config/build/buildViteConfig";
import { buildPaths } from "./config/build/types/config";

export default defineConfig(({ mode }) => {
  return buildViteConfig({
    mode: mode as "development" | "production",
    paths: buildPaths,
  });
});
