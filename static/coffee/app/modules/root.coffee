'use strict'


VIEWS_URL = '/static/build/views/'


rootConfig = ($stateProvider) ->

    $stateProvider
        .state 'root', {
            abstract: true,
            templateUrl: VIEWS_URL + 'root.html',
            controller: 'RootCtrl',
            controllerAs: 'root'
        }
        .state 'root.home', {
            templateUrl: VIEWS_URL + 'drafts.html',
            url: '/',
            controller: 'DraftsCtrl',
            controllerAs: 'drafts'
        }
        .state 'root.drafts', {
            url: '/drafts/',
            templateUrl: VIEWS_URL + 'drafts.html',
            controller: 'DraftsCtrl',
            controllerAs: 'drafts'
        }
        .state 'root.new', {
            url: '/drafts/new/',
            templateUrl: VIEWS_URL + 'new_draft.html',
            controller: 'NewDraftCtrl',
            controllerAs: 'nd'
        }
        .state 'root.detail', {
            url: '/draft/:id/:slug/',
            templateUrl: VIEWS_URL + 'draft_detail.html',
            controller: 'DraftDetailCtrl',
            controllerAs: 'detail'
        }

    return


angular.module 'root', []

    .config [
        '$stateProvider',
        rootConfig
    ]
