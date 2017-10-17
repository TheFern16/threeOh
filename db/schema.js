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

var Battles = db.define('Battles', {
  battleName: Sequelize.STRING,
  redRapper: Sequelize.STRING,
  blueRapper: Sequelize.STRING
});


Battles.belongsTo(Artist);


Battles.sync();
Artist.sync();

module.exports = {
  Artist: Artist,
  Battles: Battles
};