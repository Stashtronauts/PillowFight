'use strict';

angular.module('pillowfightApp')
  .directive('pfPhaser', function () {
    return {
      templateUrl: 'components/directives/phaser/phaser.html',
      restrict: 'EA',
      scope:{
        gameModel:'=',
        game:'='
      },
      controller:function($scope){
        $scope.gameInstance = new $scope.game.Game();
      }
    };
  });
