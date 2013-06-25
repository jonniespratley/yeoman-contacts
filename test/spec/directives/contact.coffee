'use strict'

describe 'Directive: contact', () ->
  beforeEach module 'yeomanContactsApp'

  element = {}

  it 'should make hidden element visible', inject ($rootScope, $compile) ->
    element = angular.element '<contact></contact>'
    element = $compile(element) $rootScope
    expect(element.text()).toBe 'this is the contact directive'
