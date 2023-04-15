/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    client: "pg",
    connection: process.env.PG_CONNECTION_STRING,
    migrations: {
      tableName: "knex_migrations",
    }
  },

  production: {
    client: "pg",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
