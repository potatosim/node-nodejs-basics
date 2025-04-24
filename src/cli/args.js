import { argv } from 'node:process';

const FLAG_PREFIX = '--';

const parseArgs = () => {
  for (let i = 2; i < argv.length; i++) {
    if (argv[i].startsWith(FLAG_PREFIX)) {
      const key = argv[i].replace(FLAG_PREFIX, '');
      const value = argv[i + 1];
      console.log(`${key} is ${value}`);
    }
  }
};

parseArgs();
