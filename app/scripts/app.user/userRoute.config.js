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
        url: '/index',
        template: '<ca-user-index></ca-user-index>'
      })
      .state('podcast.userIndex.station', {
        url: '/station',
        template: '<ca-user-stations></ca-user-stations>'
      }) 
      .state('podcast.userIndex.following', {
        url: '/following',
        template: '<ca-user-following></ca-user-following>'
      })
      .state('podcast.userIndex.review', {
        url: '/review',
        template: '<ca-user-review></ca-user-review>'
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
      .state('podcast.userCollection.saved', {
        url: '/saved',
        template: '<ca-user-collection></ca-user-collection>'
      })
      .state('podcast.userCollection.station', {
        url: '/station',
        template: '<ca-user-stations></ca-user-stations>'
      })
      .state('podcast.userCollection.following', {
        url: '/following',
        template: '<ca-user-following></ca-user-following>'
      })
  }
})();