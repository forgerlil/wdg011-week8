const express = require('express');
const methodOverride = require('method-override');
const axios = require('axios');
const fs = require('fs/promises');
const server = express();
const port = process.env.PORT || 3000;

// Step 6
// Method override must be setup before any routes 🙃
server.use(methodOverride('_method'));

// Step 2
server.put('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname });
});

// Step 3
server.delete('/', (req, res) => {
  res.json({ good: 'yep' });
});

// Step 4
server.set('view engine', 'ejs');

server.get('/test-ejs', (req, res) => {
  res.render('testEjs', { myTitle: 'WDG#011 is rocking at express :3' });
});

//Step 5
server.get('/test-ejs2', (req, res) => {
  res.render('testEjs2', { users: ['Bob', 'John', 'Jane'] });
});

// Step 6
server.get('/form', (req, res) => {
  res.sendFile('./form.html', { root: __dirname });
});

// Step 7
// Here we interpret the incoming body as plain text
server.use(express.urlencoded({ extended: true }));

server.post('/showPost', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

// Step 8
server.get('/showGet', (req, res) => {
  console.log(req.query);
  res.json(req.query);
});

// Step 9
server.get('/number/:id', (req, res) => {
  const { id } = req.params;
  res.send(`The number is ${id}`);
});

// Step 10
server.get('/postlist', async (req, res) => {
  try {
    const { data } = await axios.get(
      'http://jsonplaceholder.typicode.com/posts/1'
    );

    // Step 11
    await fs.writeFile('posts.json', JSON.stringify(data));

    res.json(data);
  } catch (err) {
    console.log(err.message);
  }
});

server.listen(port, () => console.log(`Server up on port ${port}`));
