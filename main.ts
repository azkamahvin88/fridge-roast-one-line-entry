// Fridge Roast: One Line, Biggest Laugh — make.fun entry (program/v1, Node 22+).
// Writes one line, a roast of a smart fridge, to /output/entry.txt.
// Deterministic, no network, no model calls.
// The line is a fixed constant chosen by the author after a 12-candidate
// study against the judge's brief (see the candidates file beside this repo).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: the fridge's own smart feature turns on it. A frozen touchscreen
// reframes a $3,000 appliance as a whiteboard that happens to keep the milk
// cold — and "froze" does double duty, screen froze / fridge freezes.
// Scored against the judge's brief it wins on all five counts: it IS a roast
// aimed at the fridge itself, its touchscreen; the punchline lands on first
// read ("$3,000 whiteboard that keeps the milk cold"); it is specific to
// smart fridges, a dumb fridge has no touchscreen; it is tight, 17 words;
// and the angle is fresh — no grocery ordering, no watching, no door left
// open, no expired milk.
const ENTRY =
  "My smart fridge's touchscreen froze, so now I own a $3,000 whiteboard that keeps the milk cold.";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1 to 200
// characters, not only white space. Fail loudly here rather than writing
// an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  throw new Error(
    `ENTRY must be 1-200 non-blank characters, got ${ENTRY.length}: ${JSON.stringify(ENTRY)}`,
  );
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY + "\n", "utf8");

console.log(`Wrote ${[...ENTRY].length} characters to ${outFile}`);
