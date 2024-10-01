import { resolve, join } from 'node:path';
import { unlink } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const remove = async () => {
    unlink(join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToRemove.txt'))
     .then()
     .catch((err) => {
        if (err.code === 'ENOENT') {
            console.error('FS operation failed');
        } else {
            console.error(err);
        }
    })
};

await remove();

// fileToRemove.txt