import { cp } from 'fs/promises';
import path from 'path';

const __dirname = import.meta.dirname;

const copy = async () => {
  try {
    await cp(
      path.join(__dirname, './files'),
      path.join(__dirname, './files_copy'),
      { errorOnExist: true, recursive: true, force: false }
    );
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
