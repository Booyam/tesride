var express = require('express');
var router = express.Router();


/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

/* GET Destination page. */
router.get('/destination', function(req, res, next) {
  res.render('destination', { title: 'Destination' });
});

/* GET Book page. */
router.get('/book', function(req, res, next) {
  res.render('book', { title: 'Book' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET Login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});



module.exports = router;
