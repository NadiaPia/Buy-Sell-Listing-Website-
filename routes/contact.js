const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   host: 'smtp.gmail.com',
//   auth: {
//     user: process.env.EM_NAME,
//     pass: process.env.EM_PW
//   }
// });


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

  router.post('/:email', async (req, res) => {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EM_NAME,
        pass: process.env.PASSWORD
      }
    });
    let mailOptions = {
      from: req.body.mail,
      to: req.params.email,
      subject: 'buying your art',
      text: req.body.subject
    };
    console.log(mailOptions);
    console.log('sending email');

    try {
      await transporter.sendMail(mailOptions);

    } catch (error) {
      console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    res.status(200).send('email has been sent');
    // transporter.sendMail(mailOptions, function(error, info) {
    //   console.log('sending email');
    //   if (error) {
    //     console.log(error);
    //     res.status(500).send('an error has occured');
    //   } else {
    //     console.log('Email sent: ' + info.response);
    //     res.status(200).send('email has been sent');
    //   }
    // });
  });

  return router;
};
