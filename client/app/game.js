/**
 * Created by Memoria on 1/23/15.
 */
var Game = module.exports = (function() {

  // Constants
  var DEFAULT_GAME_WIDTH = 800;
  var DEFAULT_GAME_HEIGHT = 600;
  var Current = {};

  return {
    initialize: function(gameWidth, gameHeight) {
      // Init game
      this.width = gameWidth || DEFAULT_GAME_WIDTH;
      this.height = gameHeight || DEFAULT_GAME_HEIGHT;

      Current = new Phaser.Game(width, height, Phaser.AUTO, 'PillowFight', {
        preload: onPreload,
        create: onCreate,
        update: onUpdate,
        render: onRender
      });

      // Init login

      // Initialize player

      // Move player to lobby state
    }
  }

  // Handle any pre-render logic here
  var onPreload = function () {
    this.Current.add.text(680, 550, 'I am a platypus. FEAR MY BILL', { font: "20px Arial", fill: "#ffffff", align: "center" });
  };

  var onCreate = function () {
    // Init physics
    this.Game.physics.startSystem(Phaser.Physics.ARCADE);
  };

  // Main game loop
  var onUpdate = function () {

  };

  // On render
  var onRender = function () {
    return "cats";
  };

})();
