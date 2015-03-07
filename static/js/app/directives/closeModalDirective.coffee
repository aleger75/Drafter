'use strict'


closeModalDirective = ($rootScope) ->
    
    closeModal = {
        link: (scope, elt, attrs) ->
            closeModal = ->
                $rootScope.modalInstance.close()
                return
            elt.bind 'click', closeModal
            return
    }

    return closeModal


angular.module 'root'

    .directive 'dfCloseModal', [
        '$rootScope',
        closeModalDirective
    ]
