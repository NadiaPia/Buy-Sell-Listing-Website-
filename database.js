require("dotenv").config();
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

const filterByCity = function(city) {
  return db
    .query('SELECT * from products WHERE city = $1;', [city])
    .then((response) => {
      return response.rows;
    })
    .catch((error) => {
      console.log(error.message);
    })
}

exports.filterByCity = filterByCity;
