'use strict'


NewDraftService = ($rootScope, $http) ->

    @create = (title, tags, content) ->
        $http.post $rootScope.BASE_API + '/drafts/', {
            author: @user.username,
            author_id: @user.user_id,
            title: title,
            tags: tags,
            content: content
        }


angular.module 'root'

    .service 'NewDraftService', [
        '$rootScope',
        '$http',
        NewDraftService
    ]
