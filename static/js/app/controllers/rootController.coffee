'use strict'


RootCtrl = ($window, $state, RootService) ->

    @getUser = ->
        token = $window.localStorage.getItem 'token'
        @user =  if token then JSON.parse atob token.split('.')[1] else undefined
        return
    @getUser()

    @signin = ->
        self = @
        RootService.signin @username, @password
            .then (data) ->
                $window.localStorage.setItem 'token', data.data.token
                self.getUser()
                $state.go 'root.home', {}, {reload: true}
                return
        return

    @signout = ->
        $window.localStorage.removeItem 'token'
        @user = undefined
        return

    return


angular.module 'root'

    .controller 'RootCtrl', [
        '$window',
        '$state',
        'RootService',
        RootCtrl
    ]
