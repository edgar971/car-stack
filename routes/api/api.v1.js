var express = require('express'),
  router = express.Router(),
  db = require('../../db/connection'),
  Entry = require('../../db/models/EntryModel');


/* GET home page. */
router.get('/', function handler(req, res, next) {
  res.json('welcome to the api');
});

// Return all entries
router.get('/entries', function handler(req, res, next) {
  var query = req.query;
  Entry.find(query, (err, entries) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(entries);
    }
  });
});

//get entry by id
router.get('/entries/:entryID', function handler(req, res, next) {
  Entry.findById(req.params.entryID, (err, entry) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(entry);
    }
  });
});

module.exports = router;
