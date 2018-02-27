
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

// app.use(express.favicon());
// app.use(express.logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.methodOverride());
// app.use(app.router);
app.use('/user', proxy({target: 'https://dev.yunhetong.com', changeOrigin: true, secure: false,}))
app.use('/cas', proxy({target: 'https://dev.yunhetong.com', changeOrigin: true, secure: false,}))
app.use('/contract', proxy({target: 'https://dev.yunhetong.com', changeOrigin: true, secure: false,}))
app.use(require('connect-history-api-fallback')())
app.use(express.static(path.join(__dirname, '../dist/lvx')));

// development only
if ('development' == app.get('env')) {
  // app.use(express.errorHandler());
}

// app.get('/*', function(req, res){
//   res.redirect('/index.html');
// });




http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
