const path = require('path');

console.log(`The environment is ${process.env.NODE_ENV}`);
const env = process.env.NODE_ENV || 'development';
const rootPath = path.normalize(`${__dirname}/..`);

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'engauge',
    },
    port: 5432,
    db: {
      database: process.env.PG_DATABASE,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      options: {
        host: 'database',
        dialect: 'postgres',
        pool: {
          max: 100,
          min: 0,
          idle: 10000,
        },
      },
    },
  },
  test: {
    root: rootPath,
    app: {
      name: 'engauge',
    },
    port: 5432,
    db: {
      database: 'engauge-test',
      user: 'guy',
      password: 'password',
      options: {
        host: 'database',
        dialect: 'postgres',
        pool: {
          max: 100,
          min: 0,
          idle: 10000,
        },
      },
    },
  },
};
module.exports = config[env];