// const { randomNumGenerator, capitalize } = require('./utils');

// for (let i = 0; i < 5; i++) {
//   console.log(`The current iteration is ${i}`);
// }

// console.log(randomNumGenerator(100));

const http = require('http');
// import http from 'http';

const products = [
  { id: 1, title: 'Diablo 4' },
  { id: 2, title: 'Total War: Warhammer III' },
  { id: 3, title: 'Horizon Forbidden West' },
];

const server = http.createServer((request, response) => {
  console.log('A request came to our server! :)');
  if (request.url === '/') {
    response.writeHead(200, { 'Content-type': 'text/plain' });
    response.end('You have send your first request to our first server!');
  }

  if (request.url === '/products' && request.method === 'GET') {
    response.writeHead(200, { 'Content-type': 'application/json' });
    response.end(JSON.stringify(products));
  }

  if (request.url === '/products' && request.method === 'POST') {
    products.push({ id: 4, title: 'Warhammer 40000: Darktide' });
    response.writeHead(200, { 'Content-type': 'application/json' });
    response.end(JSON.stringify(products));
  }

  if (request.url === '/products' && request.method === 'PUT') {
    products.push({ id: 4, title: 'Diablo III' });
    response.writeHead(200, { 'Content-type': 'application/json' });
    response.end(JSON.stringify(products));
  }

  if (request.url === '/products' && request.method === 'DELETE') {
    products.pop();
    response.writeHead(200, { 'Content-type': 'application/json' });
    response.end(JSON.stringify(products));
  }
});

// server.listen(8000, () => console.log('Server up on port 8000'));

const fs = require('fs');
const os = require('os');

fs.writeFile('myText.txt', 'Time to learn Node >:) ', 'utf8', (err) => {
  console.log(err);
});

fs.appendFile('myText.txt', `${os.freemem()}`, 'utf8', (err) => {
  console.log(err);
});

fs.readFile('myText.txt', 'utf8', (err, data) => {
  if (err) return console.log(err);
  console.log(data);
});
