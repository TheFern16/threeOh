var express = require('express');
var bodyParser = require('body-parser');
var Schema = require('./db/schema.js');

var app = express();

var port = process.env.PORT || 1337;

app.get('/api/artists', (req, res) => {
  Schema.Artist.findAll()
    .then((result) => {
      res.json(result);
    });
});

// app.get('/api/battles', (req, res) => {
//   Schema.Battles.findAll()
//     .then((result) => {
//       res.json(result);
//     });
// });

app.listen(port, () => {
  console.log(`I am listening to port ${port}`);
});