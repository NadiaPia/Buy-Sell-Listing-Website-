const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


module.exports = (db) => {
  router.get('/:email', (req, res) => {
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
        const templateVars = { cards: products, featured: features.slice(0, 3), card_id: req.params.email };
        res.render('contact', templateVars)
      })
  });

  router.post('/:email', (req, res) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EM_NAME,
        pass: process.env.EM_PW
      }
    });

    let mailOptions = {
      from: req.body.mail,
      to: req.params.email,
      subject: 'Buying Your art',
      text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  });

  return router;
};
