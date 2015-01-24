'use strict';

var _ = require('lodash');
var Lobby = require('./lobby.model.js');
var dal = require('./lobby.dal.js');
// Get list of pfLobbys
exports.index = function(req, res) {
  dal.findAll({},function(err,lobby){
    if(err){
      return handleError(res,err);
    }
    return res.json(200, lobby);
  });
};

// Get a single pfLobby
exports.show = function(req, res) {
  dal.findById(req.params.id, function (err,lobby) {
    if(err) {
      return handleError(res, err);
    }
    if(!pfLobby) {
      return res.send(404);
    }
    return res.json(200, lobby);
  });
};

// Creates a new pfLobby in the DB.
exports.create = function(req, res) {
  dal.create(req.body, function(err, pfLobby) {
    if(err) { return handleError(res, err); }
    return res.json(201, pfLobby);
  });
};

// Updates an existing pfLobby in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  dal.update(req.params.id,req.body, function (err, lobby) {
    if (err) { return handleError(res, err); }
    if(!lobby) { return res.send(404); }
    return res.json(200, lobby);
  });
};

// Deletes a pfLobby from the DB.
exports.destroy = function(req, res) {
  PfLobby.findById(req.params.id, function (err, pfLobby) {
    if(err) { return handleError(res, err); }
    if(!pfLobby) { return res.send(404); }
    pfLobby.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}