var express = require('express'),
  router = express.Router(),
  Entries = require('./routes/entries');

router.use('/', Entries);

/* GET home page. */
router.get('/', function handler(req, res, next) {
  res.json({
    name: 'Car Stack API',
    version: '1.0.0'
  });
});




module.exports = router;
