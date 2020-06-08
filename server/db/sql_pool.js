const { Pool } = require('pg');

const pool = new Pool({
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  host: 'localhost',
  user: 'yourusername',
  password: 'yourpassword',
  database: 'mydb',
});

module.exports = pool;
