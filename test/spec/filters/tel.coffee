'use strict'

describe 'Filter: tel', () ->

  # load the filter's module
  beforeEach module 'yeomanContactsApp'

  # initialize a new instance of the filter before each test
  tel = {}
  beforeEach inject ($filter) ->
    tel = $filter 'tel'

  it 'should return the input prefixed with "tel filter:"', () ->
    text = 'angularjs'
    expect(tel text).toBe ('tel filter: ' + text);
