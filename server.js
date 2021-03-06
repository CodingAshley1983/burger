var express = require("express");
var fs = require("fs");
var PORT = process.env.PORT || 8080;

// Sets up the Express App
// =============================================================
var app = express();


// Static directory
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs  = require('express-handlebars');



app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 

// Routes
// =============================================================
var routes = require("./controllers/burgersController")

app.use(routes);

// Starting our Express app
// =============================================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
})

