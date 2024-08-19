-- Create two new databases --
DROP DATABASE IF EXISTS sample_db;
CREATE DATABASE books_db;

\c books_db;

-- See database in use --
SELECT current_database();