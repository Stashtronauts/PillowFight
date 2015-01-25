'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var ComponentSchema = new Schema({
  type:'string',
  value:Object
})
var EntitySchema = new Schema({
  components: [ComponentSchema],
  info: String,
  active: Boolean
});
mongoose.model('Component',ComponentSchema);
module.exports = mongoose.model('Entity', EntitySchema);