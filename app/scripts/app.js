'use strict';

var app = angular.module('ionic-demo-app', ['ionic', 'ngSanitize', 'ngResource']);


app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller:  'HomeController'
    })
    .state('list', {
      url: '/list',
      templateUrl: 'views/list.html',
      controller:  'ListController'
    })


  $urlRouterProvider.otherwise('/');

});
