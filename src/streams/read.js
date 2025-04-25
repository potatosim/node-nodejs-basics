import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import path from 'path';
const __dirname = import.meta.dirname;

const read = async () => {
  createReadStream(
    path.join(__dirname, 'files', 'fileToRead.txt'),
    'utf-8'
  ).pipe(stdout);
};

await read();
