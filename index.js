var PORT = 8000;
var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/static'));

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT);
});