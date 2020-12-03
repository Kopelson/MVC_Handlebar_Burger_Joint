// require dependencies
const express = require("express");
// initialize a route handler 
const router = express.Router();

// import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// create each route and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    const hbsObject = {
      burgers: data
    };
    //console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne(["burger_name"], [req.body.burger_name], function(result) {
    // Send back the ID of the new quote
    //console.log({ id: result.insertId });
    res.redirect("/");
  });
});

router.put("/api/burgers/:id", function(req, res) {
  const condition = "id = " + req.params.id;

  //console.log("condition", condition);
  //console.log({isDevoured : req.body.devoured})
  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;
  
    //console.log("condition", condition);
  
    burger.deleteOne({
      burger_name: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

// Export routes for server.js to use.
module.exports = router;