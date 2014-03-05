'use strict';

angular.module('ionic-demo-app')
  .controller('ListController', function($scope) {
    $scope.leftButtons = [
      {
        type: 'button-dark button-clear',
        content: '<i class="icon ion-navicon"></i>',
        tap: function() {
          $scope.sideMenuController.toggleLeft();
        }
      }
    ];
  });
