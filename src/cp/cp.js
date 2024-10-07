import { fork } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const path = join(dirname(fileURLToPath(import.meta.url)), 'files',  'script.js')

const spawnChildProcess = async (args) => {
    const child = fork(path, args);
};

spawnChildProcess(  ['someArgument1', 'someArgument2', '...']);
