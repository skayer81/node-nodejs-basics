import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { resolve, join } from 'node:path';

const read = async () => {

    const dir = join(dirname(fileURLToPath(import.meta.url)), 'files')
    const stream = createReadStream(resolve(dir, 'fileToRead.txt'));

    stream.on('data', (chank) => {
        process.stdout.write(chank)
    }); 
    
};

await read();

