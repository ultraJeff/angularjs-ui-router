'use strict';

/**
 * @ngdoc overview
 * @name codeAcademyApp
 * @description
 * # codeAcademyApp
 *
 * Main module of the application.
 */
angular
  .module('codeAcademyApp', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          friends: ['$http', function($http) {
            return $http.get('api/friends.json').then(function(res) {
              return res.data;
            });
          }]
        }
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });
  }]);


