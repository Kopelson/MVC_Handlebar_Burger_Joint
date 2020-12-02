// require dependencies
const express = require("express");
const exphbs = require("express-handlebars");

// creates an instance of the server
const app = express();

// set the port of the application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// allows the server to hand out static files from the public folder
app.use(express.static("public"));

// set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// start the server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // log (server-side) when the server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });