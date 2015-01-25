/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Scene = require('./scene.model');

exports.register = function(socket) {
  Scene.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Scene.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('scene:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('scene:remove', doc);
}