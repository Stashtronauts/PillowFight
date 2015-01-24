/**
 * Created by Memoria on 1/23/15.
 */
var PillowFight = PillowFight || {};

PillowFight.Game = function(){
  // Constants
  this.DEFAULT_GAME_WIDTH = 800;
  this.DEFAULT_GAME_HEIGHT = 600;
};

PillowFight.Game.Current = {};
PillowFight.Game.Width;
PillowFight.Game.Height;

PillowFight.Game.prototype = {

  initialize: function(gameWidth, gameHeight) {
      // Init game
      var width = gameWidth || this.DEFAULT_GAME_WIDTH;
      var height = gameHeight || this.DEFAULT_GAME_HEIGHT;

      var phaserGame = new Phaser.Game(width, height, Phaser.AUTO, 'PillowFight', {
        preload: this.onPreload,
        create: this.onCreate,
        update: this.onUpdate,
        render: this.onRender
      });

      // Add states
      phaserGame.state.add("Boot", PillowFight.Boot);
      phaserGame.state.add("Load", PillowFight.Loading);
      phaserGame.state.add("Play", PillowFight.Play);

      phaserGame.state.start("Boot");

      PillowFight.Game.Current = phaserGame;
      PillowFight.Game.Width = width;
      PillowFight.Game.Height = height;
      // Init login

      // Initialize player

      // Move player to lobby state
  },

  // Handle any pre-render logic here
  onPreload: function () {
    this.Current.add.text(680, 550, 'I am a platypus. FEAR MY BILL', { font: "20px Arial", fill: "#fff", align: "center" });
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
