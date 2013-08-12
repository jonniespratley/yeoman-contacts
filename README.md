# Web Applications with Yeoman

In this article we will talk about using [Yeoman](http://yeoman.io), which is a client-side stack using three tools and frameworks to help developers quickly build beautiful and scalable web applications, these tools include support for linting, testing, minification and more. 
![image](https://dl.dropboxusercontent.com/u/26906414/cdn/img/yeoman-banner-wide.png)

1. **[Yo](http://yeoman.io)** is used to generate things, from other generators to files and more. 
2. **[Bower](http://bower.io)** is used for dependency management, downloading and installing .js components.
3. **[Grunt](http://gruntjs.com/)** is used for task management such as building, previewing and testing.


## How To

 We are going to use all of these tools to create a [AngularJS](http://angularjs.org/) application, the code is available on [Github](https://github.com/jonniespratley/yeoman-contacts) and the finished demo is available [here](http://jps-contacts.aws.af.cm/#/). 


### 1. Installing Yeoman
Installation is pretty straight forward, the official build script does all the hard work for you. 

To install `yo`, `grunt`, and `bower`, execute the following command:

	$ npm install -g yo grunt-cli bower


If you run into installation issues please visit the [Getting Started Wiki](https://github.com/yeoman/yeoman/wiki/Getting-Started).

	


### 2. Installing Generators

Before development we need to install a generator, since we are going to utilize the AngularJS framework lets install the [Yeoman AngularJS generator](https://github.com/yeoman/generator-angular).

	$ npm install -g generator-angular
	
For documentation and how to create custom generators please visit the [wiki](https://github.com/yeoman/yeoman/wiki/Generators).



### 3. Creating the Project
Lets create the directory where our project will be stored, execute the following command:

	$ mkdir yeoman-contacts && cd yeoman-contacts


Now we are ready to use the available generators to build our application.

**Available generators:** 

* angular:app
* angular:controller
* angular:directive
* angular:filter
* angular:route
* angular:service
* angular:view

*Note: Generators are to be run from the root directory of your app.*

####a. Creating Application Structure `angular:app`
	
Creating the initial directory contents and structure for our application is very easy, execute the following command:
	
	$ yo angular:app yeomanContactsApp

Which results in:

	yeoman-contacts/
	├── app
	│   ├── 404.html
	│   ├── favicon.ico
	│   ├── index.html
	│   ├── robots.txt
	│   ├── components
	│   │   ├── angular
	│   │   ├── ...		
	│   ├── scripts
	│   │   ├── app.js
	│   │   ├── controllers
	│   │   │   └── main.js
	│   ├── styles
	│   │   └── main.css
	│   └── views
	│       └── main.html
	├── component.json
	├── Gruntfile.js
	├── karma.conf.js
	├── karma-e2e.conf.js
	├── package.json
	


####b.  Creating Routes, Views, and Controllers `angular:route`
Adding a new route, view and controller to your application is easy with this single command:

	$ yo angular:route home
	
Which results in:
	
* Creates a `home.js` controller skeleton in the `app/scripts/controllers` folder.
* Creates a `home.js` test spec skeleton in the `test/specs/controllers` folder.
* Adds the `home.html` template to the `app/views` folder.
* Hooks up the `home` route in the main app module (`app/scripts/app.js` file).
* Adds the `home.js` script include tag to your main app view `index.html` file.


####c. Creating Controllers `angular:controller`

With controllers, you provide the logic using JavaScript to power your views:

	$ yo angular:controller main

Which results in:

* Creates a `main.js` controller skeleton in the  `app/scripts/controllers` folder.
* Creates a `main.js` test spec skeleton in the `test/specs/controllers` folder.


The controller logic for our application:

**app/controllers/main.js**

	angular.module('yeomanContactsApp').controller('MainCtrl', function($scope, $rootScope, ContactsService) {
		$scope.App = {
			config:{
				icon: 'book',
				name: 'AngularJS Contacts'
			},
			loading: true,
			model: null,
			nav: [
				{ title: 'List Contacts', href:'' },
				{ title: 'Add Contact', href:'add' }
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
			},
			saveContact: function(obj){
				
			},
			removeContact: function(obj){
				
			}
		};
		$rootScope.App = $scope.App;
	});


A test for our main controller:  


**test/spec/controllers/main.js**


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
		
	});




	
####d. Creating Directives `angular:directive`

With directives, you can extend HTML to add declarative syntax to your views:

	$ yo angular:directive contact

Which results in:

* Creates a `contact.js` directive skeleton in the `app/scripts/directives` folder.
* Creates a `contact.js` test spec skeleton in the `test/specs/directives` folder.


A custom directive for our application:

**app/scripts/directives/contact.js**

	angular.module('yeomanContactsApp').directive('contact', function () {
		return {
			templateUrl: 'views/contactDirective.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
				element.addClass('contact');
			}
		};
	});
	

A test for our directive:

**test/spec/directives/contact.js**

	describe('Directive: contact', function () {
	
	  //load the directive's module		
	  beforeEach(module('yeomanContactsApp'));
	  
	  // instantiate directive
	  var element;
	  
	  it('should make hidden element visible', inject(function ($rootScope, $compile) {
	    element = angular.element('<contact></contact>');
	    element = $compile(element)($rootScope);
	    expect(element.text()).toBe('this is the contact directive');
	  }));
	});





#### e. Creating Filters `angular:filter`
Filters are used for formatting data displayed to the user:

	$ yo angular:filter tel


Which results in:

* Creates a `tel.js` directive skeleton in the `app/scripts/filters` folder.
* Creates a `tel.js` test spec skeleton in the `test/specs/filters` folder.


A custom filter for our application: 

**app/scripts/filters/tel.js**

	angular.module('yeomanContactsApp').filter('tel', function () {
	  return function (input) {
	    var pattern = /\b[1]?[(-|\(|\.|\s)]?([\d]{3})(-|\)|\.|\s)[\s]?([\d]{3})(-|\.|\s)([\d]{4})\b/g, 
	    	replace = '($1)$3-$5';
	    return input.replace(pattern, replace);
	  };
	});




A test for our filter: 

**test/spec/filters/tel.js**

	describe('Filter: tel', function () {
	
	  // load the filter's module
	  beforeEach(module('yeomanContactsApp'));

	  // instantiate filter
	  var tel;
	  beforeEach(inject(function ($filter) {
	    tel = $filter('tel');
	  }));
	
	  it('should return the string formatted as (555)555-5555', function () {
	    var text = '555-555-5555';
	    expect(tel(text)).toBe('(555)555-5555');
	  });
	});


#### f. Creating Views `angular:view`

To create custom views for your application use the following command:

	$ yo angular:view contactDirective

Which results in:

* Creates a `contactDirective.html` view skeleton in the `app/views` folder.


The custom view for our contact directive:

	<div id="contact-{{$index}}" class="well well-small clearfix">
		<a class="pull-left thumb" ng-href="/details/{{$index}}">
			<img class="media-object" ng-src="{{item.avatar}}" src="http://placehold.it/100x100&text=Image" alt="Contact {{item.name}} Image"/>
		</a>
		<div class="media-body">
			<h4 class="media-heading">
				{{item.name}}
			</h4>
			<p class="meta">
				<ul class="unstyled">
					<li class="phone"><a ng-href="tel:{{item.phone}}"><i class="icon-phone"></i> {{item.phone | tel}} </a></li>
					<li class="email"><a ng-href="mailto:{{item.email}}"><i class="icon-envelope"></i> {{item.email}} </a></li>
				</ul>
			</p>
		</div>
	</div>



#### g. Creating Services `angular:service`

	$ yo angular:service contactsService
	
Which results in:

* Creates a `contactsService.js` directive skeleton in the `app/scripts/services` folder.
* Creates a `contactsService.js` test spec skeleton in the `test/specs/services` folder.


A custom service for our application:

**app/scripts/services/contactsService.js**

	angular.module('yeomanContactsApp').factory('ContactsService', ['$q', function($q){
		Parse.initialize('YOUR_KEY', 'YOUR_TOKEN');
		return function(successCb, errorCb){
			var	query = new Parse.Query('Contact'),
					delay = $q.defer(),
					data = null;
				query.find({
					success: function(results) {
						data = results.map(function(obj){
							return {	
								id: obj.id,
								name: obj.get('name'),
								phone: obj.get('phone'),
								website: obj.get('website'),
								email: obj.get('email'),
								avatar: 'http://www.gravatar.com/avatar/' + calcMD5(obj.get('email'))
							}
						});
						if(successCb){
							successCb(data);
						} else {
							delay.resolve(data);
						}
					},
					error: function(error) {
						if(errorCb){
							errorCb(error);
						}
						delay.reject(error);
					}
				});
			return delay.promise;
		}
	}]);

	

A test for our service:

**test/spec/services/contactsService.js**

	describe('Service: contactsService', function () {
	
	  // load the service's module
	  beforeEach(module('yeomanContactsApp'));
	
	  // instantiate service
	  var contactsService;
	  beforeEach(inject(function (_contactsService_) {
	    contactsService = _contactsService_;
	  }));
	
	  it('should do something', function () {
	    expect(!!contactsService).toBe(true);
	  });
	
	});




### 5. Running the Project

To start the local web server run the following command:
	
	$ grunt server
	
Your browser should open up to a welcome page ready for development!




### 6. Testing the Project
Grunt takes care of running all of your tests using Karma, execute the following command:

	$ grunt test
	

	
### 7. Building the Project
Building the production-ready version of your application usually involves many steps, Grunt takes care of some for you:

* Concatenates all your JS into one file.
* Versions all your files.
* Optimizes all images and HTML templates.
* Concatenates all your CSS into one file.
* Generates Application Cache manifest file.

Building your application is easy, just run the following command:

	$ grunt build



### 8. Deploying the Project
For deployment I choose to use [AppFrog](https://www.appfog.com/), make sure you create an account and register your application first and then install the CLI tools.

###### 1. Install CLI Tools:

	sudo gem install af
	
###### 2. Login to AppFrog:

	af login

###### 3. Deploy to AppFrog:

	af update jps-contacts


## Resources
For more information about Yeoman, AngularJS and other technologies used in this tutorial see below:

1. [Yeoman.io](http://yeoman.io)
2. [Bower.io](http://bower.io)
3. [GruntJS.com](http://gruntjs.com)
4. [AngularJS.org](http://angularjs.org/)
5. [Parse.com](https://parse.com/)
6. [AppFrog](https://www.appfog.com/)



	
