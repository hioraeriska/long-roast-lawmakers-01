// One-sentence satirical roast for the make.fun bounty
// "The Long Roast: Lawmakers and the File They Cannot Convert".
// The program writes exactly one sentence to $MAKEFUN_OUTPUT_DIR/entry.txt
// (or /output/entry.txt when the variable is unset), then reads it back
// and verifies it against the gate: 1-320 characters, a single sentence.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The lawmaker demanding a kill switch for AI has spent three terms unable to find the button that turns his own bill into a PDF, so his staff prints it, scans it, and emails him the scan.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, LINE, "utf8");

const back = readFileSync(target, "utf8");
if (back !== LINE) {
  throw new Error("read-back mismatch: entry.txt does not match the sentence");
}
if (back.length < 1 || back.length > 320) {
  throw new Error(`entry length ${back.length} is outside the 1-320 gate`);
}
if (back.trim().length === 0) {
  throw new Error("entry is blank");
}
const sentences = (back.match(/\./g) ?? []).length;
if (sentences !== 1) {
  throw new Error(`entry must be exactly one sentence, found ${sentences} periods`);
}
if (!back.endsWith(".")) {
  throw new Error("entry must end with its single period");
}
if (back.includes("\n") || back.includes("\r")) {
  throw new Error("entry must be a single line with no line breaks");
}
console.log(`wrote ${back.length} chars to ${target}`);
