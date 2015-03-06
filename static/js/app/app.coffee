'use strict'


DrafterConfig = ($httpProvider, $interpolateProvider, $urlRouterProvider) ->

    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
    $httpProvider.defaults.xsrfCookieName = 'csrftoken'
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken'

    $interpolateProvider.startSymbol('[[')
    $interpolateProvider.endSymbol(']]')

    $urlRouterProvider.otherwise '/'

    return


DrafterRun = ($rootScope) ->

    $rootScope.BASE_API = 'http://127.0.0.1:8000/api'
    $rootScope.VIEWS_URL = '/static/js/app/views/'

    return


angular.module 'Drafter', [
    'ui.router',
    'ui.bootstrap',
    'root'
]

    .config [
        '$httpProvider',
        '$interpolateProvider',
        '$urlRouterProvider',
        DrafterConfig
    ]

    .run [
        '$rootScope',
        DrafterRun
    ]
