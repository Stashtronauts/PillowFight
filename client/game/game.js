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

      Current = new Phaser.Game(width, height, Phaser.AUTO, 'PillowFight', {
        preload: this.onPreload,
        create: this.onCreate,
        update: this.onUpdate,
        render: this.onRender
      });

      // Init login

      // Initialize player

      // Move player to lobby state
  },

  // Handle any pre-render logic here
  onPreload: function () {
    this.Current.add.text(680, 550, 'I am a platypus. FEAR MY BILL', { font: "20px Arial", fill: "#ffffff", align: "center" });
  },

  onCreate: function () {
    // Init physics
    this.Game.physics.startSystem(Phaser.Physics.ARCADE);
  },

  // Main game loop
  onUpdate: function () {

  },

  // On render
  onRender: function () {
    return "cats";
  }

};
