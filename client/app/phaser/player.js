/**
* Created by Memoria on 1/23/15.
*/
var PillowFight = PillowFight || {};

PillowFight.PlayerState = { IDLE:0, HOSTING: 1, JOINING: 2, ACTIVE: 3 };

PillowFight.Player = function(){
  PillowFight.Game.Current.input.keyboard.addCallbacks();
};

PillowFight.Player.prototype = {
  id: 0,
  items: [],
  name: "",
  state: PlayerState.IDLE,

  onKeyDown: function(){
    // make some poops :)
  }

};
