/**
 * Created by Memoria on 1/23/15.
 */
var PillowFight = PillowFight || {};

PillowFight.GameState = { INACTIVE: 0, READY: 1, ACTIVE: 2, PAUSED: 3, COMPLETE: 4};

PillowFight.Game = function(gameWidth, gameHeight, container,model){
  // Constants
  var DEFAULT_GAME_WIDTH = 800;
  var DEFAULT_GAME_HEIGHT = 600;

  this.width = gameWidth || DEFAULT_GAME_WIDTH;
  this.height = gameHeight || DEFAULT_GAME_HEIGHT;
  this.gameModel = model;
  this.phaserGame = new Phaser.Game(this.width, this.height, Phaser.AUTO, container);

  // Add states
  phaserGame.state.add("Boot", new PillowFight.Boot(this));
  phaserGame.state.add("Load", new PillowFight.Loading(this));
  phaserGame.state.add("Play", new PillowFight.Play(this));

  phaserGame.state.start("Boot");

  return this;
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
