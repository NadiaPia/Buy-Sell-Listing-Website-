const express = require('express');
const router = express.Router();

const { filterByCity } = require('../database');


module.exports = (db) => {
  router.get('/', (req, res) => { //do query to db
    db.query(`SELECT products.*, users.email, users.user_name,
              CASE
                WHEN products.id in (SELECT products_id FROM favorites WHERE users_id = 1) 
                  THEN true
                ELSE false
              END AS is_favorite
              FROM products
              JOIN users ON users.id = seller_id
              LIMIT 12;`)
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
  {
    id: 1,
    name: 'Morning Do',
    photo: 'https://i.imgur.com/GNVetZ4.png',
    country: 'Canada',
    city: 'Belfast',
    seller_id: 2,
    description: '',
    prompts: '',
    price: 100,
    featured: true,
    sold: true,
    email: 'jhrinchishin2@1688.com',
    user_name: 'jaba-wookie'
  }, */
        
      })
      .catch((err) => {
        console.log(err.message);
      })
      .then(products => { //result.rows now called products and passes to this function as an argument
        const features = products.filter(e => e.featured); //do filtration of elements where "featured" = true
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
