import { spawn } from 'node:child_process';
import { stdin, stdout } from 'node:process';
import path from 'path';
const __dirname = import.meta.dirname;

const spawnChildProcess = async (args) => {
  const child = spawn(
    'node',
    [path.join(__dirname, 'files', 'script.js'), ...args],
    {
      stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
    }
  );

  stdin.pipe(child.stdin);
  child.stdout.pipe(stdout);
};

spawnChildProcess(['example1', 2, false]);
