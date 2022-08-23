const express = require('express');
const router = express.Router();


module.exports = (db) => {
  //router.get('/', (req, res) => {
  //res.render('buyers_favorites');
  //})
  router.post('/', (req, res) => { //when we receive post request on /buyers/favorites/, do the callback
    const values = [
      req.body.products_id,
      req.body.users_id
    ];
    db.query(`INSERT INTO favorites(products_id, users_id)
    VALUES ($1, $2) RETURNING *;`, values)
      .then((result) => {
        res.json(result.rows); //took the result.rows([{products_id: 6, users_id: 1}]), converted to json format and
        // then sent the respond (res.) to the ajax request in buyers.js

      })
      .catch((err) => {
        console.log(err.message);
      })

  });
  console.log("routerrrrrrrrrrrrrrrrrrrrrr", router)


  router.delete('/', (req, res) => { //when we receive post request on /buyers/favorites/, do the callback
    const values = [
      req.body.products_id,
      req.body.users_id
    ];
    db.query(`DELETE FROM favorites WHERE products_id = $1 AND users_id = $2
    RETURNING *;`, values)
      .then((result) => {
        res.json(result.rows); //took the result.rows([{products_id: 6, users_id: 1}]), converted to json format and
        // then sent the respond (res.) to the ajax request in buyers.js

      })
      .catch((err) => {
        console.log(err.message);
      })

  });
  console.log("routerrrrrrrrrrrrrrrrrrrrrr", router)
  return router;

};


/*-------------------Nadia start----------------------------------*/
/*
const fillFavoritesTable = function(favorites) {
const values = [
favorites.products_id,
favorites.users_id
];
let queryString = `INSERT INTO favorites(products_id, users_id)
VALUES ($1, $2) RETURNING *;`;
return pool
.query(queryString, values).then((res) => res.rows);
}
exports.fillFavoritesTable = fillFavoritesTable;
*/
/*-------------------Nadia finish----------------------------------*/

