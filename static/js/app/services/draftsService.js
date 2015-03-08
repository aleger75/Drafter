(function() {
  'use strict';
  var DraftsService;

  DraftsService = function($http, $rootScope) {
    this.getAllDrafts = function() {
      return $http.get($rootScope.BASE_API + '/drafts/');
    };
    this.getAllTags = function() {
      return $http.get($rootScope.BASE_API + '/tags/');
    };
  };

  angular.module('root').service('DraftsService', ['$http', '$rootScope', DraftsService]);

}).call(this);
