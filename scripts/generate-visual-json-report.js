import fs from "node:fs/promises";
import { join, relative } from "node:path";

const lokiDir = join(__dirname, "..", ".loki");
const actualDir = join(lokiDir, "current");
const expectedDir = join(lokiDir, "reference");
const diffDir = join(lokiDir, "difference");

(async () => {
    const diffs = await fs.readdir(diffDir);

    await fs.writeFile(
        join(lokiDir, "report.json"),
        JSON.stringify({
            newItems: [],
            deletedItems: [],
            passedItems: [],
            failedItems: diffs,
            expectedItems: diffs,
            actualItems: diffs,
            diffItems: diffs,
            actualDir: relative(lokiDir, actualDir),
            expectedDir: relative(lokiDir, expectedDir),
            diffDir: relative(lokiDir, diffDir),
        }),
    );
})();