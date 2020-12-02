// import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb) {
    orm.selectAll("", function(res) {
      cb(res);
    });
  },
  
  insertOne: function() {
    orm.insertOne("", function(res) {
      cb(res);
    });
  },
  updateOne: function() {
    orm.updateOne("", function(res) {
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