// import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");
//initialize the burger model object
const burger = {
  //read 
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  //create
  insertOne: function(columnNames, values, cb) {
    orm.insertOne("burgers", columnNames, values, function(res) {
      cb(res);
    });
  },
  //update
  updateOne: function(objectColumnValues, condition, cb) {
    orm.updateOne("burgers", objectColumnValues, condition,  function(res) {
      cb(res);
    });
  },
  //delete
  deleteOne: function(condition, cb) {
    orm.deleteOne("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;