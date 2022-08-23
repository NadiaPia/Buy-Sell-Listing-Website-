const express = require('express');
const router = express.Router();

const { filterByCity } = require('../database');


module.exports = (db) => {
  router.get('/', (req, res) => {
    db.query(`SELECT products.*, users.email, users.user_name FROM products
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
        res.render('buyers', templateVars)
      })
  });

  router.post('/filter', (req, res) => {
    const city = req.body.city;
    filterByCity(city).then((data) => {
      console.log(data);
    })
  })
  return router;
};
