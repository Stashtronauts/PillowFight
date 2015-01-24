/**
 * Created by Memoria on 1/23/15.
 */
var PillowFight = PillowFight || {};

PillowFight.GameState = { INACTIVE: 0, READY: 1, ACTIVE: 2, PAUSED: 3, COMPLETE: 4};

PillowFight.Game = function(gameWidth, gameHeight){
  // Constants
  this.DEFAULT_GAME_WIDTH = 800;
  this.DEFAULT_GAME_HEIGHT = 600;

  var width = gameWidth || this.DEFAULT_GAME_WIDTH;
  var height = gameHeight || this.DEFAULT_GAME_HEIGHT;

  var phaserGame = new Phaser.Game(width, height, Phaser.AUTO, 'PillowFight');

  PillowFight.Game.Current = phaserGame;
  PillowFight.Game.Width = width;
  PillowFight.Game.Height = height;

  // Add states
  phaserGame.state.add("Boot", PillowFight.Boot);
  phaserGame.state.add("Load", PillowFight.Loading);
  phaserGame.state.add("Play", PillowFight.Play);

  phaserGame.state.start("Boot");
};

PillowFight.Game.Current = {};
PillowFight.Game.Width = 0;
PillowFight.Game.Height = 0;
PillowFight.Game.Players = [],
PillowFight.Game.State = PillowFight.GameState.INACTIVE;


PillowFight.Game.AddPlayer = function(player){
    if(PillowFight.Game.Players.indexOf(player) == -1){
      PillowFight.Game.Players.push(player);
    }
};
