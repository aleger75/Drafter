(function() {
  'use strict';
  var signinDirective;

  signinDirective = function($rootScope, $modal) {
    var openSignin;
    openSignin = {
      link: function(scope, elt, attrs) {
        openSignin = function() {
          if ($rootScope.modalInstance) {
            $rootScope.modalInstance.close();
          }
          $rootScope.modalInstance = $modal.open({
            templateUrl: '/static/build/views/signin.html',
            controller: 'AuthCtrl',
            controllerAs: 'auth'
          });
        };
        elt.bind('click', openSignin);
      }
    };
    return openSignin;
  };

  angular.module('root').directive('dfSignin', ['$rootScope', '$modal', signinDirective]);

}).call(this);
