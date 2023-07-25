import express from 'express';
import {
  getAllUsers,
  createUser,
  getOneUser,
  editUser,
  deleteUser,
} from './controllers/userControllers.js';

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.route('/users').get(getAllUsers).post(createUser);

app.route('/users/:id').get(getOneUser).put(editUser).delete(deleteUser);

app.listen(port, () => console.log(`Server up on port ${port}`));
