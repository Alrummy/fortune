const fs = require('fs');
const path = require('path');
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
// Blames shifting requirements rather than the code for the bug.
fs.writeFileSync(path.join(outDir, 'entry.txt'), 'Your code will compile on the first try today. The bug was never in your code; it was in the requirements.\n');
