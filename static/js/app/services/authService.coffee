'use strict'


AuthService = ($rootScope, $http) ->

    @signin = (username, password) ->
        $http.post $rootScope.BASE_API + '/accounts/auth/signin/', {
            username: username,
            password: password
        }

    @register = (username, password, email, firstName, lastName) ->
        $http.post $rootScope.BASE_API + '/accounts/', {
            username: username,
            password: password,
            email: email,
            first_name: firstName,
            last_name: lastName
        }

    return


angular.module 'root'

    .service 'AuthService', [
        '$rootScope',
        '$http',
        AuthService
    ]
