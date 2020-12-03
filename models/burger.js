// import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  
  insertOne: function(columnNames, values, cb) {
    orm.insertOne("burgers", columnNames, values, function(res) {
      cb(res);
    });
  },
  updateOne: function(objectColumnValues, condition, cb) {
    orm.updateOne("burgers", objectColumnValues, condition,  function(res) {
      cb(res);
    });
  },
  deleteOne: function() {
    orm.deleteOne("", function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;