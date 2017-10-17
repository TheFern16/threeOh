var Sequelize = require('sequelize');
var db = new Sequelize('hiphop', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

var Artist = db.define('Artist', {
  artistName: Sequelize.STRING
});

Artist.sync();

module.exports = {
  Artist: Artist
};