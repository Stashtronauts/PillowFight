/**
 * Created by tsteele on 1/24/2015.
 */

var Lobby = require('./lobby.model.js');
var _ = require('lodash');
module.exports = (function(){
  var api = {}

  api.findAll=function(params,cb){
    Lobby.find(function (err, lobbys) {
      return cb(err,lobbys)
    });
  }

  api.findById=function(id,cb){
    Lobby.findById(id, function (err, lobby) {
     return cb(err,lobby)
    });
  }

  api.create=function(model,cb){
    PfLobby.create(model, function(err, lobby) {
     return cb(err,lobby)
    });
  }

  api.update=function(id,delta,cb){

    api.find(id,function(err,lobby){
      if(err){
        return cb(err,null);
      }
      lobby = _.merge(result, req.body);
      lobby.save(function(err){
        return cb(err,result);
      });
    })
  }

  return api
})();