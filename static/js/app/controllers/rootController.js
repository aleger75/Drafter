// Generated by CoffeeScript 1.9.1
(function() {
  'use strict';
  var RootCtrl;

  RootCtrl = function($window, RootService) {
    this.signin = function() {
      RootService.signin(this.username, this.password).then(function(data) {
        $window.localStorage.setItem('token', data.data.token);
        this.user = this.getUser();
      });
    };
    this.signout = function() {
      $window.localStorage.removeItem('token');
      this.user = void 0;
    };
    this.getUser = function() {
      var token;
      token = $window.localStorage.getItem('token');
      if (token) {
        return JSON.parse(atob(token.split('.')[1]));
      } else {
        return void 0;
      }
    };
    this.user = this.getUser();
  };

  angular.module('root').controller('RootCtrl', ['$window', 'RootService', RootCtrl]);

}).call(this);
