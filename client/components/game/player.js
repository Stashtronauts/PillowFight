/**
* Created by wfallows on 1/23/15.
*/
var PillowFight = PillowFight || {};
var Game = PillowFight.Game ||{};

Game.Player = function(gameWrapper){
  this.gameWrapper = gameWrapper || {};
  this.game = this.gameWrapper.phaserGame || {};

  this.id = 0;
  this.items = [];
  this.name = "";
  this.effects = [{}];
  this.inputController = {};

  this.inputController = new Game.PlayerInputController(this.gameWrapper);
  this.setupKeys();
  return this;
};

Game.Player.prototype.setupKeys = function(){
  this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
  this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
  this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
  this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);

  this.attackKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  this.attackKey.onDown.add(this.fire, this);
}

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
  this.game.load.image('player', '/assets/images/cat.jpg');
};

Game.Player.prototype.create = function(){
  this.sprite = this.game.add.sprite(0, 0, 'player');
  this.spawn();
};

Game.Player.prototype.update = function(){
  if(this.sprite.isAlive){
    if(this.upKey.isDown){
      this.sprite.y -= 5;
    }

    if(this.downKey.isDown){
      this.sprite.y += 5;
    }

    if(this.leftKey.isDown){
      this.sprite.x -= 5;
    }

    if(this.rightKey.isDown){
      this.sprite.x += 5;
    }
  }

  this.checkBounds();
};

Game.Player.prototype.render = function(){

};

Game.Player.prototype.checkBounds = function(){
  if(this.sprite.x < 0){
    this.sprite.x = 0;
  }

  if(this.sprite.y < 0){
    this.sprite.y = 0;
  }

  if(this.sprite.x + this.sprite.width > this.gameWrapper.width){
    this.sprite.x = this.gameWrapper.width - this.sprite.width;
  }

  if(this.sprite.y + this.sprite.height > this.gameWrapper.height){
    this.sprite.y = this.gameWrapper.height - this.sprite.height;
  }
};

Game.Player.prototype.fire = function(key){
  console.log("PEW PEW");
};

Game.Player.prototype.spawn = function(){
  this.sprite.isAlive = true;
};

Game.Player.prototype.die = function(){
  this.sprite.isAlive = false;
};
