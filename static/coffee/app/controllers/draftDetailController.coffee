'use strict'


DraftDetailCtrl = ($stateParams, DraftDetailService) ->

    @draft = {}

    @getDraft = ->
        self = @
        DraftDetailService.get $stateParams.id
            .then (data) ->
                self.draft = data.data
                return
    @getDraft()

    return


angular.module 'root'

    .controller 'DraftDetailCtrl', [
        '$stateParams',
        'DraftDetailService',
        DraftDetailCtrl
    ]
