import { join } from 'node:path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { constants, rename as _rename, access} from 'node:fs/promises';

const rename = async () => {
    const filePath = join(dirname(fileURLToPath(import.meta.url)), 'files', 'wrongFilename.txt')
    const newPath = join(dirname(fileURLToPath(import.meta.url)), 'files', 'properFilename.md')

    try {
        await access(newPath, constants.F_OK)
          .then(() =>{
            throw new Error();
          })
          .catch((err) => {

          })
        await _rename(filePath, newPath)
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error('FS operation failed');
        } else {
            console.error(err);
        }
    } 
};

await rename();



