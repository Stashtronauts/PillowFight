/**
 * Created by Memoria on 1/24/15.
 */
var PillowFight = PillowFight || {};

PillowFight.Play = function(){
  this.gameRef = PillowFight.Game.Current || {};

};

PillowFight.Play.prototype = {

  // Handle any pre-render logic here
  preload: function () {
    this.phaserRef = PillowFight.Game.Current || {};
    this.phaserRef.add.text(PillowFight.Game.Width/2, PillowFight.Game.Height/2, 'I am a platypus. FEAR MY BILL', { font: "20px Arial", fill: "#ffffff", align: "center" });
  },

  create: function () {
    // Init physics
    this.phaserRef.physics.startSystem(Phaser.Physics.ARCADE);
  },

  // Main game loop
  update: function () {

  },

  // On render
  render: function () {
    return "cats";
  }
};
