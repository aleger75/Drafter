'use strict'


DraftsService = ($http, $rootScope) ->

    @getAllDrafts = ->
        $http.get $rootScope.BASE_API + '/drafts/'

    @getAllTags = ->
        $http.get $rootScope.BASE_API + '/tags/'

    return


angular.module 'root'

    .service 'DraftsService', [
        '$http',
        '$rootScope',
        DraftsService
    ]
