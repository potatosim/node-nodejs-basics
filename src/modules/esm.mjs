import path from 'path';
import { readFile } from 'fs/promises';
import { createServer as createServerHttp } from 'http';
import { release, version } from 'os';
import './files/c.cjs';
const __filename = import.meta.filename;
const __dirname = import.meta.dirname;

const getJSONObj = async (fileName) => {
  const jsonText = await readFile(path.join(__dirname, 'files', fileName));
  return JSON.parse(jsonText);
};

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = await getJSONObj('a.json');
} else {
  unknownObject = await getJSONObj('b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export default {
  unknownObject,
  myServer,
};
