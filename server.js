'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var contactRouter = require(__dirname + '/mail/contact');

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/app/'));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use('/contact', contactRouter);

app.get('/*', function(req, res) {
  res.status(404).sendFile(__dirname + '/app/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Server up and running at localhost:' + app.get('port'));
});
