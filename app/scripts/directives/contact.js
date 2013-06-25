'use strict';

angular.module('yeomanContactsApp')
  .directive('contact', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the contact directive');
      }
    };
  });
