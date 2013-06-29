	'use strict';
angular.module('yeomanContactsApp').controller('MainCtrl', function($scope, $rootScope, ContactsService) {
	$scope.App = {
		config:{
			icon: 'book',
			name: 'AngularJS Contacts'
		},
		loading: true,
		model: null,
		nav: [
			//{ title: 'Add Contact', href:'/add' }
		],
		contact: null,
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
		},
		selectContact: function(obj){
			$rootScope.App.contact = obj;
			$rootScope.selectedContact = obj;
		}
	};
	$rootScope.App = $scope.App;
});