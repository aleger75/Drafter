'use strict'


DraftDetailService = ($http) ->

    @get = (id) ->
        $http.get 'http://127.0.0.1:8000/api/drafts/' + String id + '/'

    return


angular.module 'root'

    .service 'DraftDetailService', [
        '$http',
        DraftDetailService
    ]
