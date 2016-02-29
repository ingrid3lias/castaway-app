(function () {
  angular
    .module('app.podcasts')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', PodcastsRouteConfig]);

  function PodcastsRouteConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $stateProvider
      
    // Podcast Index
      .state('podcast.podcastIndex', {
        url: '/podcast',
        views: {
          'section': {
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
      .state('podcast.podcastIndex.index', {
        url: '/index',
        template: '<ca-podcast-index></ca-podcast-index>'
      })
      .state('podcast.podcastIndex.episode', {
        url: '/episode',
        template: '<ca-podcast-episode-index></ca-podcast-episode-index>'
      })
      .state('podcast.podcastIndex.podcast', {
        url: '/podcast',
        template: '<ca-podcast-podcast-index></ca-podcast-podcast-index>'
      })
      .state('podcast.podcastIndex.station', {
        url: '/station',
        template: '<ca-podcast-station-index></ca-podcast-station-index>'
      })
      .state('podcast.podcastIndex.announcement', {
        url: '/announcement',
        template: '<ca-podcast-announcement-index></ca-podcast-announcement-index>'
      })
      .state('podcast.podcastIndex.review', {
        url: '/review',
        template: '<ca-podcast-review-index></ca-podcast-review-index>'
      })
    
    // Episode Index
      .state('podcast.episodeIndex', {
        url: '/episode',
        views: {
          'section': {
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
      .state('podcast.episodeIndex.index', {
        url: '/index',
        template: '<ca-podcast-index></ca-podcast-index>'
      })
    //end of states
  }
})();