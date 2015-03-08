(function() {
  'use strict';
  var AuthService;

  AuthService = function($rootScope, $http) {
    this.signin = function(username, password) {
      return $http.post($rootScope.BASE_API + '/accounts/auth/signin/', {
        username: username,
        password: password
      });
    };
    this.register = function(username, password, email, firstName, lastName) {
      return $http.post($rootScope.BASE_API + '/accounts/', {
        username: username,
        password: password,
        email: email,
        first_name: firstName,
        last_name: lastName
      });
    };
  };

  angular.module('root').service('AuthService', ['$rootScope', '$http', AuthService]);

}).call(this);
