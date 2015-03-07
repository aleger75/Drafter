'use strict'


RootCtrl = ($window) ->

    @user = {}

    @getUser = ->
        token = $window.localStorage.getItem 'token'
        @user =  if token then JSON.parse atob token.split('.')[1] else undefined
        return
    @getUser()

    @signout = ->
        $window.localStorage.removeItem 'token'
        @user = undefined
        return

    return


angular.module 'root'

    .controller 'RootCtrl', [
        '$window',
        RootCtrl
    ]
