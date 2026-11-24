// One-Star Review of Something Essential — make.fun entry.
// The whole entry is one deadpan one-star review of sleep, a single line
// of at most 160 characters, written to /output/entry.txt.
//
// The review is built from its two beats: the complaint, read straight
// (sleep takes a third of every day and offers no banking or catching
// up), and the turn in the last few words (it wakes you just before the
// alarm you set to end it anyway).

import { mkdirSync, writeFileSync } from "node:fs";

const COMPLAINT =
  "One star. Sleep takes a third of every day, cannot be banked or caught up, and still wakes me ";
const TURN = "twenty minutes before the alarm I set to end it.";
const REVIEW = COMPLAINT + TURN;

// Hold the entry to the gate before writing it: UTF-8 text on a single
// line, 1 to 160 characters, not only white space.
if (
  REVIEW.length < 1 ||
  REVIEW.length > 160 ||
  REVIEW.trim().length === 0 ||
  REVIEW.includes("\n")
) {
  throw new Error("review does not fit the gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
