import { mkdir, readdir, copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { resolve, join } from 'node:path';

const oldDir = join(dirname(fileURLToPath(import.meta.url)), 'files')
const newDir = join(dirname(fileURLToPath(import.meta.url)), 'files-copy');

const copy = async () => {
   
    try{
      await mkdir(newDir)
      const rd = await readdir(oldDir, { withFileTypes: true })
               .then((result) => {
            for (const file of result) {
              if (file.isFile()) {
                copyFile(
                  resolve(oldDir, file.name),
                  resolve(newDir, file.name),
                );
              }
            }
          });
    }
    catch (err){
        if (err.code === 'EEXIST' || err.code === 'ENOENT') {
            console.error('FS operation failed');
        } else {
            console.error(err);
        }
    } 
}     

await copy();
