import { copyFile } from './lib/copy-util.js';

const ee = copyFile('package.json', 'package-copy.json');

ee.on('readStart', () => {
  console.log('Reading file about to start......');
});

ee.on('readSuccess', (data) => {
  console.log('Almost there.... please wait');
});

ee.on('writeSuccess', () => {
  console.log('Copy successful!!!');
});

ee.on('readError', (err) => {
  console.error('Error occurred during read:', err);
});

ee.on('writeError', (err) => {
  console.error('Error occurred during write:', err);
});