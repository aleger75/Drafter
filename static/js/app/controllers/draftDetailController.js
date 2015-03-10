(function() {
  'use strict';
  var DraftDetailCtrl;

  DraftDetailCtrl = function($stateParams, DraftDetailService) {
    this.draft = {};
    this.getDraft = function() {
      var self;
      self = this;
      return DraftDetailService.get($stateParams.id).then(function(data) {
        self.draft = data.data;
      });
    };
    this.getDraft();
  };

  angular.module('root').controller('DraftDetailCtrl', ['$stateParams', 'DraftDetailService', DraftDetailCtrl]);

}).call(this);
