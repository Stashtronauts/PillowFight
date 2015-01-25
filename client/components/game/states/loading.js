/**
 * Created by Memoria on 1/24/15.
 */
var PillowFight = PillowFight || {};

PillowFight.Loading = function(gameWrapper){
  this.gameWrapper = gameWrapper || {};
  this.phRef = this.gameWrapper.phaserGame || {};

  return this;
};

PillowFight.Loading.prototype.preload = function () {
    this.phRef.add.text(PillowFight.Game.Width/2, PillowFight.Game.Height/2, 'I am a loading screen.', { font: "20px Arial", fill: "#ffffff", align: "center" });

};

PillowFight.Loading.prototype.create = function () {
    this.phRef.state.start("Play");
};

  // Main game loop
PillowFight.Loading.prototype.update = function () {

};

  // On render
PillowFight.Loading.prototype.render = function () {

};
