'use strict'

BASE_API = 'http://127.0.0.1:8000/api'

authService = ($http, $window, $state) ->
    @deleteToken = ->
        $window.localStorage.removeItem 'token'
        return

    @getToken = ->
        $window.localStorage.getItem 'token'

    @signin = (username, password) ->
        return $http.post BASE_API + '/accounts/auth/signin/', {
            username: username,
            password: password
        }
            .then @signinSuccessFn, @signinErrorFn

        @signinSuccessFn = (data, status, headers, config) ->
            $state.go 'home'
            if data.data.token
                @setToken data.data.token
            return

        @signinErrorFn = (data, status, headers, config) ->
            console.error data
            return
        return

    @logout = ->
        @deleteToken()
        return

    @register = (username, password, mail, firstName, lastName) ->
        return $http.post BASE_API + '/accounts/', {
            username: username,
            password: password,
            email: mail,
            first_name: firstName,
            last_name: lastName
        }
            .then @registerSuccessFn

        @registerSuccessFn = (data, status, headers, config) ->
            @signin username, password
            return
        return

    @setToken = (token) ->
        $window.localStorage.setItem 'token', token
        return

    return



angular.module 'auth'
    .service 'authService', [
        '$http',
        '$window',
        '$state',
        authService
    ]
