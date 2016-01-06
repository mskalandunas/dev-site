'use strict';

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/app/'));

app.get('/*', function(req, res) {
  res.status(404).sendFile(__dirname + '/app/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Server up and running at localhost:' + app.get('port'));
});
