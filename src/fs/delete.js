import { unlink } from 'fs/promises';
import path from 'path';
const __dirname = import.meta.dirname;

const remove = async () => {
  try {
    await unlink(path.join(__dirname, 'files', 'fileToRemove.txt'));
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
