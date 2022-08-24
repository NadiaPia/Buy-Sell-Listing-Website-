require("dotenv").config();
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

const filterProducts = function(city, minprice, maxprice, available) {
  return db
    .query('SELECT * FROM products WHERE city = $1 AND price BETWEEN $2 and $3 AND sold = $4;', [city, minprice, maxprice, available])
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log(error.message);
    })
}
exports.filterProducts = filterProducts;
