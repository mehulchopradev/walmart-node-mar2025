// In Nodejs, a program runs on a single thread called as the Event loop

process.on('exit', (code) => {
  console.log('Process exit event with code:', code);
  if (code === 1) {
    // imagine sending an email to the developer or sending to analytics
    console.log('Again user did not enter command line argument for length and breadth.');
  }
});

// Program starts
// synchronous flow
function perimeter(length, breadth) {
  return 2 * (length + breadth);
}

function area(length, breadth) {
  return length * breadth;
}

const args = process.argv;
if (args.length < 4) {
  console.log('Please provide the length and breadth of the rectangle');
  process.exit(1); // exit the program
}


const l = parseInt(args[2]);
const b = parseInt(args[3]);

// print output on the terminal
console.log('Perimeter is' + perimeter(l, b));
console.log('Area is' + area(l, b));

// Program ends