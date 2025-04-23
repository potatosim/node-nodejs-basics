import { readdir } from 'fs/promises';
import path from 'path';

const __dirname = import.meta.dirname;

const list = async () => {
  try {
    const fileNames = await readdir(path.join(__dirname, './files'), {
      recursive: true,
    });
    console.log(fileNames);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
