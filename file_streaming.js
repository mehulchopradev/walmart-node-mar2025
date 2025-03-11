import { createReadStream } from 'fs';

const source = 'file_ops_ideal.js';
const readStream = createReadStream(source, {
  encoding: 'utf-8',
  highWaterMark: 1 * 1024, // chunks of 1KB each
});

let chunkNo = 0;

readStream.on('open', () => {
  console.log(`Reading file ${source}......`);
});

readStream.on('close', () => {
  console.log('File read operation completed!');
});

readStream.on('data', (chunk) => {
  chunkNo++;
  console.log(`Reading chunk no. ${chunkNo}`);
  console.log(chunk);
});