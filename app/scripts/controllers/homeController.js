'use strict';

angular.module('ionic-demo-app')
  .controller('HomeController', function($rootScope) {
    $rootScope.leftButtons = [
      {
        type: 'button-dark button-clear',
        content: '<i class="icon ion-navicon"></i>',
        tap: function() {
          $rootScope.sideMenuController.toggleLeft();
        }
      }
    ];
  });
