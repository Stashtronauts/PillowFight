'use strict';

angular.module('pillowfightApp')
  .directive('pfPhaser', function () {
    return {
      templateUrl: 'app/directives/phaser/phaser.html',
      restrict: 'EA',
      scope:{
        gameModel:'='
      },
      controller:function($scope){

      }

    };
  });