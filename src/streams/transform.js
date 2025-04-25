import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';

const transform = async () => {
  const reverseTransform = new Transform({
    transform(data, encoding, callback) {
      callback(null, data.toString().split('').reverse().join(''));
    },
  });

  stdin.pipe(reverseTransform).pipe(stdout);
};

await transform();
