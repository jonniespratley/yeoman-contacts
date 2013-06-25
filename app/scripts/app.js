'use strict';

angular.module('yeomanContactsApp', [])
  .config(function ($routeProvider, $locationProvider, $q, $timeout) {
		var routeResolver = {
			delay : function ($q, $timeout) {
				var delay = $q.defer();
				$timeout(delay.resolve, 500);
				return delay.promise;
			}
		};
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
	resolve:routeResolver
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
	resolve:routeResolver
      })
      .when('/details/:id', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl',
				resolve:routeResolver
      })
      .otherwise({
        redirectTo: '/'
      });
			$locationProvider.html5Mode(false);
  });
