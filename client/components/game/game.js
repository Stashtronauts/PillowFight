/**
 * Created by Memoria on 1/23/15.
 */
var PillowFight = PillowFight || {};

PillowFight.GameState = { INACTIVE: 0, READY: 1, ACTIVE: 2, PAUSED: 3, COMPLETE: 4};

PillowFight.Game = function(gameWidth, gameHeight, container){
  // Constants
  var DEFAULT_GAME_WIDTH = 800;
  var DEFAULT_GAME_HEIGHT = 600;

  this.width = gameWidth || DEFAULT_GAME_WIDTH;
  this.height = gameHeight || DEFAULT_GAME_HEIGHT;
  this.players = [];
  this.state = PillowFight.GameState.INACTIVE;

  this.phaserGame = new Phaser.Game(this.width, this.height, Phaser.AUTO, container);

  // Add states
  this.phaserGame.state.add("Boot", new PillowFight.Boot(this));
  this.phaserGame.state.add("Load", new PillowFight.Loading(this));
  this.phaserGame.state.add("Play", new PillowFight.Play(this));

  // Start first state
  this.phaserGame.state.start("Boot");

  return this;
};

PillowFight.Game.prototype.AddPlayer = function(player){
    if(this.players.indexOf(player) == -1){
      this.players.push(player);
    }
};
