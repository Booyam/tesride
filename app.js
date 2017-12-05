// Adding required modules
var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var routes = require('./routes/index');
var config = require('./config.json');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


 app.set('config', config); 


// Adding routes
app.use('/', routes);
app.get('*', function(req, res) {
  res.send('Bad Route');
});


var server = app.listen(config.port, function() {
  console.log('Listening on port '+ config.port);
}); 

// error handlers 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



module.exports = app;
