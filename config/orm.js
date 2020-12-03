// Object Relational Mapper (ORM)

// require dependencies
const connection = require("./connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}


const orm = {
    selectAll: function(tableName, cb) {
    const queryString = "SELECT * FROM " + tableName + ";";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  insertOne: function(tableName, columnNames, values, cb) {
    let queryString = "INSERT INTO " + tableName;
    queryString += " (";
    queryString += columnNames.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(values.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, values, function(err, result) {
      if (err) throw err;
      console.log(result);

      cb(result);
    });
  },
  updateOne: function() {
    const queryString = "";
    connection.query(queryString, [], function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  },
  deleteOne: function() {
    const queryString = "";
    connection.query(queryString, [], function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

// export orm object
module.exports = orm;