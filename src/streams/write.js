
import { stdout } from 'node:process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { resolve, join } from 'node:path';
import { createWriteStream } from 'fs';

const write = async () => {
    const dir = join(dirname(fileURLToPath(import.meta.url)), 'files')
    const stream = createWriteStream(resolve(dir, 'fileToWrite.txt'));
    
    stdout.write('enter the text to write to the file (Ctrl+C for exit):');
    
    process.stdin.on('data', (data) => {
       stream.write(data);
    });
};

await write();
