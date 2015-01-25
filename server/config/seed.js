/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Game = require('../api/game/game.model');
var mongoose = require('mongoose');
var House = mongoose.model('House');
User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Game.find({}).remove(function(){
  Game.create({
    name:'test',
    players:['testadmin'],
    house:{
      rooms:[{
        name:'Test Room',
        scene:{
          assets:[{
            type:'image',
            key:'player',
            url:'/assets/images/cat.jpg'
          }],
          layout:[{
            components:[{
              type:'transform',
              value:{
                x:0,
                y:0
              }
            },
            {
              type:'sprite',
              value:{
                key:'player'
              }
            }]
          }]
        }
      }]
    }
  },function(e){
    console.log(e,'created game');
  })
});