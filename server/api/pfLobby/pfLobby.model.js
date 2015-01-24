'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PfLobbySchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('PfLobby', PfLobbySchema);