require("dotenv").config();

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
exports.module = { getIsSold, };
