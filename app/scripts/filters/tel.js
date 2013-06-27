'use strict';
angular.module('yeomanContactsApp').filter('tel', function () {
	return function (input) {
		var pattern = /\b[1]?[(-|\(|\.|\s)]?([\d]{3})(-|\)|\.|\s)[\s]?([\d]{3})(-|\.|\s)([\d]{4})\b/g, replace = '($1)$3-$5';
		return input.replace(pattern, replace);
	};
});