/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Lobby = require('./lobby.model.js');
var dal = require('./lobby.dal.js');
exports.register = function(socket) {
  PfLobby.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  PfLobby.schema.post('remove', function (doc) {
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
    socket.emit('chatToClient' function(data) {
    
    });
  });
  
  
  
  
}

function onSave(socket, doc, cb) {
  socket.emit('pfLobby:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('pfLobby:remove', doc);
}

// Receive Chat Message
// - Args - EventName
// -      - MessageData
// -      - - 