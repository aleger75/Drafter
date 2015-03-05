'use strict'


RootService = ($rootScope, $http) ->

    @signin = (username, password) ->
        $http.post $rootScope.BASE_API + '/accounts/auth/signin/', {
            username: username,
            password: password
        }

    return


angular.module 'root'

    .service 'RootService', [
        '$rootScope',
        '$http',
        RootService
    ]
