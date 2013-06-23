# Yeoman Web Applications
Yeoman 1.0 is more than just a tool. It's a workflow; a collection of tools and best practices working together in harmony to help make developing applications for the web smoother than ever before.

## Overview

The Yeoman workflow is comprised on three tools for improving productivity when building a web apps: ***yo*** - the scaffold tool, ***grunt*** - the build tool, ***bower*** - the package management tool.

* **Yo** scaffolds out a application, writing Grunt configuration and other relevant Grunt tasks that you might use when developing.
* **Grunt** is used to build, preview and test you project.
* **Bower** is used for dependency management, no more manual downloading and install scripts.





## Getting Started
In order to use Yeoman you need to install it and all of the dependencies.

#### 1. Installing Yeoman
Installation is pretty straight forward, the official build script does all the hard work for you. 

Execute the following command:

	$ curl -L get.yeoman.io | bash
	
Then install `yo`, `grunt`, and `bower`:

	$ sudo npm install -g yo grunt-cli bower

If you have trouble getting it all working take look at the [Getting Started Wiki](https://github.com/yeoman/yeoman/wiki/Getting-Started).

#### 2. Installing AngularJS Generator
Before you can create an application you need to install a generator, since we are using Yeoman to create AngularJS applications, we need to install the AngularJS generator.

	$ sudo npm install -g generator-angular

#### 3. Create a Project
Creating a new project is easy, `yo` generators help creating the file structure and configuration files as well as scaffolded Karma unit tests for your AngularJS application.

To get started execute the following command:

	$ mkdir yeoman-contacts && cd yeoman-contacts
	$ yo angular:app

The generator asks a few questions about your project, such as including Twitter Bootstrap and some AngularJS modules.

#### 4. Running the Server

To start the local web server run the following command:
	
	$ grunt server
	
Your browser should open up to a welcome page ready for development!


#### 5. Creating Routes, Views, and Controllers
Adding a new route, view and controller to your AngularJS application is easy, and all of this is accomplished by Yeoman with the following single command:

	$ yo angular:route home
	
Which results in:
	
* Creates a `home.js` controller skeleton in the `app/scripts/controllers` folder
* Creates a `home.js` test spec skeleton in the `test/specs/controllers` folder
* Adds the `home.html` template to the `app/views` folder
* Hooks up the home route in the main app module (`app/scripts/app.js` file)

Now wasn't that easy.


#### 6. Testing Your Project
Now that you have seen how easy it is to create an application, testing your application is just as easy, Grunt takes care of running all of your tests using Karma, execute the following command:

	$ grunt test
	
#### 7. Building Your Project
Building the production-ready version of your application usually involves many steps, Grunt takes care of some for you:

* Concatenates all your JS into one file.
* Versions all your files.
* Optimizes all images and HTML templates.
* Concatenates all your CSS into one file.
* Generates Application Cache manifest file.

Building your application is easy, just run the following command:

	$ grunt build



	
