(function () {
  angular
    .module('app.podcasts')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', PodcastsRouteConfig]);

  function PodcastsRouteConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $urlRouterProvider.when('/podcast/:podcast_id', '/podcast/:podcast_id/index');
    
    $stateProvider
    // Podcast Index
      .state('podcast.podcastIndex', {
        url: '/podcast/:podcast_id',
        views: {
          'navigation': {
            templateUrl: 'views/podcasts/shared/podcast-navigation.html',
          },
          'header': {
            template: '<ca-podcast-header></ca-podcast-header>'
          },
          'sidebar': {
            template: '<ca-podcast-sidebar></ca-podcast-sidebar>'
          },
          'content': {
            templateUrl: 'views/podcasts/index.html'
          }
        }
      })
      .state('podcast.podcastIndex.index', {
        url: '/index',
        template: '<ca-podcast-index></ca-podcast-index>'
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
        url: '/episode/:episode_id',
        views: {
          'navigation': {
            templateUrl: 'views/podcasts/shared/podcast-navigation.html',
          },
          'header': {
            template: '<ca-episode-header></ca-episode-header>'
          },
          'sidebar': {
            template: '<ca-podcast-sidebar></ca-podcast-sidebar>'
          },
          'content': {
            templateUrl: 'views/podcasts/index.html'
          }
        }
      })
      .state('podcast.episodeIndex.index', {
        url: '/index',
        template: '<ca-podcast-index></ca-podcast-index>'
      })
      .state('podcast.episodeIndex.station', {
        url: '/station',
        template: '<ca-podcast-station-index></ca-podcast-station-index>'
      })
      .state('podcast.episodeIndex.announcement', {
        url: '/announcement',
        template: '<ca-podcast-announcement-index></ca-podcast-announcement-index>'
      })
      .state('podcast.episodeIndex.review', {
        url: '/review',
        template: '<ca-podcast-review-index></ca-podcast-review-index>'
      })
    //end of states
  }
})();