/**
 * Created by Memoria on 1/23/15.
 */
var PillowFight = PillowFight || {};

PillowFight.Game = function(){};

PillowFight.Game.prototype = {

  // Constants
  DEFAULT_GAME_WIDTH: 800,
  DEFAULT_GAME_HEIGHT: 600,

  Current: {},

  initialize: function(gameWidth, gameHeight) {
      // Init game
      this.width = gameWidth || DEFAULT_GAME_WIDTH;
      this.height = gameHeight || DEFAULT_GAME_HEIGHT;

      Current = new Phaser.Game(width, height, Phaser.AUTO, 'PillowFight');

      // Add states
      Current.state.add("preload");
      Current.state.add("play", PillowFight.Play);
  }

};
