(function () {
  angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', AppRouteConfig]);

  function AppRouteConfig ($stateProvider, $urlRouterProvider, $locationProvider) {

    // Default URL tasks/index page.
    $urlRouterProvider.otherwise('/', '/home');
    $urlRouterProvider.when('/', '/home');

    $stateProvider
      .state('base', {
        views: {
          'header': {
            template: '<ca-main-navigation></ca-main-navigation>'
          },
          'main': {
            templateUrl: 'views/layouts/base.html'
          }
        }
      })

  }
})();