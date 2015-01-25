'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AssetSchema = new Schema({
  type:String,
  key:String,
  url:String
});

module.exports = mongoose.model('Asset', AssetSchema);