// load .env data into process.env // load the .env!
require("dotenv").config();
// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const app = express();
const morgan = require("morgan");
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// filter by city function
// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.set('layout', './layouts/main')
app.set("view engine", "ejs");


app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));
app.use(expressLayouts);

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own


const acclaimRoutes = require("./routes/acclaim");
const loginRoute = require("./routes/login");
const contactRoute = require("./routes/contact");
const acclaimFavRoutes = require("./routes/favorites");
const searchRoute = require("./routes/search");
const postRoute = require("./routes/post")


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own

app.use('/acclaim', acclaimRoutes(db));
app.use('/login', loginRoute(db));
app.use('/contact', contactRoute(db))
app.use('/acclaim/favorites', acclaimFavRoutes(db));
app.use('/search', searchRoute(db));
app.use('/post', postRoute(db));


// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
// -----------------------------------------------------------

app.get("/", (req, res) => {
  res.render("index", { layout: false });
});

app.get("/login/:user_id", (req, res) => {
  res.cookie('user_id', req.params.user_id);
  console.log(req.cookies["user_id"]);
  res.redirect('/acclaim');
})

// app.post("/logout", (req, res) => {
//   res.clearCookie('user_id');
// });

app.get('/logout', (req, res) => {
  res.clearCookie('user_id');
  res.redirect("/");
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
