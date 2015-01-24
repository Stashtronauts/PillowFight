/**
* Created by wfallows on 1/23/15.
*/
var PillowFight = PillowFight || {};
PillowFight.Game = PillowFight.Game ||{};

PillowFight.Game.Player = function(game){
  this.game = game;
  this.id = 0;
  this.items = [];
  this.name = "";
  this.effects = [];
  this.inputController = {};

  this.initialize();
  return this;
};

PillowFight.Player.prototype.initialize = function(){
    this.inputController = new PillowFight.PlayerInputController();
    this.sprite = new Phaser.Sprite(this.phaserRef, 0, 0, "player");
    this.sprite.anchor.setTo(0.5, 0.5);
};

PillowFight.Player.prototype.addItem = function(itemToAdd){
    if (this.items.indexOf(itemToAdd) == -1) {
      this.items.push(itemToAdd);
    }
};

PillowFight.Player.prototype.addEffect = function (effectToAdd) {
    if (this.effects.indexOf(effectToAdd) == -1) {
      this.effects.push(effectToAdd);
    }
};

PillowFight.Player.prototype.removeItem = function(itemToRemove) {
    if (this.effects.indexOf(itemToRemove) != -1) {
      this.effects.splice(index, 1);
    }
};

PillowFight.Player.prototype.removeEffect =  function (removedEffect) {
    if (this.effects.indexOf(removedEffect) != -1) {
      this.effects.splice(index, 1);
    }
};

PillowFight.Player.prototype.preload = function(){
    this.phaserRef.load.image('player', 'assets/cat.png')
};

PillowFight.Player.prototype.update = function(){
    this.inputController.update();
};
