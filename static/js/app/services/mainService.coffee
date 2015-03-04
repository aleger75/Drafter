'use strict'

BASE_API = 'http://127.0.0.1:8000/api'


mainService = ($http) ->
    @getAll = ->
        $http.get BASE_API + '/drafts/'
    
    @getUser = ->
        token = $window.localStorage.get 'token'
        return if token then JSON.parse atob token.split('.')[1] else undefined

    return

angular.module 'main'

    .service 'mainService', [
        '$http',
        '$window',
        mainService
    ]
