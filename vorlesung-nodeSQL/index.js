/* --- CommonJS Modules --- */
// require('dotenv').config(); // for .env file
/* --- */
// require('dotenv').config({ path: './.env.local' }); // for .env.local file
/* --- ES6 Modules --- */
// import 'dotenv/config'; // for .env file
/* --- */
// import dotenv from 'dotenv';
// dotenv.config({ path: './.env.local' }); // for .env.local file
/* --- */

import express from 'express';
import pg from 'pg';

const server = express();
const port = process.env.PORT || 8000;

const pool = new pg.Pool();

server.use(express.json());

server.get('/', async (req, res) => {
  try {
    const dbResponse = await pool.query('SELECT NOW();');
    console.log(dbResponse);
    res.send(dbResponse.rows);
  } catch (error) {
    res.status(500).send(`Could not get the timestamp :( ${error.message}`);
  }
});

server
  .route('/heroes')
  .get(async (req, res) => {
    try {
      const { rows } = await pool.query('SELECT * FROM heroes;');
      console.log(rows);
      res.json(rows);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const { first_name, last_name, image } = req.body;
      if (!first_name || !last_name || !image)
        return res.status(400).json({ error: 'Missing fields!' });

      const {
        rows: [newHero],
      } = await pool.query(
        'INSERT INTO heroes (first_name, last_name, image) VALUES ($1, $2, $3) RETURNING *',
        [first_name, last_name, image]
      );

      return res.json(newHero);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

server
  .route('/heroes/:id')
  .get(async (req, res) => {
    try {
      const { id } = req.params;

      if (!parseInt(id)) return res.status(400).json({ error: 'Invalid Id' });

      const { rows } = await pool.query(`SELECT * FROM heroes WHERE id=$1;`, [
        id,
      ]);

      if (!rows.length)
        return res.status(404).json({ error: 'Hero not found!' });

      return res.json(rows[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  })
  .put(async (req, res) => {
    try {
      const { id } = req.params;
      if (!+id) return res.status(400).json({ error: 'Invalid Id' });

      const { first_name, last_name, image } = req.body;
      if (!first_name || !last_name || !image)
        return res.status(400).json({ error: 'Missing fields!' });

      const { rows } = await pool.query(
        'UPDATE heroes SET first_name=$1, last_name=$2, image=$3 WHERE id=$4 RETURNING *',
        [first_name, last_name, image, id]
      );

      if (!rows.length)
        return res.status(404).json({ error: 'Hero not found!' });

      return res.json(rows[0]);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  })
  .delete(async (req, res) => {
    try {
      const { id } = req.params;
      if (!+id) return res.status(400).json({ error: 'Invalid Id' });

      // Best to not completely delete a user for safety reasons: Give preference to flag user as inactive
      // const deletedHero = await pool.query(
      //   'DELETE FROM heroes WHERE id=$1 RETURNING *',
      //   [id]
      // );

      const deletedHero = await pool.query(
        'UPDATE heroes SET active=false WHERE id=$1 RETURNING *;',
        [id]
      );

      return res.json({ deletedHero: deletedHero.rows[0] });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

server.listen(port, () => console.log(`Server up on port ${port}`));
