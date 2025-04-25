import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';
import path from 'path';
const __dirname = import.meta.dirname;

const write = async () => {
  stdin.pipe(
    createWriteStream(path.join(__dirname, 'files', 'fileToWrite.txt'), 'utf-8')
  );
};

await write();
