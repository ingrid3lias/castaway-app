(function () {
  angular
    .module('app.podcasts')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', PodcastsRouteConfig]);

  function PodcastsRouteConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
    
    //Content View
    $stateProvider
      
    // Podcast Index
      .state('base.podcastIndex', {
        url: '/podcast',
        views: {
          'view': {
            templateUrl: 'views/podcasts/index.html',
          },
          'navigation': {
            templateUrl: 'views/podcasts/shared/podcast-navigation.html',
          },
          'header': {
            templateUrl: 'views/podcasts/shared/podcast-header.html'
          }
        }
      })
      .state('base.podcastIndex.index', {
        url: '/index',
        template: '<ca-podcast-index></ca-podcast-index>'
      })
    
    // Episode Index
      .state('base.episodeIndex', {
        url: '/episode',
        views: {
          'view': {
            templateUrl: 'views/podcasts/index.html',
          },
          'navigation': {
            templateUrl: 'views/podcasts/shared/episode-navigation.html',
          },
          'header': {
            templateUrl: 'views/podcasts/shared/episode-header.html'
          }
        }
      })
      .state('base.episodeIndex.index', {
        url: '/index',
        template: '<ca-podcast-index></ca-podcast-index>'
      })
    //end of states
  }
})();