const express = require('express');
const router = express.Router();

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
        const templateVars = { cards: products };
        res.render('post', templateVars)
      })
  });

  router.post('/', (req, res) => {
    var mailOptions = {
      from: req.body.mail,
      to: req.params.email,
      subject: 'Inquiry about your art',
      text: req.body.text
    };
    console.log(mailOptions);
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        res.redirect('/sellers')
      }
    });

  });

  return router;
};
