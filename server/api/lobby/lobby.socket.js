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
    socket.join(data.lobbyName);
  });

  socket.on('leaveLobby', function(data) {
    socket.leave(data.lobbyName);
  });

  socket.on('startLobby', function(data) {
    // * pass data to game initialize
    // * send promise or game id or whatever back 
    // to players (then players will transfer 
    socket.leave(data.lobbyName);
  });

  socket.on('chatToServer', function(data) {
    socket.to(data.lobbyName).emit(data.message);
    

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
