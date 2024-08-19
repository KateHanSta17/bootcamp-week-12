DROP DATABASE IF EXISTS registrar_db;
CREATE DATABASE registrar_db;

\c registrar_db;

CREATE TABLE instructors (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30)
);
-- serial replaces data types to inject auto-incrementing values (increments by 1)
-- primary key is a unique identifier for each row in a table. Will always be unique. Gives that particular row a reference.
-- use a primary key to reference a row in another table

