/**
 * @file appSpec.js
 * @comment
 * 
 * Single file holding all of the tests of our application.
 */
describe('App:', function() {
	var $scope = null, ctrl = null
	//you need to indicate your module in a test
	beforeEach(module('yeomanContactsApp'));
	
	//Create a new scope for each 
	beforeEach(inject(function($rootScope, $controller) {
		$scope = $rootScope.$new();
		ctrl = $controller('MainCtrl', {
			$scope: $scope
		});
	}));

	//Add custom matchers to jasmine
	beforeEach(function(){
		this.addMatchers({
			toEqualData: function(expected){
				return angular.equals(this.actual, expected);
			}
		})
	});

	//Tests on the Main controller
	it('should say AngularJS Contacts', function() {
		expect($scope.App.name).toEqual('AngularJS Contacts');
	});

		//Home Controller Tests
	describe('Controller: MainCtrl', function () {
		var MainCtrl, scope, mockBackend;
		// Initialize the controller and a mock scope
		beforeEach(inject(function ( _$httpBackend_, $controller, $rootScope) {
			//mockBackend = _$httpBackend_;
			//mockBackend.expectGET('http://server/names?filter=none').
			//respond(['Brad', 'Shyam']);
			
			scope = $rootScope.$new();
			MainCtrl = $controller('MainCtrl', {
				$scope: scope
			});
		}));

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

	//Directive Tests
	describe('Directive: contact', function () {
		var element;
		it('should make element a contact', inject(function ($rootScope, $compile) {
			element = angular.element('<contact></contact>');
			element = $compile(element)($rootScope);
			expect(true).toBe(true);
		}));
	});


	//Filter Tests
	describe('Filter: tel', function () {
		// load the filter's module
		//beforeEach(module('yeomanContactsApp'));
		// initialize a new instance of the filter before each test
		var tel;
		beforeEach(inject(function ($filter) {
			tel = $filter('tel');
		}));

		it('should return the string formated as (555)555-5555', function () {
			var text = '555-555-5555';
			expect(tel(text)).toBe('(555)555-5555');
		});
	});

	//Service Tests
	describe('Service: ContactsService', function () {
		// load the service's module
		//beforeEach(module('yeomanContactsApp'));

		// instantiate service
		var ContactsService;
		beforeEach(inject(function (_ContactsService_) {
			ContactsService = _ContactsService_;
		}));

		it('should do something', function () {
			expect(!!ContactsService).toBe(true);
		});
	});


});

