/**
* Created by Memoria on 1/23/15.
*/
var PillowFight = PillowFight || {};

PillowFight.PlayerState = { IDLE:0, HOSTING: 1, JOINING: 2, ACTIVE: 3 };

PillowFight.Player = function(){
  this.game = PillowFight.Game;

  this.game.Current.input.keyboard.addCallbacks();
};

PillowFight.Player.prototype = {
  id: 0,
  items: [],
  name: "",
  state: PillowFight.PlayerState.IDLE,
  cursors: this.game.input.keyboard.createCursorKeys(), // These represent an object containing the up, down, left, and right cursors

  onKeyDown: function(){
    // make some poops :)
  }

};
