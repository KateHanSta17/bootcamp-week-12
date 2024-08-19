const express = require('express');

const { Pool } = require('pg');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
const pool = new Pool(
    {
      // TODO: Enter PostgreSQL username
      user: 'postgres',
      // TODO: Enter PostgreSQL password
      password: 'happy',
      host: 'localhost',
      database: 'movies_db'
    },
    console.log(`Connected to the books_db database.`)
  )
  
  pool.connect();

  
// Import the reviews data
// GET request for reviews
app.get('/api/movies', (req, res) => {
    pool.query('SELECT * FROM movies', function (err, {rows}) {
        console.log(rows);
        res.status(200).json(rows);
      });
});

// GET request to add a review
app.get('/api/movie-reviews', (req, res) => {
    pool.query('SELECT * FROM reviews', function (err, {rows}) {
        console.log(rows);
        res.status(200).json(rows);
      });
});


// POST request to add a review
app.post('/api/add-movie', (req, res) => {
    pool.query('INSERT INTO movies (movie_name) VALUES ($1)', [req.body.title], function (err, {rows}) {
        console.log(rows);
        res.status(200).json(rows);
      });
});


// DELETE request to remove a review
app.delete('/api/movies/:id', (req, res) => {
    const sql = 'DELETE FROM movies WHERE id = $1';
    const params = [req.params.id];
    pool.query(sql, params, (err, {rows}) => {
        if (err) {
            console.log(err);
        }
        console.log(rows);
        res.status(200).json(rows);
    });
    res.status(200).json('DELETE movie');
}); 

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
