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

const getAllProducts = function() {
  return pool.query(`SELECT * FROM products;`)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
}
exports.getAllProducts = getAllProducts;

const getBuyersProducts = function() {
  return pool.query(`SELECT products.*, users.email, users.user_name FROM products
  JOIN users ON users.id = seller_id;`)
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });

}
exports.getBuyersProducts = getBuyersProducts;

const getProductsSoldBYSellerID = function(id) {
  return pool.query('SELECT * from products WHERE seller_id = $1;', [id])
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      console.log(error.message);
    })
}

exports.getProductsSoldBYSellerID = getProductsSoldBYSellerID;


exports.module = { getIsSold, };
