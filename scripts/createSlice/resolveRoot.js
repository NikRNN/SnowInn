import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (...segments) => path.resolve(__dirname, "..", "..", ...segments); //выхожу до корня проекта
