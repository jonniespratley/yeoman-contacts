'use strict';
angular.module('yeomanContactsApp').controller('DetailsCtrl', function ($scope, $rootScope) {
	$scope.awesomeThings = ['HTML5 Boilerplate','AngularJS','Karma'];
	console.log($rootScope);
	$scope.App = $rootScope.App;
});