'use strict'


angular.module 'Drafter', [
    'ui.router',
]

    .config ['$httpProvider', '$interpolateProvider', '$urlRouterProvider',
        ($httpProvider, $interpolateProvider, $urlRouterProvider) ->
            $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
            $httpProvider.defaults.xsrfCookieName = 'csrftoken'
            $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken'

            $interpolateProvider.startSymbol('[[')
            $interpolateProvider.endSymbol(']]')

            $urlRouterProvider.otherwise '/'
            return
    ]
