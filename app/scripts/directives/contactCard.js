'use strict';

angular
	.module('app.directives.contactCard', [])
	.directive('contactCard', function() {
		return {
			restrict: 'E',
			scope: {
				friend: '=',
				title: '='
			},
			transclude: true,
			replace: true,
			templateUrl: 'views/directives/contactCard.html',
			controller: function($scope) {
				console.log($scope.friend);
			}
		};
	});
