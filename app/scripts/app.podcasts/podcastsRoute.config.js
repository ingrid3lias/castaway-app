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
          }
        }
      })
      .state('base.podcastIndex.index', {
        url: '/index',
        template: '<ca-podcast-index></ca-podcast-index>'
      })

    //end of states
  }
})();