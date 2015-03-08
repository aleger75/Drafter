'use strict'


NewDraftCtrl = (NewDraftService) ->

    @create = ->
        NewDraftService.create @title, @tags, @content

    @preview = ->
        alert 'preview'
        return

    return


angular.module 'root'

    .controller 'NewDraftCtrl', [
        'NewDraftService',
        NewDraftCtrl
    ]
