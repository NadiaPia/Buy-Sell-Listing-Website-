const express = require('express');
const router = express.Router();
const { filterProducts } = require('../database');

module.exports = (db) => {
  router.get('/', (req, res) => {
    const userId = req.cookies["user_id"];
    const values = [userId]
    const productsQuery = `SELECT products.*, users.email, users.user_name,
              CASE
                WHEN products.id in (SELECT products_id FROM favorites WHERE users_id = $1)
                THEN true
                ELSE false
                END AS is_favorite
                FROM products
              JOIN users ON users.id = seller_id;`
    db.query(productsQuery, values)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => {
        return console.log(err.message);
      })
      .then(products => {

        const sellersArt = products.filter(e => e.userId);
        const features = products.filter(e => e.featured);
        const templateVars = { cards: products.slice(0, 21), featured: features.slice(0, 3), userArt: sellersArt };
        res.render('acclaim', templateVars)
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

  router.post('/:id', (req, res) => {
    const userId = req.cookies["user_id"]
    const values = [userId]
    const deleteQuery = `DELETE FROM products
                            WHERE id = $1;`
    db.query(deleteQuery, values)
      .then(() => {
        return res.redirect('acclaim')
      })
      .catch((err) => { console.error(err.message) });
  })
  return router;
};
