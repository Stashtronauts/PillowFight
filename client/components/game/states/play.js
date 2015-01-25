/**
 * Created by Memoria on 1/24/15.
 */
var PillowFight = PillowFight || {};

PillowFight.Play = function(gameWrapper){
  this.gameWrapper = gameWrapper || {};
  this.phRef = this.gameWrapper.phaserGame || {};

  return this;
};

PillowFight.Play.prototype.preload = function () {
    this.phRef.add.text(PillowFight.Game.Width/2, PillowFight.Game.Height/2, 'I am a platypus. FEAR MY BILL', { font: "20px Arial", fill: "#ffffff", align: "center" });

    // Init physics
    this.phRef.physics.startSystem(Phaser.Physics.ARCADE);

    // Initialize player
    this.gameWrapper.AddPlayer(new PillowFight.Game.Player(this.gameWrapper));

    _.each(this.gameWrapper.players, function(player){
      player.preload();
    });
};

PillowFight.Play.prototype.create = function () {

};

  // Main game loop
PillowFight.Play.prototype.update = function () {
  _.each(this.gameWrapper.players, function(player){
    player.update();
  });
};

  // On render
PillowFight.Play.prototype.render = function () {
  _.each(this.gameWrapper.players, function(player){
    player.render();
  });
};
