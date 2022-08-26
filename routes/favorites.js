const express = require('express');
const router = express.Router();


module.exports = (db) => {
  router.get('/', (req, res) => {
    console.log('GET FAVORITES')
    const userId = req.cookies["user_id"]
    const values = [userId];
    const favQuery = `SELECT products.*, favorites.*, users.email, users.user_name
    FROM favorites
    JOIN products ON favorites.products_id = products.id
    JOIN users ON users.id = products.seller_id
    WHERE favorites.users_id = $1;`

    db.query(favQuery, values)
      .then((result) => {
        return result.rows;
      })
      .catch((err) => {
        console.log(err.message);
      })
      .then(products => {
        const userId = req.cookies["user_id"];
        const templateVars = { cards: products, userId };
        res.render('acclaim_favorites', templateVars)
      })
  });

  router.delete('/', (req, res) => {
    console.log('=data', req.body);
    const values = [
      req.body.products_id,
      req.body.users_id
    ];
<<<<<<< HEAD
    db.query(`DELETE FROM favorites WHERE products_id = $1 AND users_id = $2
    RETURNING *;`, values)
=======
    console.log('--- POST FAVORITE: ', values)
    db.query(`INSERT INTO favorites(products_id, users_id)
    VALUES ($1, $2) RETURNING *;`, values)
>>>>>>> master
      .then((result) => {
        res.json(result.rows);
      })
      .catch((err) => {
        console.log(err.message);
        res.send(err)
      })

  });
  router.post('/click', (req, res) => {
    const { products_id, users_id } = req.body;
    const values = [
      req.body.products_id,
      req.body.users_id
    ];
<<<<<<< HEAD
    db.query(`INSERT INTO favorites(products_id, users_id)
    VALUES ($1, $2) RETURNING *;`, [products_id, users_id])
=======
    console.log('--- DELETE FAVORITE: ', values)
    db.query(`DELETE FROM favorites WHERE products_id = $1 AND users_id = $2
    RETURNING *;`, values)
>>>>>>> master
      .then((result) => {
        res.json(result.rows);
      })
      .catch((err) => {
        console.log(err.message);
      })
  })
  return router;
};



