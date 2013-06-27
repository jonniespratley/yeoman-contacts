# How To: Yeoman Applications
[Yeoman](http://yeoman.io) is more than just a toolset, It's a workflow; a collection of tools and best practices working together in harmony to help make developing applications for the web smoother than ever before.

## Overview

Is a combination of three tools for boosting developer productivity when creating applications of various types, which includes the following:

![image](https://raw.github.com/yeoman/yeoman.io/gh-pages/media/workflow.jpg)

1. **[Yo](http://yeoman.io)** is used to generate things, from other generators to files and more. 
2. **[Bower](http://bower.io)** is used for dependency management, downloading and installing .js components.
3. **[Grunt](http://gruntjs.com/)** is used for task management such as building, previewing and testing.

---


## Tutorial

 We are going to use all of these tools to create a [AngularJS](http://angularjs.org/) application, the ode is available on [Github](https://github.com/jonniespratley/yeoman-contacts) and the finished demo is available [here](http://). 


![image](https://dl.dropboxusercontent.com/u/26906414/yeoman-contacts/localhost_full.png)

### Getting Started
In order to use Yeoman you need to install it and all of the dependencies.


### 1. Installing Yeoman
Installation is pretty straight forward, the official build script does all the hard work for you. 

Execute the following command:

	$ curl -L get.yeoman.io | bash
	
### 2. Installing Dependencies
	
Then install `yo`, `grunt`, and `bower`:

	$ npm install -g yo grunt-cli bower

If you have trouble getting it all working take look at the [Getting Started Wiki](https://github.com/yeoman/yeoman/wiki/Getting-Started).



### 3. Installing Generators
Before you a project you need to install a generator; our project is going to use AngularJS so we install a Yeoman generator for AngularJS called [generator-angular](https://github.com/yeoman/generator-angular).

	$ npm install -g generator-angular
	
For more documentation and examples please visit the [Github](https://github.com/yeoman/generator-angular) project.

**Available generators:** These are the available generators. 

* angular:app
* angular:controller
* angular:directive
* angular:filter
* angular:route
* angular:service
* angular:view

*Note: Generators are to be run from the root directory of your app.*


### 4. Creating the Project *(angular:app)*
Creating a new project is easy, run this command:

	$ mkdir yeoman-contacts && cd yeoman-contacts
	
And then scaffold your project, execute the following command:
	
	$ yo angular:app yeomanContactsApp

The generator asks a few questions such as including [Twitter Bootstrap](http://twitter.github.io/bootstrap/index.html) and [AngularJS modules](http://ngmodules.org/).


#### a. Creating Routes, Views, and Controllers *(angular:route)*
Adding a new route, view and controller to your application is easy with this single command:

	$ yo angular:route home
	
Which results in:
	
* Creates a `home.js` controller skeleton in the `app/scripts/controllers` folder.
* Creates a `home.js` test spec skeleton in the `test/specs/controllers` folder.
* Adds the `home.html` template to the `app/views` folder.
* Hooks up the `home` route in the main app module (`app/scripts/app.js` file).
* Adds the `home.js` script include tag to your main app view `index.html` file.





	
#### b. Creating Directives *(angular:directive)*
With directives, you can extend HTML to add declarative syntax to your views:

	$ yo angular:directive contact

Which results in:

* Creates a `contact.js` directive skeleton in the `app/scripts/directives` folder.
* Creates a `contact.js` test spec skeleton in the `test/specs/directives` folder.


A custom directive for our application:

	//app/scripts/directives/contact.js
	angular.module('yeomanContactsApp').directive('contact', function () {
		return {
			template: '<li id="contact-{{$index}}" class="contact well well-small clearfix">'
							  +'<a class="pull-left thumb" ng-href="#/details/{{item.id}}"><img class="media-object" ng-src="{{item.avatar}}"></a>'
							  +'	<div class="media-body">'
							  +'      <h4 class="media-heading">{{item.name}}</h4>'
							  +'      <p class="meta">'
							  +'        <ul class="unstyled">'
							  +'          <li class="phone"><a href="tel:{{item.phone}}"><i class="icon-phone"></i> {{item.phone | tel}}</a></li>'
							  +'          <li class="email"><a href="mailto:{{item.email}}"><i class="icon-envelope"></i> {{item.email}}</a></li>'
							  +'        </ul>'
							  +'      </p>'
							  +'    </div>'
							  +'</li>',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
			}
		};
	});

	

A test for our directive:

	//test/spec/directives/contact.js
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





#### c. Creating Filters *(angular:filter)*
Filters are used for formatting data displayed to the user:

	$ yo angular:filter tel


Which results in:

* Creates a `tel.js` directive skeleton in the `app/scripts/filters` folder.
* Creates a `tel.js` test spec skeleton in the `test/specs/filters` folder.


A custom filter for our application: 

	//app/scripts/filters/tel.js
	angular.module('yeomanContactsApp').filter('tel', function () {
	  return function (input) {
	    var pattern = /\b[1]?[(-|\(|\.|\s)]?([\d]{3})(-|\)|\.|\s)[\s]?([\d]{3})(-|\.|\s)([\d]{4})\b/g, 
	    	replace = '($1)$3-$5';
	    return input.replace(pattern, replace);
	  };
	});




A test for our filter: 

	//test/spec/filters/tel.js
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





#### d. Creating Services *(angular:service)*

	$ yo angular:service contactsService
	
Which results in:

* Creates a `contactsService.js` directive skeleton in the `app/scripts/services` folder.
* Creates a `contactsService.js` test spec skeleton in the `test/specs/services` folder.


A custom service for our application:

	//app/scripts/services/contactsService.js
	angular.module('yeomanContactsApp').factory('ContactsService', ['$q', function($q){
		Parse.initialize('mNf6N9zKOa0iqoyhXjlnNWQiJATFWkcb5ukvuOkX', 'tjgFaPiYlrTPbNkI0qu62RSl4tE8VH0y0W7yF687');
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

	//@filename - test/spec/services/contactsService.js
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
Visit the link below to see the deployment.


## Resources
For more information about Yeoman, AngularJS and other technologies used in this tutorial see below:

1. [Yeoman.io](http://yeoman.io)
2. [Bower.io](http://bower.io)
3. [GruntJS.com](http://gruntjs.com)
4. [AngularJS.org](http://angularjs.org/)
5. [Parse.com](https://parse.com/)



	
