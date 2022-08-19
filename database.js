require("dotenv").config();
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

const getIsSold = function(isSold) {
  return pool.query(`SELECT * FROM products
  WHERE sold = $1;`, [isSold])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
}
exports.getIsSold = getIsSold;
