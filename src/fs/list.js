import { readdir, stat } from 'node:fs/promises';
import { resolve, extname , join} from 'node:path';

const list = async () => {

    const path = resolve();
    const filePath = join(path, 'src','fs', 'files');

    readdir(filePath, { withFileTypes: true })
    .then((result) => {
      for (const file of result) {
        if (file.isFile()) {
          stat(resolve(filePath, file.name))
            .then((stat) => {
              console.log(
                `${String(file.name).slice(
                  0,
                  String(file.name).lastIndexOf('.'),
                )} - ${String(extname(file.name)).slice(1)} - ${stat.size}b`,
              );
            });
        }
      }
    }).catch((err) => {
        if (err.code === 'ENOENT') {
            console.error('FS operation failed');
        } else {
            console.error(err);
        }
    })
    ;
};

await list();


