// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullasDefault: true,
    connection: {
      filename: './data/recipes.db3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: './data/seeds'
  },
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done)
    }
  }
};
