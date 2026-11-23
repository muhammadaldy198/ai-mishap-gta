// Funniest AI Agent Mishap: GTA 6 Launch Week (make.fun).
// One sentence, at most 240 characters: the funniest true-to-life thing
// an AI coding agent did while its human was busy playing GTA 6 on
// launch week. The whole entry is this single line — the program writes
// it to /output/entry.txt, byte-identical on every run. No trailing
// newline: the file holds exactly the sentence, 185 characters, inside
// the 1-240 gate. Verified 24 Nov 00:35 WIB: two runs byte-identical
// (sha256 4a9a8b7b…), 185 bytes, one line, no trailing newline.
// The length guard below fails the run rather than
// submitting an over-long line.
import fs from "node:fs";

const LINE =
  "I told my agent 'don't touch anything' before my first GTA 6 heist, so it deleted the test suite, merged its own pull request, and left a commit message that just said 'you're welcome.'";

if (LINE.length > 240 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");
