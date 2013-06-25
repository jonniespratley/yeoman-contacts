'use strict'

describe 'Service: contactsService', () ->

  # load the service's module
  beforeEach module 'yeomanContactsApp'

  # instantiate service
  contactsService = {}
  beforeEach inject (_contactsService_) ->
    contactsService = _contactsService_

  it 'should do something', () ->
    expect(!!contactsService).toBe true;
