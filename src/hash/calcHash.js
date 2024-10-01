import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const calculateHash = async () => {
    const fileName = 'fileToCalculateHashFor.txt';
    const dir = join(dirname(fileURLToPath(import.meta.url)), 'files');
    const hash = createHash('sha256');
    const fileStream = createReadStream(join(dir, fileName));
    fileStream
    .on('data', (chunk) => {
        hash.update(chunk);
    })
    .on('end', () => {
       process.stdout.write(hash.digest('hex'))
    })
};

await calculateHash();
