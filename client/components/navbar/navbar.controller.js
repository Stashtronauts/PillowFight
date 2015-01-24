'use strict';

angular.module('pillowfightApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    var routes = {
      authorized:[{
        'title': 'Lobby',
        'link': '/lobby'
      }
      ]
      ,
      admin:[{
        'title': 'Admin',
        'link': '/admin'
      },
        {
          'title': 'Game',
          'link': '/game'
        }]
    };

    $scope.routes=function(){
      return $scope.menu.
                    concat($scope.isLoggedIn()?routes.authorized:[]).
                    concat($scope.isAdmin()?routes.admin:[]);
    }

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });