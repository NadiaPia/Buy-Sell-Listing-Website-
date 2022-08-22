const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get('/', (req, res) => {
    db.getBuyersProducts()
      .then(products => {
        console.log(products);
        const templateVars = { cards: products };
        res.render('buyers', templateVars);
      })
  });

  router.post('/'), (req, res) => {

  }
  return router;
};
