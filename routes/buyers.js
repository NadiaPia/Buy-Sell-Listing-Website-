require('dotenv').config();
//const db = require('../database')

/*
const express = require('express');
const router = express.Router();
// path to ssr res.render

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.getBuyersProducts()
      .then(products => {
        console.log(products);
        const templateVars = { cards: products };
        res.render('buyers', templateVars);
      })
  });
  return router;
};
*/