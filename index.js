var config = require('./config.json');
var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/static'));

app.listen(config.PORT, function () {
  console.log('Example app listening on port ' + config.PORT);
});