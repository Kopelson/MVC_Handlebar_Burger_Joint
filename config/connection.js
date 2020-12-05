// require dependencies
const mysql = require("mysql");
require("dotenv").config();
// initialize a variable to store the connection
let connection;
//checks if jawsdb is being used on heroku or if a local instance is being ran
if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASS,
    database: "burgers_db"
  });
}
//connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
// export db connection
module.exports = connection;