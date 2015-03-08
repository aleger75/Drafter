(function() {
  'use strict';
  var NewDraftCtrl;

  NewDraftCtrl = function(NewDraftService) {
    this.create = function() {
      return NewDraftService.create(this.title, this.tags, this.content);
    };
    this.preview = function() {
      alert('preview');
    };
  };

  angular.module('root').controller('NewDraftCtrl', ['NewDraftService', NewDraftCtrl]);

}).call(this);
