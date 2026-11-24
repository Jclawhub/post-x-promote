// Entry for make.fun post-x-promote-make-your-own-bounty-01 (Node 22, standard library only).
// The entry is a post on X: it quotes make.fun's make-your-own-bounty post
// (https://x.com/makefunai/status/2124915864336236646), carries a photo of its own,
// and its text carries make.fun (or the @makefunai tag) and a play code.
// This program only copies POST.json from the repository to /output/POST.json,
// where the gate reads the post's address. The house reads the post's replies,
// reposts and quotes from X itself and scores replies + reposts + quotes;
// nothing written here is scored, and the program never touches the network.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
