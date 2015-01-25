/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Entity = require('./entity.model');

exports.register = function(socket) {
  Entity.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Entity.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('entity:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('entity:remove', doc);
}