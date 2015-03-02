'use strict'

PARTIALS_DIR = '/static/js/app/drafts/'

draftsController = ($state, draftsService) ->
  @.getDrafts = ->
    self = @
    draftsService.getAll().then (response) ->
      self.drafts = response.data
      return
    return

  @.getDrafts()
  return


angular.module('drafts', [])

.config ['$stateProvider', ($stateProvider) ->
  $stateProvider
    .state '/', {
      url: '/',
      templateUrl: PARTIALS_DIR + 'drafts.html',
      controllerAs: 'drafts',
      controller: 'draftsController'
    }
    .state 'drafts', {
      url: '/drafts/',
      templateUrl: PARTIALS_DIR + 'drafts.html',
      controllerAs: 'drafts',
      controller: 'draftsController'
    }
  return]


.controller('draftsController', [
  '$state',
  'draftsService',
  draftsController
])
