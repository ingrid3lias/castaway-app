(function () {
  angular
    .module('app.user')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', UserRouteConfig]);

  function UserRouteConfig ($stateProvider, $urlRouterProvider, $locationProvider) {

    //$urlRouterProvider.when('/user', '/user/collection');
    
    $stateProvider
      //User Index
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
      .state('podcast.userIndex.index', {
        url: '/profile',
        template: '<ca-user-index></ca-user-index>'
      })
     
      //User Collection
      .state('podcast.userCollection', {
        url: '/collection',
        views: {
          'section': {
            templateUrl: 'views/user/index.html',
          },
          'navigation': {
            templateUrl: 'views/user/shared/collection-navigation.html',
          },
          'header': {
            templateUrl: 'views/user/shared/user-header.html'
          }
        }
      })
      .state('podcast.userCollection.index', {
        url: '/index',
        template: '<ca-user-collection></ca-user-collection>'
      })
  }
})();