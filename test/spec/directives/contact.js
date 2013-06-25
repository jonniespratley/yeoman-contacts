'use strict';

describe('Directive: contact', function () {
  beforeEach(module('yeomanContactsApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<contact></contact>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the contact directive');
  }));
});
