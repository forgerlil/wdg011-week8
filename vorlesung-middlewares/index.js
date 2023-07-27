import express from 'express';
import catalogueRoute from './routes/catalogueRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static('views'));

app.use((req, res, next) => {
  console.log('Middleware is running!');
  req.dataFromMiddleware = 'Hello from the middleware';
  next();
});

app.get('/', (req, res) => {
  console.log('Hello World!');
  return res.send('All good');
});

app.use('/catalogue', catalogueRoute);

app.use(errorHandler);

app.listen(port, () => `Server up on port ${port}`);
