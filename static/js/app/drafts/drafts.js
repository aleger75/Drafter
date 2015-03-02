(function() {
'use strict';
  var PARTIALS_DIR = '/static/js/app/drafts/';


  var draftsController = function($state, draftsService) {
    this.getDrafts = function() {
      var self = this;
      draftsService.getAll().then(function(response) {
        self.drafts = response.data;
      });
    }
    this.getDrafts();
  }

  angular.module('drafts', [])

  .config(['$stateProvider',
    function($stateProvider) {
      $stateProvider
        .state('/', {
          url: '/',
          templateUrl: PARTIALS_DIR + 'drafts.html',
          controllerAs: 'drafts',
          controller: 'draftsController'
        })
        .state('/drafts/', {
          url: '/drafts/',
          templateUrl: PARTIALS_DIR + 'drafts.html',
          controllerAs: 'drafts',
          controller: 'draftsController'
        });
    }])

    .controller('draftsController', ['$state', 'draftsService', draftsController]);

})();
