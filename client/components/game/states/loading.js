/**
 * Created by Memoria on 1/24/15.
 */
var PillowFight = PillowFight || {};

PillowFight.Loading = function(){
  this.gameRef = PillowFight.Game.Current || {};

};

PillowFight.Loading.prototype = {
    // Handle any pre-render logic here
    preload: function () {
    this.Current.add.text(680, 550, 'I am a loading screen.', { font: "20px Arial", fill: "#ffffff", align: "center" });

  },

  create: function () {
    this.gameRef.state.start("Play");
  },

  // Main game loop
  update: function () {

  },

  // On render
  render: function () {
    return "cats";
  }

};
