'use strict';
angular
	.module('codeAcademyApp')
	.controller('ContactCtrl', ['$scope', 'Friends', function($scope, Friends) {
		$scope.title = 'Contact';
		Friends.get().then(function(data) {
			$scope.friends = data;
		});
	}]);
