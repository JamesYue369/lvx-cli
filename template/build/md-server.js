
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var proxy = require('http-proxy-middleware');

var app = express();

// all environments
app.set('port', 8081);

app.use(require('connect-history-api-fallback')())
app.use(express.static(path.join(__dirname, '../')));

// development only
if ('development' == app.get('env')) {
  // app.use(express.errorHandler());
}

// app.get('/*', function(req, res){
//   res.redirect('/README.md');
// });




http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
