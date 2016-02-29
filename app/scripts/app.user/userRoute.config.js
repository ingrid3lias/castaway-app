(function () {
  angular
    .module('app.user')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', UserRouteConfig]);

  function UserRouteConfig ($stateProvider, $urlRouterProvider, $locationProvider) {

    //$urlRouterProvider.when('/user', '/user/collection');
    
    $stateProvider
      .state('podcast.userIndex', {
        url: '/user',
        views: {
          'section': {
            templateUrl: 'views/user/index.html',
          },
          'navigation': {
            templateUrl: 'views/user/shared/user-navigation.html',
          },
          'header': {
            templateUrl: 'views/user/shared/user-header.html'
          }
        }
      })
     

  }
})();