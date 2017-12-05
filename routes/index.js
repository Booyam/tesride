var express = require('express');
var router = express.Router();


/* GET Index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

/* GET Applications page. */
router.get('/packages', function(req, res, next) {
  res.render('packages', { title: 'Packages' });
});

/* GET Training Resources page. */
router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Products' });
});

/* GET Codes page. */
router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'Gallery' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

module.exports = router;
