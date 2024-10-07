import { Transform } from 'node:stream';

const transform = async () => {

    const streamTransform = new Transform({
        transform(chunk, encoding, callback) {
            const reversedString = chunk.toString().split('').reverse().join('');
            callback(null, reversedString);
        }
    });
    process.stdin
      .pipe(streamTransform)
      .pipe(process.stdout);    
};

await transform();