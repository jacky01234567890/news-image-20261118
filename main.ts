// news-image-20261118: a program that writes one image summing up the world news
// of Wednesday 18 November 2026 to /output/entry.png.
//
// The image is drawn by tools/make_image.py (a front page: the first-ever
// Trump-Xi-Putin meeting, the Iran strikes, the new Gaza operation, Cyclone Akvan,
// the US tech outage, and the day's briefs) and committed here as entry.png, so
// this program only has to copy it. That keeps the run deterministic: two runs
// write the same bytes, with no network.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
