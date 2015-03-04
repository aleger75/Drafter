// Generated by CoffeeScript 1.9.1
(function() {
  'use strict';
  var mainController;

  mainController = function() {
    this.user = {};
    this.getUser = function() {
      this.user = mainService.getUser();
    };
    this.getDrafts = function() {
      var self;
      self = this;
      mainService.getAll().then(function(response) {
        self.drafts = response.data;
      });
    };
    this.getDrafts();
  };

  angular.module('main').controller('mainController', ['mainService', mainController]);

}).call(this);
