	'use strict';
angular.module('yeomanContactsApp').controller('MainCtrl', function($scope, $rootScope, ContactsService) {
	$scope.App = {
		icon: 'book',
		name: 'AngularJS Contacts',
		loading: true,
		model: null,
		nav: [
			{ title: 'Add Contact', href:'/add' }
		],
		filter:{
			limit: 10,
			order: 'name',
			reverse: false,
			query: null
		},
		init: function(){
		},
		getContacts: function(){
			new ContactsService(function(data){
				$scope.$apply(function(){
					$scope.App.loading = false;
					$scope.App.model = data;
				});
			});	 
		}
	};
});