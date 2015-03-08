(function() {
  'use strict';
  var VIEWS_URL, rootConfig;

  VIEWS_URL = '/static/build/views/';

  rootConfig = function($stateProvider) {
    $stateProvider.state('root', {
      abstract: true,
      templateUrl: VIEWS_URL + 'root.html',
      controller: 'RootCtrl',
      controllerAs: 'root'
    }).state('root.home', {
      templateUrl: VIEWS_URL + 'drafts.html',
      url: '/',
      controller: 'DraftsCtrl',
      controllerAs: 'drafts'
    }).state('root.drafts', {
      url: '/drafts/',
      templateUrl: VIEWS_URL + 'drafts.html',
      controller: 'DraftsCtrl',
      controllerAs: 'drafts'
    });
  };

  angular.module('root', []).config(['$stateProvider', rootConfig]);

}).call(this);
