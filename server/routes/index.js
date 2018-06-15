var express = require("express");
var router = express.Router();

var creators = require("../model/creators");

/* GET home page. */

router.get("/creators", (req, res) => {
  res.json({ name: "bob" });
});

router.post("/creators", (req, res) => {
  console.log("BODY", req.body);
  // res.json(req.body);
  creators
    .create(req.body)
    .then(creator => res.json(creator))
    .catch(e => {
      console.error("ERROR", e);
      res.send(e);
    });
});

module.exports = router;
