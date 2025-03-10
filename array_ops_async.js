// A nodejs program runs on a single thread called as the event loop

// Synchronous
const marks = [5, 7, 3, 2, 5, 9, 10, 2, 4, 8];

// a function that should create a new array of only even marks more than 2 from the marks array and print it
function evenMarks(){
  // callback functions
  // The event loop executes this callback function
  const evMarks = marks.filter((mark) => mark % 2 === 0 && mark > 2);
  console.log("Even marks more than 2: " + evMarks);
}


// a function that should create a new array of marks deducted by 1 from the marks array and print it
function deductMarks(){
  // The event loop executes this callback
  const ma = marks.map((mark) => mark - 1);
  console.log("Marks deducted by 1: " + ma);
}

// Synchronous


// schedule the two functions
// In Nodejs there is a queue (amongst many queues) called as the "timers queue"
// The Event loop goes through all the queues (in a specific priority)

// Asynchronous flow
setTimeout(evenMarks, 5000); // the callback function is placed in the timers queue to execute after 5 seconds

setTimeout(deductMarks, 10000); // the callback function is placed in the timers queue to execute after 10 seconds
// Asynchronous flow

// Event loop has already come here even before the above two functions execute
