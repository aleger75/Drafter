// Generated by CoffeeScript 1.9.1
(function() {
  'use strict';
  var RootCtrl;

  RootCtrl = function($window) {
    this.user = {};
    this.getUser = function() {
      var token;
      token = $window.localStorage.getItem('token');
      this.user = token ? JSON.parse(atob(token.split('.')[1])) : void 0;
    };
    this.getUser();
    this.signout = function() {
      $window.localStorage.removeItem('token');
      this.user = void 0;
    };
  };

  angular.module('root').controller('RootCtrl', ['$window', RootCtrl]);

}).call(this);
