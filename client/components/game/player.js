/**
* Created by Memoria on 1/23/15.
*/
var PillowFight = PillowFight || {};

PillowFight.Player = function(){
  this.phaserRef = PillowFight.Game.Current;
  this.initialize();
};

PillowFight.Player.prototype = {
  id: 0,
  items: [],
  name: "",
  effects: [],
  //sprite: new
  //inputController: InputController

  initialize: function(){
    this.inputController = new PillowFight.PlayerInputController();
    this.sprite = new Phaser.Sprite(this.phaserRef, 0, 0, "player");
    this.sprite.anchor.setTo(0.5, 0.5);
  },

  addItem: function(itemToAdd){
    if (this.items.indexOf(effectToAdd) == -1) {
      this.items.push(effectToAdd);
    }
  },

  addEffect: function (effectToAdd) {
    if (this.effects.indexOf(effectToAdd) == -1) {
      this.effects.push(effectToAdd);
    }
  },

  removeItem: function(itemToRemove) {
    if (this.effects.indexOf(removedEffect) != -1) {
      this.effects.splice(index, 1);
    }
  },

  removeEffect: function (removedEffect) {
    if (this.effects.indexOf(removedEffect) != -1) {
      this.effects.splice(index, 1);
    }
  },

  preload: function(){
    this.phaserRef.load.image('player', 'assets/cat.png')
  },

  update: function(){
    inputController.update();
  }
};
