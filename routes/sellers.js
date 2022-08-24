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
              JOIN users ON users.id = seller_id;`)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => {
        console.log(err.message);
      })
      .then(products => {
        const sellersArt = products.filter(e => e.seller_id === 2);
        const features = products.filter(e => e.featured);
        const templateVars = { cards: products.slice(0, 12), featured: features.slice(0, 3), userArt: sellersArt };
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
