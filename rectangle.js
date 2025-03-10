// In Nodejs, a program runs on a single thread called as the Event loop

// Program starts
// synchronous flow
function perimeter(length, breadth) {
  return 2 * (length + breadth);
}

function area(length, breadth) {
  return length * breadth;
}

const l = 10;
const b = 4;

// print output on the terminal
console.log('Perimeter is' + perimeter(l, b));
console.log('Area is' + area(l, b));

// Program ends