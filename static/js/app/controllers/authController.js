(function() {
  'use strict';
  var AuthCtrl;

  AuthCtrl = function($window, $state, $rootScope, AuthService) {
    this.signin = function() {
      var self;
      self = this;
      AuthService.signin(this.username, this.password).then(function(data) {
        $window.localStorage.setItem('token', data.data.token);
        $rootScope.token = $window.localStorage.getItem('token');
        $rootScope.modalInstance.close();
      });
    };
    this.register = function() {
      var self;
      self = this;
      return AuthService.register(this.username, this.password, this.email, this.firstName, this.lastName).then(function(data) {
        AuthService.signin(self.username, self.password).then(function(data) {
          $window.localStorage.setItem('token', data.data.token);
          $rootScope.token = $window.localStorage.getItem('token');
          return $rootScope.modalInstance.close();
        });
      });
    };
  };

  angular.module('root').controller('AuthCtrl', ['$window', '$state', '$rootScope', 'AuthService', AuthCtrl]);

}).call(this);
