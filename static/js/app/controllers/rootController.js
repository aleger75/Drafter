(function() {
  'use strict';
  var RootCtrl;

  RootCtrl = function($window, $scope, $rootScope) {
    var self;
    this.user = {};
    $rootScope.token = void 0;
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
    };
  };

  angular.module('root').controller('RootCtrl', ['$window', '$scope', '$rootScope', RootCtrl]);

}).call(this);
