DROP DATABASE IF EXISTS grocery_db;
CREATE DATABASE grocery_db;

\c grocery_db;

CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30)
);

CREATE TABLE customer_orders (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER,
  order_details TEXT,
  FOREIGN KEY (customer_id)
  REFERENCES customers(id)
  ON DELETE SET NULL
);

-- id must always be uniquely distinguishable
-- email could be used as a primary key because its unique. 
-- But it's not a good idea because it can change.
-- line 16 & 18; what field in the current table is going to be the foreign key? customer_id
-- line 17; what table is the foreign key going to reference and which  field.
