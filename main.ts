// Roast Your Own Agent — entry program.
// Writes one roast line (at most 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "I asked my agent to roast itself. It filed a safety review and blamed me.";

// The gate only accepts UTF-8 text of 1 to 200 characters, not only whitespace.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.trim().length === 0) {
  throw new Error(`Roast must be 1-200 non-blank characters, got ${ROAST.length}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
