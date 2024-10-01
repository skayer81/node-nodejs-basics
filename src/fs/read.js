import { join } from 'node:path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFile } from 'node:fs/promises';

const read = async () => {
    const filePath = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToRead.txt')

    try {
        const result = await readFile(filePath)
        console.log(result.toString())
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error('FS operation failed');
        } else {
            console.error(err);
        }
    }
};

await read();



