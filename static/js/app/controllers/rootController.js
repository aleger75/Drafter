(function() {
  'use strict';
  var RootCtrl;

  RootCtrl = function($window, $scope, $rootScope, $state) {
    var self;
    this.user = {};
    this.setToken = function() {
      $rootScope.token = $window.localStorage.getItem('token');
    };
    this.setToken();
    this.getUser = function() {
      this.user = $rootScope.token ? JSON.parse(atob($rootScope.token.split('.')[1])) : void 0;
    };
    this.getUser();
    self = this;
    $scope.$watch((function() {
      return $rootScope.token;
    }), (function(scope) {
      self.getUser();
    }));
    this.signout = function() {
      $window.localStorage.removeItem('token');
      $rootScope.token = void 0;
      $state.go('root.home');
    };
  };

  angular.module('root').controller('RootCtrl', ['$window', '$scope', '$rootScope', '$state', RootCtrl]);

}).call(this);
