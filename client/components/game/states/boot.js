/**
 * Created by Memoria on 1/24/15.
 */
var PillowFight = PillowFight || {};

PillowFight.Boot = function(gameWrapper){
  this.teamText = "";
  this.gameWrapper = gameWrapper || {};

  return this;
};

PillowFight.Boot.prototype.create = function() {
    this.game.stage.backgroundColor = '#D46A6A';

    this.game.time.events.add(2000, this.onEndBoot, this);
};

PillowFight.Boot.prototype.preload = function() {
    this.teamText = this.game.add.text(this.gameWrapper.width/2, this.gameWrapper.height/2,
                                        'Stashtronaut Studios', { font: "20px Arial", fill: "#ffffff",
                                        align: "center" });
    this.teamText.anchor.setTo(0.5, 0.5);
};

PillowFight.Boot.prototype.update = function() {

};

PillowFight.Boot.prototype.render = function() {

};

PillowFight.Boot.prototype.onEndBoot = function() {
    this.game.state.start("Play");
};
