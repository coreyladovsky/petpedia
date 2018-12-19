const enviroment = 'development';
let config = require('./knexfile')[enviroment];
module.exports = require('knex')(config);
