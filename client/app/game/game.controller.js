'use strict';

angular.module('pillowfightApp')
  .controller('GameCtrl', function ($scope,$window) {
    $scope.message = 'Hello';
    $scope.game = $window.pfGame;
  });
