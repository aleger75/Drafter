(function() {
'use strict';

  var BASE_API = 'http://127.0.0.1:8000/api';

  var draftsService = function($http) {
    this.getAll = function() {
      return $http.get(BASE_API + '/drafts/')
    }
  }

  angular.module('drafts')
    .service('draftsService', ['$http', draftsService]);

})();
