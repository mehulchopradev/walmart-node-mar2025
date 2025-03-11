import { readFile, writeFile } from 'fs/promises';

// async-await construct in javascript
// async-await is a syntactic sugar over promises
// async-await is a way to write asynchronous code in a synchronous way

async function copyFile(source, destination) {
  try {
    const data = await readFile(source, { encoding: 'utf-8' })
    await writeFile(destination, data);
    console.log(`Request for client copying done!`);
  } catch (err) {
    console.log(err);
  }
}

let clientId = 0;

// *************** HTTP Request **************** //
function copyAndEvenSeries(n, source, destination) {
  clientId++;

  console.log(`Request for client id ${clientId} is being processed...`);
  // write logic to copy file from source to destination

  // Non blocking IO
  // Asynchronous IO
  // ****** IO operation ****** //
  copyFile(source, destination);
  // ****** IO operation ****** //


  // ****** CPU bound operation ****** //
  // write logic to print even series till n
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  // ****** CPU bound operation ****** //

  console.log(`Request for client id ${clientId} has completed processing`);
}

function evenSeries(n) {
  clientId++;
  console.log(`Request for client id ${clientId} is being processed...`);

  // *** CPU bound operation *** //
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  // *** CPU bound operation *** //

  console.log(`Request for client id ${clientId} has completed processing`);
}
// *************** HTTP Request **************** //


// call the function and verify ur output

// Imagine  HTTP request(s) made by clients
// Scheduling them in a queue for execution -- timers queues

setTimeout(() => {
  copyAndEvenSeries(50, 'package.json', 'package.json.bak');
}, 0);
setTimeout(() => {
  copyAndEvenSeries(100, 'array_ops.js', 'array_ops.js.bak');
}, 0);
setTimeout(() => {
  copyAndEvenSeries(1000, 'file_ops.js', 'file_ops.js.bak');
}, 0);

setTimeout(() => {
  evenSeries(50);
}
, 0);
setTimeout(() => {
  evenSeries(100);
}
, 0);