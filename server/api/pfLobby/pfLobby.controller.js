'use strict';

var _ = require('lodash');
var PfLobby = require('./pfLobby.model');

// Get list of pfLobbys
exports.index = function(req, res) {
  PfLobby.find(function (err, pfLobbys) {
    if(err) { return handleError(res, err); }
    return res.json(200, pfLobbys);
  });
};

// Get a single pfLobby
exports.show = function(req, res) {
  PfLobby.findById(req.params.id, function (err, pfLobby) {
    if(err) { return handleError(res, err); }
    if(!pfLobby) { return res.send(404); }
    return res.json(pfLobby);
  });
};

// Creates a new pfLobby in the DB.
exports.create = function(req, res) {
  PfLobby.create(req.body, function(err, pfLobby) {
    if(err) { return handleError(res, err); }
    return res.json(201, pfLobby);
  });
};

// Updates an existing pfLobby in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  PfLobby.findById(req.params.id, function (err, pfLobby) {
    if (err) { return handleError(res, err); }
    if(!pfLobby) { return res.send(404); }
    var updated = _.merge(pfLobby, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, pfLobby);
    });
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