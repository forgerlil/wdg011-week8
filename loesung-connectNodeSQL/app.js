import express from 'express';
import {
  getAllUsers,
  createUser,
  getOneUser,
  editUser,
  deleteUser,
} from './controllers/userControllers.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

app.route('/users').get(getAllUsers).post(createUser);

app.route('/users/:id').get(getOneUser).put(editUser).delete(deleteUser);

app.listen(port, () => console.log(`Server up on port ${port}`));
