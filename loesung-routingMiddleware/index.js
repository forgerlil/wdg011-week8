import express from 'express';
import secure from './middlewares/secure.js';
const app = express();

const port = process.env.PORT || 8000;

app.get('/', (req, res) => res.send('Middlewares time!'));

app.get('/verify/:token', secure, (req, res) =>
  res.send('The token has been verified :D')
);

app.listen(port, () => console.log(`Server running on port ${port}`));
