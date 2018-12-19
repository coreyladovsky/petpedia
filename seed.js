const { db } = require('./db/queries/index.js');
const faker = require('faker');
const animals = require('animals')

let users = [];

for(let i = 0; i < 25; i++ ) {
  let username = faker.name.findName();
  let email = faker.internet.email();
  let str = "( '" + username + "', '" + email + "')"
  users.push(str)
}

users = users.join(", ")

let pets = [];

for (let i = 0; i < 35; i++) {
  let name = faker.name.firstName();
  let age = faker.random.number();
  let owner_id = Math.floor(Math.random() * 25) + 1;
  let species = animals();
  let str = "( '" + name + "', " + age + ", " + owner_id + ", '" + species +
  "')"
  pets.push(str)
}

pets = pets.join(", ")

db.none("INSERT INTO users(username, email) VALUES " + users + ";")
  .then(() => {
    db.none("INSERT INTO pets(name, age, owner_id, species) VALUES " + pets +
      ";")
  })
  .catch(err => {
    console.log(err);
  })
