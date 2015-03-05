'use strict'


RootCtrl = ($window, RootService) ->

    @signin = ->
        RootService.signin @username, @password
            .then (data) ->
                $window.localStorage.setItem 'token', data.data.token
                @user = @getUser()
                return
        return

    @signout = ->
        $window.localStorage.removeItem 'token'
        @user = undefined
        return

    @getUser = ->
        token = $window.localStorage.getItem 'token'
        return if token then JSON.parse atob token.split('.')[1] else undefined

    @user = @getUser()

    return


angular.module 'root'

    .controller 'RootCtrl', [
        '$window',
        'RootService',
        RootCtrl
    ]
