'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RoomSchema = new Schema({
  name: String,
  scene:{type: mongoose.Schema.Types.ObjectId, ref: 'Scene'},
  players:[String]
});
module.exports = mongoose.model('Room', RoomSchema);