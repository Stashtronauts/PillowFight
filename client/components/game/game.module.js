/**
 * Created by tsteele on 1/24/2015.
 */
angular.module('pillowfightApp')
  .service('pfGame', function () {
    return  PillowFight.Game.initialize;
  });