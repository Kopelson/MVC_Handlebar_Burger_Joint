// Object Relational Mapper (ORM)

// require dependencies
const connection = require("./connection.js");

const orm = {
    selectAll: function(tableName, cb) {
    const queryString = "SELECT * FROM " + tableName + ";";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  insertOne: function() {
    const queryString = "";
    connection.query(queryString, [], function(err, result) {
      if (err) throw err;
      console.log(result);
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