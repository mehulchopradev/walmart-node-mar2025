// A nodejs program runs on a single thread called as the event loop

// Synchronous starts
const marks = [5, 7, 3, 2, 5, 9, 10, 2, 4, 8];

// '4' == 4 // true
// '4' === 4 // false

// a function that should create a new array of only even marks more than 2 from the marks array and print it
function evenMarks(){
  // callback functions
  const evMarks = marks.filter((mark) => mark % 2 === 0 && mark > 2);
  console.log("Even marks more than 2: " + evMarks);
}


// a function that should create a new array of marks deducted by 1 from the marks array and print it
function deductMarks(){
  const ma = marks.map((mark) => mark - 1);
  console.log("Marks deducted by 1: " + ma);
}


// call the two functions
evenMarks();
deductMarks();
// Synchronous ends