import { resolve, join } from 'node:path';
import { open } from 'node:fs/promises';

const create = async () => {
    const path = resolve();
    const filePath = join(path, 'src','fs', 'files','fresh.txtc');

    try {
        const fileHandle = await open(filePath, 'wx'); 
        await fileHandle.writeFile('I am fresh and young')
        await fileHandle.close(); 
    } catch (err) {
        if (err.code === 'EEXIST') {
            console.error('FS operation failed');
        } else {
            console.error(err);
        }
    }
}

await create();
