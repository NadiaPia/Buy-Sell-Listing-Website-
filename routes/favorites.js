const express = require('express');
const router = express.Router();


module.exports = (db) => {
  router.get('/', (req, res) => { //do query to db
    db.query(`SELECT products.*, favorites.*, users.email, users.user_name
    FROM favorites 
    
    JOIN products ON favorites.products_id = products.id
    JOIN users ON users.id = products.seller_id
    WHERE favorites.users_id = 1;
              `)
      .then((result) => { //result is what db returns
        console.log('result is what db returns', result.rows )
        return result.rows; //result.rows looks like: 
        /* {
    id: 12,
    name: 'Ivory Queen',
    photo: 'https://i.imgur.com/JsG2xRT.png',
    country: 'Canada',
    city: 'North Vancouver',
    seller_id: 2,
    description: '',
    prompts: '',
    price: 100,
    featured: false,
    sold: false,
    email: 'jhrinchishin2@1688.com',
    user_name: 'jaba-wookie'
  },
   */
        
      })
      .catch((err) => {
        console.log(err.message);
      })
      .then(products => { //result.rows now called products and passes to this function as an argument
        console.log('products from favorites', products)
        const templateVars = { cards: products};
        res.render('buyers_favorites', templateVars)
      })
  });



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
  //console.log("routerrrrrrrrrrrrrrrrrrrrrr", router)


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

