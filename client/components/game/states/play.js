/**
 * Created by Memoria on 1/24/15.
 */
var PillowFight = PillowFight || {};

PillowFight.Play = function(gameWrapper){
  this.gameWrapper = gameWrapper || {};
  this.items = [{}];

  return this;
};

PillowFight.Play.prototype.preload = function () {
    this.game.add.text(this.gameWrapper.width/2, this.gameWrapper.height/2, 'I am a platypus. FEAR MY BILL', { font: "20px Arial", fill: "#ffffff", align: "center" });

    // Init physics
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    // Initialize player
    this.gameWrapper.AddPlayer(new Game.Player(this.gameWrapper));

    _.each(this.gameWrapper.players, function(player){
      player.preload();
    });
};

PillowFight.Play.prototype.create = function () {
  _.each(this.gameWrapper.players, function(player){
    player.create();
  });

  this.spawnItems();
};

  // Main game loop
PillowFight.Play.prototype.update = function () {
  var game = this.game;

  _.each(this.gameWrapper.players, function(player){
    game.physics.arcade.collide(player, this.items, this.collectItem, null, this);
    player.update();
  });
};

  // On render
PillowFight.Play.prototype.render = function () {
  _.each(this.gameWrapper.players, function(player){
    player.render();
  });
};

PillowFight.Play.prototype.collectItem = function(player, itemCollected){
  if(player.addItem(itemCollected)){
    // If the player already has the item, they shouldn't be able to collect it again
    if(this.items.indexOf(itemCollected) != -1){
      itemCollected.destroy();
      this.items.splice(this.items.indexOf(itemCollected), 1);
    }
  }
};

PillowFight.Play.prototype.spawnItems = function(){

};
