let faker = require('faker')

let data = [];
for(let i = 0; i < 100;i++) {
  data.push({
    id: i,
    username: faker.name.findName(),
    email: faker.internet.email()
  })
}

let pets = [];
for(let i = 0; i < 100;i++) {
  pets.push({
    name: faker.name.firstName(),
    age: faker.random.number(),
    owner_id: Math.floor(Math.random() * 100),
    species: faker.internet.color()
  })
}


exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert(data);
    })
    .then(
      function() {
        return knex('pets').del()
      }
    )
    .then(function () {
      return knex('pets').insert(pets);
    })
};
