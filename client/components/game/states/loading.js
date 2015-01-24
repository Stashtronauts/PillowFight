/**
 * Created by Memoria on 1/24/15.
 */
var PillowFight = PillowFight || {};

PillowFight.Loading = function(){

};

PillowFight.Loading.prototype = {
    // Handle any pre-render logic here
    preload: function () {
    this.Current.add.text(680, 550, 'I am a loading screen.', { font: "20px Arial", fill: "#ffffff", align: "center" });

  },

  create: function () {

  },

  // Main game loop
  update: function () {

  },

  // On render
  render: function () {
    return "cats";
  }

};
