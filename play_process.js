// built in module -- process
// this module is globallly available -- do not have to import them
// purpose -- to get the information about current process

setTimeout(() => console.log('Good morning'), 0);
setTimeout(() => console.log('Good afternoon'), 0);

// nextTick is a special timer that is triggered immediately after the current operation is completed
// nextTick is always executed before any other timers
// it places the callback in the next tick queue
process.nextTick(() => console.log('Good night'));

console.log('Regular main synchronous code start');
console.log(process.pid);
console.log(process.platform);
console.log(process.release);

console.log(process.resourceUsage());

// user input
console.log(process.argv);

console.log('Regular main synchronous code end');

// load environment variables
// environment variables are key value pairs --- configuration and/or sensitive information of the application

