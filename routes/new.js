var express = require('express');
var router = express.Router();

/* GET new message form. */
router.get('/', function(req, res, next) {
  res.send('new message');
});

module.exports = router;
