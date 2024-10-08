const express = require('express');
// Import and require Pool (node-postgres)
// We'll be creating a Connection Pool. Read up on the benefits here: https://node-postgres.com/features/pooling
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const pool = new Pool(
  {
    // TODO: Enter PostgreSQL username
    user: '',
    // TODO: Enter PostgreSQL password
    password: '',
    host: 'localhost',
    database: 'books_db'
  },
  console.log(`Connected to the books_db database.`)
)

pool.connect();

// Query DB groups the books by their in stock value and counts the number of books in each group
pool.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, {rows}) {
  console.log(rows);
});
// Query DB this query is used to select from the table in the database
// it is adding up the quantity of favorite_books in each section and grouping them by the section column
pool.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function (err, {rows}) {
  console.log(rows);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
