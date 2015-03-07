'use strict'


signinDirective = ($rootScope, $modal) ->

    openSignin = {
        link: (scope, elt, attrs) ->
            openSignin = ->
                if $rootScope.modalInstance
                    $rootScope.modalInstance.close()
                $rootScope.modalInstance = $modal.open {
                    templateUrl: '/static/js/app/views/signin.html',
                    controller: 'AuthCtrl',
                    controllerAs: 'auth',
                }
                return
            elt.bind 'click', openSignin
            return
    }

    return openSignin


angular.module 'root'

    .directive 'dfSignin', [
        '$rootScope',
        '$modal',
        signinDirective
    ]
