/**
 * Created by Memoria on 1/24/15.
 */
var PillowFight = PillowFight || {};

PillowFight.Loading = function(){
};

PillowFight.Loading.prototype = {
    // Handle any pre-render logic here
    preload: function () {
    this.phaserRef = PillowFight.Game.Current || {};
    this.phaserRef.add.text(PillowFight.Game.Width/2, PillowFight.Game.Height/2, 'I am a loading screen.', { font: "20px Arial", fill: "#ffffff", align: "center" });

  },

  create: function () {
    this.phaserRef.state.start("Play");
  },

  // Main game loop
  update: function () {

  },

  // On render
  render: function () {
    return "cats";
  }

};
