DROP DATABASE IF EXISTS petpedia;
CREATE DATABASE petpedia;

\c petpedia;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS pets;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL,
  email VARCHAR NOT NULL
);

CREATE TABLE pets (
  id SERIAL PRIMARY KEY,
  owner_id INT REFERENCES users(id),
  species VARCHAR NOT NULL,
  age INT,
  name VARCHAR NOT NULL
);

INSERT INTO users(username, email)
VALUES ('Corey', 'corey@corey.corey'), ('Reed', 'bigGains@reed.com');

INSERT INTO pets(owner_id, species, age, name)
VALUES(1, 'feline', 2, 'Noboru'), (1, 'feline', 1, 'Hatchiko'),
 (2, 'tortoise', 95, 'Tortry');
