/**
 * Created by Memoria on 1/24/15.
 */
var PillowFight = PillowFight || {};
var Game = PillowFight.Game || {};

Game.PlayerInputController = function(gameWrapper){
  this.gameWrapper = gameWrapper;
  this.game = this.gameWrapper.phaserGame || {};

  return this;
};

Game.PlayerInputController.prototype.update = function(){

};
