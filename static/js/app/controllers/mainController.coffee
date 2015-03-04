'use strict'


mainController = ->
    @user = {}

    @getUser = ->
        @user = mainService.getUser()
        return

    @getDrafts = ->
        self = @
        mainService.getAll().then (response) ->
            self.drafts = response.data
            return
        return
    @getDrafts()
    return

angular.module 'main'

    .controller 'mainController', [
        'mainService',
        mainController
    ]
