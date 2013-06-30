'use strict';
angular.module('yeomanContactsApp', []).config(function ($routeProvider, $locationProvider) {
	var routeResolver = {
		delay : function ($q, $timeout) {
			var delay = $q.defer();
			$timeout(delay.resolve, 500);
			return delay.promise;
		}
	};
	
	$locationProvider.html5Mode(false);
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'MainCtrl',
			resolve: routeResolver
		})
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'HomeCtrl',
			resolve: routeResolver
		})
		.when('/details/:id', {
			templateUrl: 'views/details.html',
			controller: 'DetailsCtrl',
			resolve: routeResolver			
		})
		.when('/add', {
			templateUrl: 'views/details.html',
			controller: 'MainCtrl',
			resolve: routeResolver			
		})

		.otherwise({
			redirectTo: '/'
	});
});