'use strict'

DraftsCtrl = (DraftsService) ->

    @getAllDrafts = ->
        self = @
        DraftsService.getAllDrafts()
            .then (data) ->
                self.drafts = data.data
                return

    @getAllDrafts()

    return


angular.module 'root'

    .controller 'DraftsCtrl', [
        'DraftsService',
        DraftsCtrl
    ]
