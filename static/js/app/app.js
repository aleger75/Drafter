(function() {
'use strict';

  angular.module('Drafter', ['ui.router', 'drafts'])

  .config(['$httpProvider', '$interpolateProvider', '$urlRouterProvider',
    function($httpProvider, $interpolateProvider, $urlRouterProvider) {
      $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
      $httpProvider.defaults.xsrfCookieName = 'csrftoken';
      $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

      $urlRouterProvider.otherwise('/');
  }]);

})();
