var http = require('http');
var port = process.env.PORT || 8888;

http.createServer(function onRequestReceived(request, response){
  var nerve = require('nervex').nerve;
  var app = require('./app');

  var injector = nerve(request, response).
    bootstrap(app);

  injector.invoke(function($server){
    $server.run();
  });

}).listen(port);

console.log('Listening on port ' + port);


