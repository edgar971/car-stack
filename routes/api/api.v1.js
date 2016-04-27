var express = require('express'),
    router = express.Router(),
    db = require('../../db/connection'),
    Book = require('../../db/models/EntryModel');
    

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(db);
  res.json('welcome to the api');
});

module.exports = router;
