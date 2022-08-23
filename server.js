// load .env data into process.env // load the .env!
require("dotenv").config();
// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
const apiRoutes = require('./apiRoutes'); /*Nadia----------------------------------------*/

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
//const buyersRoutes = require("./routes/buyers"); /*----------Nadia-------------------------------*/


const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");
const buyersRoutes = require("./routes/buyers");
const sellersRoutes = require("./routes/sellers");
const loginRoute = require("./routes/login");
// Mount all resource routes
// Note: Feel free to replace the example routes below with your own

//app.use("/buyers", buyersRoutes(db)); /*----------Nadia-------------------------------*/

app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
app.use('/buyers', buyersRoutes(db));
app.use('/sellers', sellersRoutes(db));
app.use('/login', loginRoute(db));
// /api/endpoints

/*Nadia starst----------------------------------------------------------------------------*/

// const apiRouter = express.Router();
// apiRoutes(apiRouter, database);
// app.use('/api', apiRouter);

/*Nadia Finish------------------------------------------------------------------------------*/

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
// -----------------------------------------------------------


// const routes = require('./routes/acclaimRoutes.js')
// app.use('/', routes);

app.get("/", (req, res) => {
  res.render("index");
});
app.get('/contact', (req, res) => {
  res.render('contact');
})


/*Nadia start--------------------------------------------------*/ 
app.post('/favorites', (req, res) => {
  //console.log(req.body)
  database.fillFavoritesTable(req.body)
    .then(result => {
      
      res.json(result);
    })
});
/*Nadia finish--------------------------------------------------*/ 

// Daniel's section
// maybe a page for filtering results?

// app.get('/search', (req, res) => {
//   res.render('search');
// })
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});


