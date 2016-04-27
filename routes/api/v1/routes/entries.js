var express = require('express'),
    entriesRouter = express.Router(),
    db = require('../../../../db/connection'),
    Entry = require('../../../../db/models/EntryModel');
    
    
    
entriesRouter.route('/entries').get(function handler(req, res, next) {
  var query = req.query;
  Entry.find(query, (err, entries) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(entries);
    }
  });
});



entriesRouter.route('/entries/:entryID').get(function handler(req, res, next) {
  Entry.findById(req.params.entryID, (err, entry) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(entry);
    }
  });
});


module.exports = entriesRouter;







    
