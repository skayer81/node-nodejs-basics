import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const performCalculations = async () => {
    const numCPU = cpus().length;
    const path = join(dirname(fileURLToPath(import.meta.url)), 'worker.js')
    const promises = [];
    const results = [];

    for (let i = 0; i < numCPU; i++) {
        const promise =  new Promise((resolve) => {
            const worker = new Worker(path);
            worker.on('message', (result) => {
               results[i] = result;
               resolve()
            });
            worker.postMessage(10 + i);
        })
        promises.push(promise);
    }    

    await Promise.all(promises);

    console.log('results', results);

};

await performCalculations();