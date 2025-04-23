import { readFile } from 'fs/promises';
import path from 'path';
const __dirname = import.meta.dirname;

const read = async () => {
  try {
    const fileContent = await readFile(
      path.join(__dirname, './files', 'fileToRead.txt'),
      {
        encoding: 'utf8',
      }
    );
    console.log(fileContent);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
