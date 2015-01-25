'use strict';

angular.module('pillowfightApp')
  .controller('GameCtrl', function ($scope,pfGame,$http,$stateParams) {
    $scope.message = 'Hello';
    $scope.gameId = 'PillowFight';
    $http.get('/api/game/'+$stateParams.id).then(function(results){
      $scope.game = pfGame;
      $scope.gameModel = results.data;
    })
  });
