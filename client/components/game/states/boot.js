/**
 * Created by Memoria on 1/24/15.
 */
var PillowFight = PillowFight || {};

PillowFight.Boot = function(gameWrapper){
  this.teamText = "";
  this.gameWrapper = gameWrapper || {};
  this.phRef = this.gameWrapper.phaserGame || {};

  return this;
};

PillowFight.Boot.prototype.create = function() {
    this.phRef.stage.backgroundColor = '#D46A6A';

    //scaling options
    this.phRef.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    //have the game centered horizontally
    this.phRef.scale.pageAlignHorizontally = true;
    this.phRef.scale.pageAlignVertically = true;

    //screen size will be set automatically
    this.phRef.scale.setScreenSize(true);
    this.phRef.time.events.add(3000, this.onEndBoot, this);
};

PillowFight.Boot.prototype.preload = function() {
    this.teamText = this.phRef.add.text(PillowFight.Game.Width/2, PillowFight.Game.Height/2,
                                        'Stashtronaut Studios', { font: "20px Arial", fill: "#ffffff",
                                        align: "center" });
    this.teamText.anchor.setTo(0.5, 0.5);
};

PillowFight.Boot.prototype.update = function() {

};

PillowFight.Boot.prototype.render = function() {

};

PillowFight.Boot.prototype.onEndBoot = function() {
    this.phRef.state.start("Play");
};
