'use strict';

angular.module('yeomanContactsApp')
  .filter('tel', function () {
    return function (input) {
      return 'tel filter: ' + input;
    };
  });
