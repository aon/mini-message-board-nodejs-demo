var express = require('express');
var router = express.Router();
const messages = require('../public/javascripts/messages');

/* GET new message form. */
router.get('/', function (req, res, next) {
  res.render('form');
});

router.post('/', function (req, res, next) {
  messages.push({
    title: req.body.title,
    description: req.body.description,
    username: req.body.username,
    date: new Date()
  })
  res.redirect('/')
});

module.exports = router;
