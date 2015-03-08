(function() {
  'use strict';
  var DraftsCtrl;

  DraftsCtrl = function(DraftsService) {
    this.getAllDrafts = function() {
      var self;
      self = this;
      return DraftsService.getAllDrafts().then(function(data) {
        self.drafts = data.data;
      });
    };
    this.getAllDrafts();
  };

  angular.module('root').controller('DraftsCtrl', ['DraftsService', DraftsCtrl]);

}).call(this);
