'use strict';

angular.module('pillowfightApp')
  .controller('GameCtrl', function ($scope,pfGame) {
    $scope.message = 'Hello';
    $scope.gameId = 'PillowFight';
    $scope.game = pfGame;
  });
