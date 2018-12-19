// Update with your config settings.

module.exports = {

  test: {
      client: 'pg',
      connection: 'postgres://localhost:5432/petpedia',
      migrations: {
          directory: __dirname + '/migrations'
      },
      seeds: {
          directory: __dirname + '/seeds/test'
      }
  },
  development: {
      client: 'pg',
      connection: 'postgres://localhost:5432/petpedia',
      migrations: {
          directory: __dirname + '/migrations'
      },
      seeds: {
          directory: __dirname + '/seeds/test'
      }
  },

};
