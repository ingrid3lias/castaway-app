(function () {
  angular
    .module('app.auth')
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
        template: '<ca-sign-in-form></ca-sign-in-form>'
      })
      .state('base.auth.signUp', {
        url: '/sign-up',
        template: '<ca-sign-up-form></ca-sign-up-form>'
      })
      .state('base.auth.password', {
        url: '/password',
        template: '<ca-password-form></ca-password-form>'
      })


  }
})();