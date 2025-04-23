import { writeFile } from 'fs/promises';
import path from 'path';
const __dirname = import.meta.dirname;

const create = async () => {
  try {
    await writeFile(
      path.join(__dirname, 'files', 'fresh.txt'),
      'I am fresh and young',
      {
        flag: 'wx',
      }
    );
  } catch {
    throw new Error('FS operation failed');
  }
};

await create();
