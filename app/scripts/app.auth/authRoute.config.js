(function () {
  angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider', AuthRouteConfig]);

  function AuthRouteConfig ($stateProvider, $urlRouterProvider) {

   // $urlRouterProvider.when('/session', '/session/sign-in');

    $stateProvider
      // Auth Index
      .state('base.auth', {
        url: '/auth',
        views: {
          'view': {
            templateUrl: 'views/auth/index.html',
          }
        }
      })
      .state('base.auth.signIn', {
        url: '/sign-in',
        template: ''
      })
      .state('base.auth.signUp', {
        url: '/sign-up',
        template: ''
      })
      .state('base.auth.password', {
        url: '/password',
        template: ''
      })


  }
})();