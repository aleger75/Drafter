// Generated by CoffeeScript 1.9.1
(function() {
  'use strict';
  var BASE_API, authService;

  BASE_API = 'http://127.0.0.1:8000/api';

  authService = function($http, $window, $state) {
    this.deleteToken = function() {
      $window.localStorage.removeItem('token');
    };
    this.getToken = function() {
      return $window.localStorage.getItem('token');
    };
    this.signin = function(username, password) {
      $http.post(BASE_API + '/accounts/auth/signin/', {
        username: username,
        password: password
      }).then(this.signinSuccessFn, this.signinErrorFn);
      this.signinSuccessFn = function(data, status, headers, config) {
        $state.go('/');
        if (data.data.token) {
          $window.localStorage.setItem('token', data.data.token);
          this.user = username;
        }
      };
      this.signinErrorFn = function(data, status, headers, config) {
        console.error(data);
      };
    };
    this.logout = function() {
      this.deleteToken();
    };
    this.register = function(username, password, mail, firstName, lastName) {
      return $http.post(BASE_API + '/accounts/', {
        username: username,
        password: password,
        email: mail,
        first_name: firstName,
        last_name: lastName
      }).then(this.registerSuccessFn);
      this.registerSuccessFn = function(data, status, headers, config) {
        authService.signin(username, password);
      };
    };
    this.setToken = function(token) {
      $window.localStorage.setItem('token', token);
    };
  };

  angular.module('auth').service('authService', ['$http', '$window', '$state', authService]);

}).call(this);