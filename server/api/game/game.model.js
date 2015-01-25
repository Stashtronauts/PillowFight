'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var GameSchema = new Schema({
  name: String,
  players: [String],
  house: {}
});

var HouseSchema = new Schema({
  rooms:[{}]
});

mongoose.model('House',HouseSchema);
module.exports = mongoose.model('Game', GameSchema);
