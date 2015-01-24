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
      Current.state.add("Boot", PillowFight.Boot);
      Current.state.add("Loading", PillowFight.Loading);
      Current.state.add("Play", PillowFight.Play);

      Current.state.start("Boot");
  }

};
