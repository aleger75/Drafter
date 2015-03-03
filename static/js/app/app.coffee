'use strict'

angular.module 'Drafter', [
    'ui.router',
    'drafts',
    'auth'
    ]

    .config ['$httpProvider', '$interpolateProvider', '$urlRouterProvider',
        ($httpProvider, $interpolateProvider, $urlRouterProvider) ->
            $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
            $httpProvider.defaults.xsrfCookieName = 'csrftoken'
            $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken'

            $urlRouterProvider.otherwise '/'
            return
    ]
