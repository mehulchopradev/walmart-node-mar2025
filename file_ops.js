// import fs from 'fs'; // inbuilt file system (fs) module of Nodejs
import { readFileSync, writeFileSync } from 'fs'; // importing specific functions from fs module

const source = 'package.json'; // relative path
const destination = 'package.json.bak'; // relative path

console.log('Copying starts..')
const contents = readFileSync(source, {
  encoding: 'utf-8'
});

writeFileSync(destination, contents);
console.log('Copying done!');