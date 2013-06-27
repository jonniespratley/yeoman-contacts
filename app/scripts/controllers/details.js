'use strict';
angular.module('yeomanContactsApp').controller('DetailsCtrl', function ($scope, $rootScope, $routeParams) {
	$scope.App = $rootScope.App;
//	$scope.contact = $rootScope.App.model[$routeParams.id];
	console.log($rootScope);
});