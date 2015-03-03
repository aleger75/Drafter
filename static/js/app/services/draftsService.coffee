'use strict'

BASE_API = 'http://127.0.0.1:8000/api'

draftsService = ($http) ->
    @.getAll = ->
        $http.get BASE_API + '/drafts/'
    return


angular.module 'drafts'
    .service 'draftsService', ['$http', draftsService]
