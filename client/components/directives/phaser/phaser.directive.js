'use strict';

angular.module('pillowfightApp')
  .directive('pfPhaser', function () {
    return {
      templateUrl: 'components/directives/phaser/phaser.html',
      restrict: 'EA',
      scope:{
        gameModel:'=',
        gameId:'='
      },
      controller:function($scope){
        console.log("boop");
      }

    };
  });