import { createReadStream, createWriteStream } from 'fs';

const source = 'file_ops_ideal.js';
const destination = 'file_ops_copy.js';

const readStream = createReadStream(source, {
  encoding: 'utf-8',
  highWaterMark: 1 * 1024, // chunks of 1KB each
});

const writeStream = createWriteStream(destination);

// source nd sink
// backpressure handling
readStream.pipe(writeStream);

/* readStream.on('open', () => {
  console.log(`Reading file ${source}......`);
});

writeStream.on('open', () => {
  console.log(`Writing file ${destination}......`);
});

readStream.on('close', () => {
  console.log('File read operation completed!');
  writeStream.end();
});

writeStream.on('close', () => {
  console.log('File write operation completed!');
});

readStream.on('data', (chunk) => {
  writeStream.write(chunk);
}); */