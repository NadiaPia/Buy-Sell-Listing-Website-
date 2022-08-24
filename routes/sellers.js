const express = require('express');
const router = express.Router();
const { filterProducts } = require('../database');

module.exports = (db) => {
  router.get('/', (req, res) => {
    db.query(`SELECT products.*, users.email, users.user_name,
              CASE
                WHEN products.id in (SELECT products_id FROM favorites WHERE users_id = 2)
                THEN true
                ELSE false
                END AS is_favorite
                FROM products
              JOIN users ON users.id = seller_id
              LIMIT 12;`)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => {
        console.log(err.message);
      })
      .then(products => {
        const features = products.filter(e => e.featured);
        const templateVars = { cards: products, featured: features.slice(0, 3) };
        res.render('sellers', templateVars)
      })
  });

  router.post('/filter', (req, res) => {
    const available = req.body.available;
    const city = req.body.city;
    const minprice = req.body.minprice;
    const maxprice = req.body.maxprice;
    filterProducts(city, minprice, maxprice, available).then((data) => {
      console.log(data);
      const templateVars = { products: data }
      res.render('search', templateVars)

    })
  })

  return router;
};
