import { readFile, writeFile } from 'fs/promises';

let clientId = 0;

// *************** HTTP Request **************** //
function copyAndEvenSeries(n, source, destination) {
  clientId++;

  console.log(`Request for client id ${clientId} is being processed...`);
  // write logic to copy file from source to destination

  // Non blocking IO
  // Asynchronous IO
  // ****** IO operation ****** //
  readFile(source, {
    encoding: 'utf-8'
  })
    .then((data) => {
      // callback  queue
      // will be executed on the event loop when the read operation becomes a success in the future!
      return writeFile(destination, data);
    })
    .then(() => {
      // callback  queue
      // will be executed on the event loop when the write operation becomes a success in the future!
      console.log(`Request for client copying done!`);
    })
    .catch((err) => {
      // callback queue
      // will be executed on the event loop when the read or write operation becomes a failure in the future!
      console.log(err);
    });
  // 
  //
  //
  //

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