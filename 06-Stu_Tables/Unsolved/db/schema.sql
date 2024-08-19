DROP DATABASE IF EXISTS books_db;
-- Creates the "books_db" database --
CREATE DATABASE books_db;
\c books_db;

-- Add biography table --
-- Creates the table "produce" within inventory_db --
CREATE TABLE biographies (
  -- Creates a numeric column called "id" --
  id INTEGER,
  -- Creates a string column called "name" which can hold up to 100 characters --
  name VARCHAR(100)
);

