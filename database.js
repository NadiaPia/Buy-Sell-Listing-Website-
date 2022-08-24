require("dotenv").config();
const { query } = require("express");
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

const filterProducts = function(city, minprice, maxprice, available) {
  let initialQuery = 'SELECT * FROM products'
  let queryArr = [];

  if (city) {
    queryArr.push(city)
    initialQuery += ` WHERE city = $${queryArr.length}`;
  }

  if (minprice && maxprice) {
    queryArr.push(minprice);
    initialQuery += ` AND price >= $${queryArr.length}`;
    queryArr.push(maxprice);
    initialQuery += ` AND price <= $${queryArr.length}`;
  }

  if (available) {
    queryArr.push(available)
    initialQuery += ` AND sold != $${queryArr.length}`
  } else {
    initialQuery += `;`
  }
  return db
    // .query('SELECT * FROM products WHERE city = $1 AND price >= $2 AND price <= $3 AND sold != $4', [city, minprice, maxprice, available])
    .query(initialQuery, queryArr)
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log(error.message);
    })
}
exports.filterProducts = filterProducts;
