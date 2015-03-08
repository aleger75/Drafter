(function() {
  'use strict';
  var NewDraftService;

  NewDraftService = function($rootScope, $http) {
    return this.create = function(title, tags, content) {
      return $http.post($rootScope.BASE_API + '/drafts/', {
        author: this.user.username,
        author_id: this.user.user_id,
        title: title,
        tags: tags,
        content: content
      });
    };
  };

  angular.module('root').service('NewDraftService', ['$rootScope', '$http', NewDraftService]);

}).call(this);
