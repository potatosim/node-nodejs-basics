import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import { createGunzip } from 'node:zlib';
const __dirname = import.meta.dirname;

const decompress = async () => {
  createReadStream(path.join(__dirname, 'files', 'archive.gz'))
    .pipe(createGunzip())
    .pipe(
      createWriteStream(path.join(__dirname, 'files', 'fileToCompress.txt'))
    );
};

await decompress();
