import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { fileURLToPath } from 'url';
import { join,dirname } from 'node:path';
   
const compress = async () => {
    const fileName = 'fileToCompress.txt';
    const archiveName = 'archive.gz';
    const dir = join(dirname(fileURLToPath(import.meta.url)), 'files')
    const gzip = createGzip();
    const source = createReadStream(join(dir, fileName));
    const destination = createWriteStream(join(dir, archiveName));
    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error(err);
        }
    });
};

await compress();