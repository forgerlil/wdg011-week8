// const http = require('http');

// const products = [
//   { id: 1, title: 'Diablo 4' },
//   { id: 2, title: 'Total War: Warhammer III' },
//   { id: 3, title: 'Horizon Forbidden West' },
// ];

// const server = http.createServer((request, response) => {
//   if (request.url === '/') {
//     console.log('Somebody requested our server on the root route!');
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     response.end(
//       'You have sent your first request to your first very own server!'
//     );
//   }

//   if (request.url === '/products' && request.method === 'GET') {
//     console.log('Somebody wants to see what products we got!');
//     response.writeHead(200, { 'Content-Type': 'application/json' });
//     response.end(JSON.stringify(products));
//   }

//   if (request.url === '/products' && request.method === 'POST') {
//     let body = [];
//     request
//       .on('data', (bufferData) => {
//         body.push(bufferData);
//       })
//       .on('end', () => {
//         body = Buffer.concat(body).toString();
//         response.writeHead(200, { 'Content-Type': 'application/json' });
//         products.push(JSON.parse(body));
//         response.end(JSON.stringify(products));
//       });
//     response.writeHead(200, { 'Content-Type': 'application/json' });
//     response.end(JSON.stringify(products));
//   }

//   if (request.url === '/products' && request.method === 'DELETE') {
//     products.pop();
//     response.writeHead(200, { 'Content-Type': 'application/json' });
//     response.end(JSON.stringify(products));
//   }
// });

// server.listen(8000, () => console.log('Server up on port 8000!'));

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.set('view engine', 'ejs');

const products = [
  { id: 1, title: 'Diablo 4' },
  { id: 2, title: 'Total War: Warhammer III' },
  { id: 3, title: 'Horizon Forbidden West' },
];

// app.all('/', (req, res) => res.send('Welcome to express!'));
// app.all('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.all('/', (req, res) =>
  res.render('index', {
    title: 'EJS is so cool! :D',
    content: 'Please have a look at our amazing games!',
    products,
  })
);

app
  .route('/products')
  .get((req, res) => {
    if (req.query.sort === 'name')
      products.sort((a, b) => (a.title > b.title ? 1 : -1));
    res.json(products);
  })
  .post((req, res) => res.status(201).json(products))
  .put((req, res) => res.json(products))
  .delete((req, res) => res.json(products));
// app.get('/products', (req, res) => res.json(products));
// app.post('/products', (req, res) => res.json(products));
// app.put('/products', (req, res) => res.json(products));
// app.delete('/products', (req, res) => res.json(products));

app.get('/products/:productId', (req, res) => {
  console.log(req.params);
  res.json(products[req.params.productId - 1]);
});

app.post('/buyRandomGame', (req, res) => {
  return req.body.money >= 30
    ? res.redirect('/purchaseConfirmation')
    : res.send('You need more money to buy a game :(');
});

app.get('/purchaseConfirmation', (req, res) => {
  return res.status(308).json({
    message: "Here's your game!",
    game: products[Math.floor(Math.random() * products.length)],
  });
});

app.get('/downloadCat', (req, res) => res.download('./cat5.jpg'));

app.listen(port, () => console.log(`Server is up on port ${port}`));
