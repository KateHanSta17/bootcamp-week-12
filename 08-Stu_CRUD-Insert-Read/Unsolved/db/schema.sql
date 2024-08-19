DROP DATABASE IF EXISTS books_db;

-- TODO: What is the SQL code below doing?
--SQL code is creating a database called books_db
CREATE DATABASE books_db;

-- TODO: What is the SQL code below doing?
-- SQL code is connecting to the books_db database 
\c books_db;

-- TODO: What is the SQL code below doing?
-- SQL code is creating a table called biographies in the books_db database
CREATE TABLE biographies (

  -- TODO: What is the SQL code below doing?
  -- SQL code is creating a column called id that is an integer and cannot be null
  id INTEGER NOT NULL,

  -- TODO: What is the SQL code below doing?
  -- SQL code is creating a column called name that is a string and cannot be null
  name VARCHAR(100) NOT NULL
);

