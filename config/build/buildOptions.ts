import { type UserConfig } from "vite";
import type { BuildPaths } from "./types/config";

export function buildOptions(options: BuildPaths): UserConfig["build"] {
  return {
    outDir: options.build,
    emptyOutDir: true,
    // rollupOptions: {
    //   output: {
    //     manualChunks(id) {
    //       // все ленивые страницы в отдельные чанки
    //       if (id.includes("pages/")) {
    //         return id
    //           .split("pages/")[1] // берём путь после pages/
    //           .split("/")[0]; // берём имя файла или папки
    //       }
    //     },
    //   },
    // },
  };
}
