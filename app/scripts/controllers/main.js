'use strict';

angular.module('yeomanContactsApp')
  .controller('MainCtrl', function ($scope, $rootScope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
		
		var ContactModel = Parse.Object.extend('Contact');
		var ContactsCollection = Parse.Collection.extend(ContactModel);

		  $scope.query = '';

		  $scope.limit = 10;
		  $scope.order = 'name';
		  $scope.reverse = false;

		  $scope.App = {
		    icon: 'book',
		    name: 'AngularJS Contacts',
		    loading: false,
		    filter: {
		      search: ''
		    },
		    model: [],
		    nav: [
		      { title: 'View Contacts', href:'/' },
		      { title: 'Add Contact', href:'/add' }
		    ],
		    init: function(){
		      Parse.initialize("mNf6N9zKOa0iqoyhXjlnNWQiJATFWkcb5ukvuOkX", "tjgFaPiYlrTPbNkI0qu62RSl4tE8VH0y0W7yF687");
		      //this.getContacts();
		    },
		    addContact: function(c){
		      var _newContact = new ContactModel();
		      _newContact.save(c, {
		          success: function(object) {
		            console.log(object);
		          }
		        });
		    },
		    getContacts: function(){
		      //$scope.App.loading = true;
		      var query = new Parse.Query('Contact');
		          query.find({
		            success: function(results) {
		              $scope.$apply(function(){
		                $rootScope.App.model = results.map(function(obj){
											
		                  return {  
		                    id: obj.id,
		                    name: obj.get('name'),
		                    phone: obj.get('phone'),
		                    website: obj.get('website'),
		                    email: obj.get('email'),
		                    avatar: 'http://www.gravatar.com/avatar/' + calcMD5(obj.get('email'))
		                  }
		                });  
		              });
		              $scope.App.loading = false;

		              console.log(results);
		              // results is an array of Parse.Object.
		              //alert(results);
		            },
		            error: function(error) {
		              // error is an instance of Parse.Error.
		            }
		          });

		    }
		  }; 
		  $rootScope.App = $scope.App;
  });
