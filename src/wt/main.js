import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';
import path from 'path';

const __dirname = import.meta.dirname;

const performCalculations = async () => {
  const coresNumber = cpus().length;

  const workerPath = path.join(__dirname, 'worker.js');

  const workerPromises = [];

  for (let i = 0; i < coresNumber; i++) {
    const numberToSend = 10 + i;

    const workerPromise = new Promise((resolve) => {
      const worker = new Worker(workerPath);

      worker.on('message', (result) => {
        worker.terminate();
        resolve({ status: 'resolved', data: result });
      });

      worker.on('error', () => {
        worker.terminate();
        resolve({ status: 'error', data: null });
      });

      worker.postMessage(numberToSend);
    });

    workerPromises.push(workerPromise);
  }

  const resultArr = await Promise.all(workerPromises);

  console.log(resultArr);
};

await performCalculations();
