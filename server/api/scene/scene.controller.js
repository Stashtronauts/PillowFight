'use strict';

var _ = require('lodash');
var Scene = require('./scene.model');

// Get list of scenes
exports.index = function(req, res) {
  Scene.find(function (err, scenes) {
    if(err) { return handleError(res, err); }
    return res.json(200, scenes);
  });
};

// Get a single scene
exports.show = function(req, res) {
  Scene.findById(req.params.id, function (err, scene) {
    if(err) { return handleError(res, err); }
    if(!scene) { return res.send(404); }
    return res.json(scene);
  });
};

// Creates a new scene in the DB.
exports.create = function(req, res) {
  Scene.create(req.body, function(err, scene) {
    if(err) { return handleError(res, err); }
    return res.json(201, scene);
  });
};

// Updates an existing scene in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Scene.findById(req.params.id, function (err, scene) {
    if (err) { return handleError(res, err); }
    if(!scene) { return res.send(404); }
    var updated = _.merge(scene, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, scene);
    });
  });
};

// Deletes a scene from the DB.
exports.destroy = function(req, res) {
  Scene.findById(req.params.id, function (err, scene) {
    if(err) { return handleError(res, err); }
    if(!scene) { return res.send(404); }
    scene.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}