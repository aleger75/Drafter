(function() {
  'use strict';
  var registerDirective;

  registerDirective = function($rootScope, $modal) {
    var openRegister;
    openRegister = {
      link: function(scope, elt, attrs) {
        openRegister = function() {
          if ($rootScope.modalInstance) {
            $rootScope.modalInstance.close();
          }
          $rootScope.modalInstance = $modal.open({
            templateUrl: '/static/build/views/register.html',
            controller: 'AuthCtrl',
            controllerAs: 'auth'
          });
        };
        elt.bind('click', openRegister);
      }
    };
    return openRegister;
  };

  angular.module('root').directive('dfRegister', ['$rootScope', '$modal', registerDirective]);

}).call(this);
