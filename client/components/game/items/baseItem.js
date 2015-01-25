/**
 * Created by Memoria on 1/24/15.
 */
var PillowFight = PillowFight || {};
var Game = PillowFight.Game ||{};

Game.BaseItem = function(gameWrapper, name, pathToImage){
  this.gameWrapper = gameWrapper || {};
  this.game = this.gameWrapper.phaserGame || {};

  this.id = 0;
  this.name = name || "";
  this.sprite = {};
  this.imagePath = pathToImage || "";
  this.effect = function(){};
};

Game.BaseItem.prototype.create = function() {
  this.sprite = this.game.add.sprite(0, 0, this.name);
};

Game.BaseItem.prototype.preload = function() {
  this.game.load.image(this.name, this.imagePath);
};

Game.BaseItem.prototype.destroy = function() {
  this.sprite.destroy();
};
