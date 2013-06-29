'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanContactsApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

	 //Tests on the Main controller
	  it('should say AngularJS Contacts', function() {
	    expect(scope.App.name).toEqual('AngularJS Contacts');
	  });

 		it("should try to call the service, but we intercept it", inject(function(ContactsService) {
	    //spyOn($scope.App, 'getContacts').andReturn([1, 2, 3]);
	    //expect($scope.App.model).toBe(3);
	  }));

	  it('should fetch names from server on load', function() {
	    // Initially, the request has not returned a response
	    //expect(scope.App.model).toBeNull();
	    // Tell the fake backend to return responses to all current requests that are in flight.
	    //mockBackend.flush();
	    // Now App.model should be set on the scope
	    //expect(scope.App.model).toBe(3);
	  });

});
