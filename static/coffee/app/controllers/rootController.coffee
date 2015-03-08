'use strict'


RootCtrl = ($window, $scope, $rootScope) ->

    @user = {}

    @setToken = ->
        $rootScope.token = $window.localStorage.getItem 'token'
        return
    @setToken()

    @getUser = ->
        @user =  if $rootScope.token then JSON.parse atob $rootScope.token.split('.')[1] else undefined
        return
    @getUser()

    self = @
    $scope.$watch(
        (-> $rootScope.token),
        ((scope) -> self.getUser(); return)
    )

    @signout = ->
        $window.localStorage.removeItem 'token'
        $rootScope.token = undefined
        return

    return


angular.module 'root'

    .controller 'RootCtrl', [
        '$window',
        '$scope',
        '$rootScope',
        RootCtrl
    ]
