/**
 * Created by Memoria on 1/24/15.
 */
var PillowFight = PillowFight || {};

PillowFight.Play = function(){

};

PillowFight.Play.prototype.preload = function () {
    this.phaserRef = PillowFight.Game.Current || {};
    this.phaserRef.add.text(PillowFight.Game.Width/2, PillowFight.Game.Height/2, 'I am a platypus. FEAR MY BILL', { font: "20px Arial", fill: "#ffffff", align: "center" });

    // Init physics
    this.phaserRef.physics.startSystem(Phaser.Physics.ARCADE);

    // Initialize player
    PillowFight.Game.AddPlayer(new PillowFight.Player());

    _.each(PillowFight.Game.Players, function(player){
      player.preload();
    });
};

PillowFight.Play.prototype.create = function () {

};

  // Main game loop
PillowFight.Play.prototype.update = function () {
  _.each(PillowFight.Game.Players, function(player){
    player.update();
  });
};

  // On render
PillowFight.Play.prototype.render = function () {
    return "cats";
};
