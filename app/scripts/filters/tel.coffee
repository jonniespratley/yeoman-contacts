'use strict';

angular.module('yeomanContactsApp')
  .filter 'tel', () ->
    (input) ->
      'tel filter: ' + input
