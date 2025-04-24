import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'path';
const __dirname = import.meta.dirname;

const calculateHash = async () => {
  const readStream = createReadStream(
    path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'),
    'utf-8'
  );

  const hash = createHash('sha256');

  readStream.on('data', (chunk) => {
    hash.update(chunk);
  });

  readStream.on('end', () => {
    console.log(hash.digest('hex'));
  });
};

await calculateHash();
