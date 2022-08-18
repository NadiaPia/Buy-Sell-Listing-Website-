//Daniel's section on database!

// Filtering

//

require("dotenv").config();
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();


db.query(`Select * from users`, (err, res) => {
  if (!err) {
    console.log(res.rows[0]);
  } else {
    console.log(err.message);
  }
  db.end;
});


const getUserByUsername = function(email) {
  const theQuery = 'Select * from users WHERE user_name = $1;'
  db
    .query(theQuery, [email])
    .then((result) => {
      if (result.rows) {
        return result.rows[0];
      } else {
        return null;
      }
    })
    .catch((err) => {
      console.log(err.message);
    })
}

getUserByUsername();
