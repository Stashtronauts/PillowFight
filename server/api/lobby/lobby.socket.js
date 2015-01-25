/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Lobby = require('./lobby.model.js');
var dal = require('./lobby.dal.js');
exports.register = function(socket) {
  Lobby.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Lobby.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });

  socket.on('createLobby', function(data) {
    /* _Contract_
     * LobbyName
     *
    */

    socket.join(data.lobbyName);


  });

  socket.on('joinLobby', function(data) {

  });

  socket.on('leaveLobby', function(data) {

  });

  socket.on('startLobby', function(data) {

  });

  socket.on('chatToServer', function(data) {
    socket.emit('chatToClient', function(data) {

    });
  });




}

function onSave(socket, doc, cb) {
  socket.emit('Lobby:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('Lobby:remove', doc);
}

// Receive Chat Message
// - Args - EventName
// -      - MessageData
// -      - -
