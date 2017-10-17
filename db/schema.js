var Sequelize = require('sequelize');
var db = new Sequelize('hiphop', 'root', '');

var Artist = db.define('Artist', {
  artistName: Sequelize.STRING
});

Artist.sync();

module.exports = {
  Artist: Artist
};