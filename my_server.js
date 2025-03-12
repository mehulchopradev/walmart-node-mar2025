import http from 'http';

const users = [
  {
    id: 1,
    name: 'Mehul',
    email: 'mehulc@hey.com'
  },
  {
    id: 2,
    name: 'Ankit',
    email: 'anki@gmail.com'
  }
];

const server = http.createServer((request, response) => {
  // request listener that will run on the event loop for every request
  // request ---> collect data from the client
  // response ---> send data back to the client
  if (request.url === '/hello') {
    response.write('Hello World');
  } else if (request.url === '/me') {
    response.write('My name is Mehul');
  } else if (request.url === '/users') {
    response.writeHead(200, {
      'Content-Type': 'application/json', // MIME types image/jpeg, application/pdf, text/html
    });
    response.write(JSON.stringify(users));
  } else {
    response.write('I do not understand u');
  }

  response.end();
});

server.listen(3000, () => {
  console.log(`Server running on port 3000`);
});

server.on('error', (error) => {
  console.error(`Error occurred: ${error}`);
});

///
///
//
