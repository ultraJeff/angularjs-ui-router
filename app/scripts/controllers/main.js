'use strict';

/**
 * @ngdoc function
 * @name codeAcademyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the codeAcademyApp
 */
angular.module('codeAcademyApp')
  .controller('MainCtrl', ['$scope', '$http', 'Friends', function ($scope, $http, Friends) {
      	$scope.title = 'Home';
      	Friends.get().then(function(data) {
      		$scope.friends = data;
      	});
      	$scope.items = ['red','green','blue'];
      	$scope.selectedValue = 'red';

      	$scope.save = function() {
      		$http.post('api/friends.json', Friends);
      	};
  }]);
