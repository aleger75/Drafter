'use strict'

VIEWS_DIR = '/static/js/app/views/'


mainConfig = ($stateProvider) ->
    $stateProvider
        .state '/', {
            url: '/',
            templateUrl: VIEWS_DIR + 'drafts.html',
            controller: 'mainController',
            controllerAs: 'main'
        }
    return

angular.module 'main', []

    .config 'main', [
        '$stateProvider',
        mainConfig
    ]
