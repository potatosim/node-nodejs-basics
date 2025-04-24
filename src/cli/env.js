import { env } from 'node:process';

const PARSER_PREFIX = 'RSS_';

const parseEnv = () => {
  Object.entries(env).forEach(
    ([key, value]) =>
      key.startsWith(PARSER_PREFIX) && console.log(`${key}=${value}`)
  );
};

parseEnv();
