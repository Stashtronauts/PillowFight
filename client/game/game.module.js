/**
 * Created by tsteele on 1/24/2015.
 */
angular.module('pillowfightApp')
  .service('_', function () {
    PillowFight.Game.initialize()
    return  PillowFight.Game.Current;
  });