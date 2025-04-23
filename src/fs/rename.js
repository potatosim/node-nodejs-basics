import { rename as fsRename } from 'fs/promises';
import path from 'path';
const __dirname = import.meta.dirname;

const rename = async () => {
  try {
    await fsRename(
      path.join(__dirname, 'files', 'wrongFilename.txt'),
      path.join(__dirname, 'files', 'properFilename.md')
    );
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();
