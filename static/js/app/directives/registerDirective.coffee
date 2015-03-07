'use strict'


registerDirective = ($rootScope, $modal) ->

    openRegister = {
        link: (scope, elt, attrs) ->
            openRegister = ->
                if $rootScope.modalInstance
                    $rootScope.modalInstance.close()
                $rootScope.modalInstance = $modal.open {
                    templateUrl: '/static/js/app/views/register.html',
                    controller: 'AuthCtrl',
                    controllerAs: 'auth'
                }
                return
            elt.bind 'click', openRegister
            return
    }

    return openRegister


angular.module 'root'

    .directive 'dfRegister', [
        '$rootScope',
        '$modal',
        registerDirective
    ]
