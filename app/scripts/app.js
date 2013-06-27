'use strict';
angular.module('yeomanContactsApp', []).config(function ($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(false);
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'MainCtrl'
		})
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'HomeCtrl'
		})
		.when('/details/:id', {
			templateUrl: 'views/details.html',
			controller: 'DetailsCtrl'
		})
		.otherwise({
			redirectTo: '/'
	});
});