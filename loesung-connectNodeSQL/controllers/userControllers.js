import dbPool from '../db/dbConnection.js';

/**
 * Function to get all users from the database
 * @route GET /users
 */
const getAllUsers = async (req, res) => {
  try {
    const { rows } = await dbPool.query('SELECT * FROM users;');
    console.log(rows);
    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

/**
 * Function to create a user in the database. first_name, last_name and age required from the req.body
 * @route POST /users
 */
const createUser = async (req, res) => {
  try {
    const { first_name, last_name, age } = req.body;
    if (!first_name || !last_name || !age)
      return res.status(400).json({ error: 'Missing fields to create user!' });

    const {
      rows: [newUser],
    } = await dbPool.query(
      'INSERT INTO users (first_name, last_name, age) VALUES ($1, $2, $3) RETURNING *;',
      [first_name, last_name, age]
    );

    return res.json(newUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

/**
 * Function to serve a single user from the database. id is required from req.params
 * @route GET /users/:id
 */
const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!+id) return res.status(400).json({ error: 'Invalid Id sent' });

    const {
      rows: [oneUser],
    } = await dbPool.query('SELECT * FROM users WHERE id=$1', [id]);

    if (!oneUser) return res.status(404).json({ error: 'User not found' });

    return res.json(oneUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

/**
 * Function to update one user. first_name, last_name and age required from the req.body and id is required from the req.params
 * @route PUT /users/:id
 */
const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!+id) return res.status(400).json({ error: 'Invalid Id sent' });

    const { first_name, last_name, age } = req.body;
    if (!first_name || !last_name || !age)
      return res.status(400).json({ error: 'Missing fields to create user!' });

    const {
      rows: [updatedUser],
    } = await dbPool.query(
      'UPDATE users SET first_name=$2, last_name=$3, age=$4 WHERE id=$1 RETURNING *;',
      [id, first_name, last_name, age]
    );

    if (!updatedUser) return res.status(404).json({ error: 'User not found' });

    return res.json(updatedUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

/**
 * Function to deactivate one user in the database. id is required from the req.params
 * @route DELETE /users/:id
 */
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!+id) return res.status(400).json({ error: 'Invalid Id sent' });

    // const {
    //   rows: [deletedUser],
    // } = await dbPool.query('DELETE FROM users WHERE id=$1 RETURNING*;', [id]);

    const {
      rows: [deactivatedUser],
    } = await dbPool.query(
      'UPDATE users SET active=false WHERE id=$1 RETURNING *;',
      [id]
    );

    return res.json(deactivatedUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { getAllUsers, createUser, getOneUser, editUser, deleteUser };
