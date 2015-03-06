'use strict'


VIEWS_URL = '/static/js/app/views/'


rootConfig = ($stateProvider, $rootScope) ->

    $stateProvider
        .state 'root', {
            abstract: true,
            templateUrl: VIEWS_URL + 'root.html',
            controller: 'RootCtrl',
            controllerAs: 'root',
        }
        .state 'root.home', {
            templateUrl: VIEWS_URL + 'drafts.html',
            url: '/',
            controller: 'DraftsCtrl',
            controllerAs: 'drafts',
        }
        .state 'root.drafts', {
            url: '/drafts/',
            templateUrl: VIEWS_URL + 'drafts.html',
            controller: 'DraftsCtrl',
            controllerAs: 'drafts'
        }
        .state 'root.signin', {
            templateUrl: VIEWS_URL + 'signin.html',
            controller: 'RootCtrl',
            controllerAs: 'root',
        }

    return


angular.module 'root', []

    .config [
        '$stateProvider',
        rootConfig
    ]
