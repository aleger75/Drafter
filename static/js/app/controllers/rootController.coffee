'use strict'


RootCtrl = ($window, $state, $modal, $rootScope, RootService) ->

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
                $state.go $state.current.name, {}, {reload: true}
                $rootScope.modalInstance.close()
                return
        return

    @register = ->
        self = @
        RootService.register @username, @password, @email, @firstName, @lastName
            .then (data) ->
                RootService.signin self.username, self.password
                    .then (data) ->
                        $window.localStorage.setItem 'token', data.data.token
                        self.getUser()
                        $state.go $state.current.name, {}, {reload: true}
                        $rootScope.modalInstance.close()
                return

    @signout = ->
        $window.localStorage.removeItem 'token'
        @user = undefined
        return

    @openSignin = ->
        $rootScope.modalInstance = $modal.open {
            templateUrl: '/static/js/app/views/signin.html',
            controller: 'RootCtrl'
            controllerAs: 'root'
        }
        return

    @openRegister = ->
        $rootScope.modalInstance = $modal.open {
            templateUrl: '/static/js/app/views/register.html',
            controller: 'RootCtrl'
            controllerAs: 'root'
        }
        return

    return


angular.module 'root'

    .controller 'RootCtrl', [
        '$window',
        '$state',
        '$modal',
        '$rootScope',
        'RootService',
        RootCtrl
    ]
