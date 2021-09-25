var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { error: false });
});

router.get('/login', function(req, res, next) {
  res.render('login', { error: false });
});

router.get('/register', function(req, res, next) {
  res.render('register', { error: false });
});

module.exports = router;
