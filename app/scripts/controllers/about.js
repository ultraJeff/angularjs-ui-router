'use strict';

/**
 * @ngdoc function
 * @name codeAcademyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the codeAcademyApp
 */
angular
	.module('codeAcademyApp')
	.controller('AboutCtrl', ['$scope', function($scope) {
		$scope.title = 'About';
		$scope.items = ['About Me', 'About You', 'About Who?'];
	}]);