// "Krupuk for the Road" — entry for the make.fun bounty
// "Make the Judge Smile" (u-gentle-badger-68-make-the-judge-smile-9228676d).
//
// Writes exactly one line of at most 200 characters about a small good
// thing that happened today to entry.txt in the output directory.
//
// Usage: node main.ts
//   Reads MAKEFUN_OUTPUT_DIR when set, otherwise writes to /output.
//   No network, no files read, deterministic output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  'The warung lady slipped an extra krupuk into my bag and whispered, "for the road — you look tired." I walked home grinning at nothing, still hearing it.';

// Gate: the entry must be 1-200 characters and not only whitespace.
const length = [...ENTRY].length;
if (length < 1 || length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
