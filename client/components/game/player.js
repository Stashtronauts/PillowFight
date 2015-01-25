/**
* Created by wfallows on 1/23/15.
*/
var PillowFight = PillowFight || {};
var Game = PillowFight.Game ||{};

Game.Player = function(gameWrapper){
  this.gameWrapper = gameWrapper || {};
  this.phGame = this.gameWrapper.phaserGame || {};

  this.id = 0;
  this.items = [];
  this.name = "";
  this.effects = [];
  this.inputController = {};

  this.inputController = new Game.PlayerInputController();
  return this;
};

Game.Player.prototype.addItem = function(itemToAdd){
    if (this.items.indexOf(itemToAdd) == -1) {
      this.items.push(itemToAdd);
    }
};

Game.Player.prototype.addEffect = function (effectToAdd) {
    if (this.effects.indexOf(effectToAdd) == -1) {
      this.effects.push(effectToAdd);
    }
};

Game.Player.prototype.removeItem = function(itemToRemove) {
    if (this.effects.indexOf(itemToRemove) != -1) {
      this.effects.splice(index, 1);
    }
};

Game.Player.prototype.removeEffect =  function (removedEffect) {
    if (this.effects.indexOf(removedEffect) != -1) {
      this.effects.splice(index, 1);
    }
};

Game.Player.prototype.preload = function(){
    this.phGame.load.image('player', '/assets/images/corgi.jpg');

};

Game.Player.prototype.create = function(){
    this.sprite = this.phGame.add.sprite(0, 0, 'player');
    this.sprite.anchor.setTo(0.5, 0.5);
};

Game.Player.prototype.update = function(){
    this.inputController.update();
};

Game.Player.prototype.render = function(){

};
