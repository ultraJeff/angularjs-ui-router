'use strict';

/**
 * @ngdoc function
 * @name codeAcademyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the codeAcademyApp
 */
angular.module('codeAcademyApp')
  .controller('MainCtrl', ['$scope', '$http', 'friends', function ($scope, $http, friends) {
      	$scope.title = 'Home';
      	$scope.friends = friends;
      	$scope.items = ['red','green','blue'];
      	$scope.selectedValue = 'red';

      	$scope.save = function() {
      		$http.post('api/friends.json', friends);
      	};
  }]);
