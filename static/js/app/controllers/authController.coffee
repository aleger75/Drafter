'use strict'


AuthCtrl = ($window, $state, $rootScope, AuthService)->

    @signin = ->
        self = @
        AuthService.signin @username, @password
            .then (data) ->
                $window.localStorage.setItem 'token', data.data.token
                $state.transitionTo $state.current.name, null, {reload: true}
                $rootScope.modalInstance.close()
                return
        return

    @register = ->
        self = @
        AuthService.register @username, @password, @email, @firstName, @lastName
            .then (data) ->
                AuthService.signin self.username, self.password
                    .then (data) ->
                        $window.localStorage.setItem 'token', data.data.token
                        $state.transitionTo $state.current.name, null, {reload: true}
                        $rootScope.modalInstance.close()
                return

    return


angular.module 'root'

    .controller 'AuthCtrl', [
        '$window',
        '$state',
        '$rootScope',
        'AuthService',
        AuthCtrl
    ]
