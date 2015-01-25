'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var SceneSchema = new Schema({
  assets: {},
  layout:{}
});

module.exports = mongoose.model('Scene', SceneSchema);