/**
 * Created by Memoria on 1/24/15.
 */
var PillowFight = PillowFight || {};

PillowFight.Boot = function(){

};

PillowFight.Boot.prototype = {
  create: function(){
    //loading screen will have a white background
    this.phaserRef.stage.backgroundColor = '#ff33bf';

    //scaling options
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    //have the game centered horizontally
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    //screen size will be set automatically
    this.scale.setScreenSize(true);

    this.state.start('Load');
  },

  preload: function(){
    this.phaserRef = PillowFight.Game.Current || {};
  },

  update: function(){

  },

  render: function(){

  }
};
