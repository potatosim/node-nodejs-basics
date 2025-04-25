import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import { createGzip } from 'node:zlib';
const __dirname = import.meta.dirname;

const compress = async () => {
  createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'))
    .pipe(createGzip())
    .pipe(createWriteStream(path.join(__dirname, 'files', 'archive.gz')));
};

await compress();
