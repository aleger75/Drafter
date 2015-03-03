'use strict'

PARTIALS_DIR = '/static/js/app/auth/'

signInController = (authService) ->
    @user = {}
    @signin = ->
        authService.signin @username, @password
        return
    return

registerController = (authService) ->
    @register = ->
        authService.register @username, @password, @firstName, @lastName, @mail
        return
    return


angular.module 'auth', []

    .config ['$stateProvider', ($stateProvider) ->
        $stateProvider
            .state '/accounts/signin/', {
                url: '/accounts/signin/',
                templateUrl: PARTIALS_DIR + 'signin.html',
                controllerAs: 'signin',
                controller: 'signInController'
            }
            .state '/accounts/register/', {
                url: '/accounts/register/',
                templateUrl: PARTIALS_DIR + 'register.html',
                controllerAs: 'register',
                controller: 'registerController'
            }
        return
    ]
    
    .controller 'signInController', [
        'authService',
        signInController
    ]

    .controller 'registerController', [
        'authService',
        registerController
    ]
