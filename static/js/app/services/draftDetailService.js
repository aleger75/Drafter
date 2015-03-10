(function() {
  'use strict';
  var DraftDetailService;

  DraftDetailService = function($http) {
    this.get = function(id) {
      return $http.get('http://127.0.0.1:8000/api/drafts/' + String(id + '/'));
    };
  };

  angular.module('root').service('DraftDetailService', ['$http', DraftDetailService]);

}).call(this);
