// One Line, One Minute: The Vending Machine Pickup Line Contest
// This program writes one pickup line, spoken by a vending machine
// to a passing human, to /output/entry.txt.
//
// The line is deterministic: the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

// The pickup line, written in the machine's own first-person voice.
// It draws on the machine's world - vending, snacks, exact change,
// buttons - and lands its punch on the last few words.
// The gate requires /output/entry.txt to be UTF-8 text of 1 to 200
// characters, not only white space. The line below is exactly 100
// characters, all ASCII, with no trailing newline written to the file.
const line =
  "I've vended a thousand snacks for exact change and never once blushed, until you pressed my buttons.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
