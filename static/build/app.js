(function() {
  'use strict';
  var DrafterConfig, DrafterRun;

  DrafterConfig = function($httpProvider, $interpolateProvider, $urlRouterProvider) {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
    $urlRouterProvider.otherwise('/');
  };

  DrafterRun = function($rootScope) {
    $rootScope.BASE_API = 'http://127.0.0.1:8000/api';
    $rootScope.VIEWS_URL = '/static/build/views/';
  };

  angular.module('Drafter', ['ui.router', 'ui.bootstrap', 'root']).config(['$httpProvider', '$interpolateProvider', '$urlRouterProvider', DrafterConfig]).run(['$rootScope', DrafterRun]);

}).call(this);

(function() {
  'use strict';
  var VIEWS_URL, rootConfig;

  VIEWS_URL = '/static/build/views/';

  rootConfig = function($stateProvider) {
    $stateProvider.state('root', {
      abstract: true,
      templateUrl: VIEWS_URL + 'root.html',
      controller: 'RootCtrl',
      controllerAs: 'root'
    }).state('root.home', {
      templateUrl: VIEWS_URL + 'drafts.html',
      url: '/',
      controller: 'DraftsCtrl',
      controllerAs: 'drafts'
    }).state('root.drafts', {
      url: '/drafts/',
      templateUrl: VIEWS_URL + 'drafts.html',
      controller: 'DraftsCtrl',
      controllerAs: 'drafts'
    }).state('root.new', {
      url: '/drafts/new/',
      templateUrl: VIEWS_URL + 'new_draft.html',
      controller: 'NewDraftCtrl',
      controllerAs: 'nd'
    }).state('root.detail', {
      url: '/draft/:id/:slug/',
      templateUrl: VIEWS_URL + 'draft_detail.html',
      controller: 'DraftDetailCtrl',
      controllerAs: 'detail'
    });
  };

  angular.module('root', []).config(['$stateProvider', rootConfig]);

}).call(this);

(function() {
  'use strict';
  var AuthCtrl;

  AuthCtrl = function($window, $state, $rootScope, AuthService) {
    this.signin = function() {
      var self;
      self = this;
      AuthService.signin(this.username, this.password).then(function(data) {
        $window.localStorage.setItem('token', data.data.token);
        $rootScope.token = $window.localStorage.getItem('token');
        $rootScope.modalInstance.close();
      });
    };
    this.register = function() {
      var self;
      self = this;
      return AuthService.register(this.username, this.password, this.email, this.firstName, this.lastName).then(function(data) {
        AuthService.signin(self.username, self.password).then(function(data) {
          $window.localStorage.setItem('token', data.data.token);
          $rootScope.token = $window.localStorage.getItem('token');
          return $rootScope.modalInstance.close();
        });
      });
    };
  };

  angular.module('root').controller('AuthCtrl', ['$window', '$state', '$rootScope', 'AuthService', AuthCtrl]);

}).call(this);

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

(function() {
  'use strict';
  var RootCtrl;

  RootCtrl = function($window, $scope, $rootScope, $state) {
    var self;
    this.user = {};
    this.setToken = function() {
      $rootScope.token = $window.localStorage.getItem('token');
    };
    this.setToken();
    this.getUser = function() {
      this.user = $rootScope.token ? JSON.parse(atob($rootScope.token.split('.')[1])) : void 0;
    };
    this.getUser();
    self = this;
    $scope.$watch((function() {
      return $rootScope.token;
    }), (function(scope) {
      self.getUser();
    }));
    this.signout = function() {
      $window.localStorage.removeItem('token');
      $rootScope.token = void 0;
      $state.go('root.home');
    };
  };

  angular.module('root').controller('RootCtrl', ['$window', '$scope', '$rootScope', '$state', RootCtrl]);

}).call(this);

(function() {
  'use strict';
  var AuthService;

  AuthService = function($rootScope, $http) {
    this.signin = function(username, password) {
      return $http.post($rootScope.BASE_API + '/accounts/auth/signin/', {
        username: username,
        password: password
      });
    };
    this.register = function(username, password, email, firstName, lastName) {
      return $http.post($rootScope.BASE_API + '/accounts/', {
        username: username,
        password: password,
        email: email,
        first_name: firstName,
        last_name: lastName
      });
    };
  };

  angular.module('root').service('AuthService', ['$rootScope', '$http', AuthService]);

}).call(this);

(function() {
  'use strict';
  var DraftDetailService;

  DraftDetailService = function($http) {
    this.get = function(id) {
      return $http.get('http://127.0.0.1:8000/api/drafts/' + String(id + '/'));
    };
  };

  angular.module('root').service('DraftDetailService', ['$http', DraftDetailService]);

}).call(this);

(function() {
  'use strict';
  var DraftsService;

  DraftsService = function($http, $rootScope) {
    this.getAllDrafts = function() {
      return $http.get($rootScope.BASE_API + '/drafts/');
    };
    this.getAllTags = function() {
      return $http.get($rootScope.BASE_API + '/tags/');
    };
  };

  angular.module('root').service('DraftsService', ['$http', '$rootScope', DraftsService]);

}).call(this);

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

(function() {
  'use strict';
  $(document).ready(function() {
    var handleActive;
    handleActive = function(tag) {
      $('.active').removeClass('active');
      tag.addClass('active');
    };
    $(window).hashchange(function() {
      var hash;
      hash = window.location.hash;
      hash = hash.substring(2, hash.length - 1);
      hash = hash !== '/' ? hash : 'home';
      handleActive($('#' + hash));
    });
    $(window).hashchange();
  });

}).call(this);
