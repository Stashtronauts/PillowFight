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
    this.gameRef.add.text(680, 550, 'I am a platypus. FEAR MY BILL', { font: "20px Arial", fill: "#ffffff", align: "center" });
  },

  create: function () {
    // Init physics
    this.gameRef.physics.startSystem(Phaser.Physics.ARCADE);
  },

  // Main game loop
  update: function () {

  },

  // On render
  render: function () {
    return "cats";
  }
};
