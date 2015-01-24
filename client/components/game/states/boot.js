/**
 * Created by Memoria on 1/24/15.
 */
var PillowFight = PillowFight || {};

PillowFight.Boot = function(game){
  this.teamText = "";
  this.game = game;
  return this;
};

PillowFight.Boot.prototype.create = function() {
    this.phaserRef.stage.backgroundColor = '#D46A6A';

    //scaling options
    this.phaserRef.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    //have the game centered horizontally
    this.phaserRef.scale.pageAlignHorizontally = true;
    this.phaserRef.scale.pageAlignVertically = true;

    //screen size will be set automatically
    this.phaserRef.scale.setScreenSize(true);
    this.phaserRef.time.events.add(3000, this.onEndBoot, this);
};

PillowFight.Boot.prototype.preload = function() {
    this.phaserRef = PillowFight.Game.Current || {};
    this.teamText = this.phaserRef.add.text(PillowFight.Game.Width/2, PillowFight.Game.Height/2,
                                        'Stashtronaut Studios', { font: "20px Arial", fill: "#ffffff",
                                        align: "center" });
    this.teamText.anchor.setTo(0.5, 0.5);
};

PillowFight.Boot.prototype.update = function() {

};

PillowFight.Boot.prototype.render = function() {

};

PillowFight.Boot.prototype.onEndBoot = function() {
    this.phaserRef.state.start("Play");
};
