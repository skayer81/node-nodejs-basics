import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { fileURLToPath } from 'url';
import { join,dirname } from 'node:path';

const decompress = async () => {
    const fileName = 'fileToCompress.txt';
    const archiveName = 'archive.gz';
    const dir = join(dirname(fileURLToPath(import.meta.url)), 'files')
    const gzip = createGunzip();
    const source = createReadStream(join(dir, archiveName));
    const destination = createWriteStream(join(dir, fileName));
    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error(err);
        }
    });
};

await decompress();