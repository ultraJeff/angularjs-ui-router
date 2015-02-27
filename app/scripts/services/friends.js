'use strict';

angular
	.module('codeAcademyApp')
	.factory('Friends', function() {
		return {
			get: function() {
				return [
					{'firstName': 'Joe', 'lastName': 'Blow', 'age': 60, 'gender': 'm'},
					{'firstName': 'Mike', 'lastName': 'Hunt', 'age': 29, 'gender': 'm'},
					{'firstName': 'Sarah', 'lastName': 'Bildeberg', 'age': 35, 'gender': 'f'},
					{'firstName': 'Jenny', 'lastName': 'Munt', 'age': 26, 'gender': 'f'}
				];
			}
		};
	});