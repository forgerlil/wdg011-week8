import express from 'express';
import catalogue from './data.json' assert { type: 'json' };

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  console.log('Hello World!');
  return res.send('All good');
});

app.listen(port, () => `Server up on port ${port}`);
