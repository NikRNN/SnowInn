import { type UserConfig } from "vite";
import { loadEnv } from "vite";

export function buildServer(mode: string): UserConfig["server"] {
  const env = loadEnv(mode, process.cwd());

  const port = Number(env.VITE_PORT) || 3000;

  return {
    open: true,
    port,
  };
}
