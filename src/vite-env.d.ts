/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
interface ImportMetaEnv {
  readonly VITE_PORT: string;
  readonly VITE_API_URL: string;
  // здесь можно добавить любые другие переменные
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
