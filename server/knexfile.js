const path = require("path");
require('dotenv').config({path: '../.env'})

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    // DATABASE_URL=postgres://<user>:<password>@localhost:5432/<database_name>
    connection: "postgresql://pwdevelop:pwdevelop@localhost:5432/pw_develop",
    migrations: {
      tableName: "knex_migrations",
      directory: path.join(__dirname, "./migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "./seeds")
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
