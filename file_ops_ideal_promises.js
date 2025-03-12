import { readFile, writeFile } from 'fs';

// Promises api
// Was introduced to make asynchronous code more readable and maintainable
// It solves the callback hell problem

// identify the async operation(s)
  // readFile()
    // define them into their separate function
    // return a promise object
  // writeFile()
    // define them into their separate function
    // return a promise object

function readFileAsync(source) {
  return new Promise((resolve, reject) => {
    // resolve and reject are functions
    // write my async non blocking IO code over here
    readFile(source, {
      encoding: 'utf-8'
    }, (err, data) => {
      // IO events callback queue
      if (err) {
        // something
        // broke ur promise
        reject(err);
      } else {
        // something
        // kept ur promise
        resolve(data);
      }
    });
  });
}

function writeFileAsync(destination, data) {
  return new Promise((resolve, reject) => {
    // resolve and reject are functions
    // write my async non blocking IO code over here
    writeFile(destination, data, (err) => {
      // IO events callback queue
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
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
  readFileAsync(source)
    .then((data) => {
      // microtasks  queue
      // will be executed on the event loop when the read operation becomes a success in the future!
      return writeFileAsync(destination, data);
    })
    .then(() => {
      // microtasks  queue
      // will be executed on the event loop when the write operation becomes a success in the future!
      console.log(`Request for client copying done!`);
    })
    .catch((err) => {
      // microtasks queue
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