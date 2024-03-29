(function() {
  'use strict';
  var closeModalDirective;

  closeModalDirective = function($rootScope) {
    var closeModal;
    closeModal = {
      link: function(scope, elt, attrs) {
        closeModal = function() {
          $rootScope.modalInstance.close();
        };
        elt.bind('click', closeModal);
      }
    };
    return closeModal;
  };

  angular.module('root').directive('dfCloseModal', ['$rootScope', closeModalDirective]);

}).call(this);
