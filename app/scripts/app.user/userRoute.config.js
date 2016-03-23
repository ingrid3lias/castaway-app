(function () {
  angular
    .module('app.user')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', UserRouteConfig]);

  function UserRouteConfig ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.when('/user/:user_id', '/user/:user_id/index');
    
    $stateProvider
      //User Index
      .state('podcast.userIndex', {
        url: '/user/:user_id',
        views: {
          'navigation': {
            templateUrl: 'views/user/shared/user-navigation.html',
          },
          'header': {
            template: '<ca-user-header></ca-user-header>'
          },
          'content': {
            templateUrl: 'views/user/index.html',
          },
          'sidebar': {
            template: '<ca-user-sidebar></ca-user-sidebar>'
          }
        }
      })
      .state('podcast.userIndex.index', {
        url: '/index',
        template: '<ca-user-index></ca-user-index>'
      })
      .state('podcast.userIndex.station', {
        url: '/station',
        template: '<ca-user-station-index></ca-user-station-index>'
      }) 
      .state('podcast.userIndex.following', {
        url: '/following',
        template: ''
      })
      .state('podcast.userIndex.review', {
        url: '/review',
        template: '<ca-user-review-index></ca-user-review-index>'
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