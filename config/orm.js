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

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. { devoured: 1} => ["devoured=1"]
      arr.push(key + "=" + value);
    }
  }
  // translate array of strings to a single comma-separated string
  return arr.toString();
}

const orm = {
    selectAll: function(tableName, cb) {
    const queryString = "SELECT * FROM " + tableName + ";";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      //console.log(result);
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

    //console.log(queryString);

    connection.query(queryString, values, function(err, result) {
      if (err) throw err;
      //console.log(result);

      cb(result);
    });
  },
  updateOne: function(table, objectColumnValues, condition, cb) {
    //UPDATE `burgers_db`.`burgers` SET `devoured` = '1' WHERE (`id` = '4');
    let queryString = "UPDATE " + table;
    
    queryString += " SET ";
    queryString += objToSql(objectColumnValues);
    queryString += " WHERE ";
    queryString += condition;

    //console.log(queryString);

    connection.query(queryString, function(err, result) {
        if (err) throw err;
        
        cb(result);
      }
    );
  },
  deleteOne: function() {
    const queryString = "";
    connection.query(queryString, [], function(err, result) {
        if (err) throw err;
        //console.log(result);
      }
    );
  }
};

// export orm object
module.exports = orm;