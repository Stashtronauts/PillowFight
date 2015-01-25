/**
 * Created by Memoria on 1/24/15.
 */
var PillowFight = PillowFight || {};

PillowFight.Play = function(gameWrapper){
  this.gameWrapper = gameWrapper || {};
  return this;
};

PillowFight.Play.prototype.preload = function () {
    this.game.add.text(this.gameWrapper.width/2, this.gameWrapper.height/2, 'I am a platypus. FEAR MY BILL', { font: "20px Arial", fill: "#ffffff", align: "center" });

    // Init physics
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    // Initialize player
    this.gameWrapper.AddPlayer(new PillowFight.Game.Player(this.gameWrapper));

    _.each(this.gameWrapper.players, function(player){
      player.preload();
    });
};

PillowFight.Play.prototype.create = function () {
  _.each(this.gameWrapper.players, function(player){
    player.create();
  });
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
