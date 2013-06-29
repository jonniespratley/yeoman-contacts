'use strict';
angular.module('yeomanContactsApp').controller('DetailsCtrl', function ($scope, $rootScope, $routeParams) {
	$scope.awesomeThings = ['HTML5 Boilerplate','AngularJS','Karma'];
	$scope.contact = $rootScope.App.model[$routeParams.id];
	console.log($rootScope);
});