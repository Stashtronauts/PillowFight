/**
 * Created by Memoria on 1/24/15.
 */
var PillowFight = PillowFight || {};

PillowFight.Boot = function(){
  this.gameRef = PillowFight.Game.Current;
};

PillowFight.Boot.prototype = {
  create: function(){
    //loading screen will have a white background
    this.gameRef.stage.backgroundColor = '#fff';

    //scaling options
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    //have the game centered horizontally
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    //screen size will be set automatically
    this.scale.setScreenSize(true);

    //maybe start physics system?
    //this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.state.start('load');
  },

  preload: function(){

  },

  update: function(){

  },

  render: function(){

  }
};
