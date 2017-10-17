var express = require('express');
var bodyParser = require('body-parser');
var schema = require('./db/schema.js');

var app = express();

var port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log(`I am listening to port ${port}`);
});