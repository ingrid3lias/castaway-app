(function () {
  angular
    .module('app.network')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', NetworkRouteConfig]);

  function NetworkRouteConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $stateProvider
      
    // Network Index
      .state('network.networkIndex', {
        url: '/network',
        views: {
          'section': {
            templateUrl: 'views/network/index.html',
          },
          'navigation': {
            templateUrl: 'views/network/shared/network-navigation.html',
          },
          'header': {
            templateUrl: 'views/network/shared/network-header.html'
          }
        }
      })
      .state('network.networkIndex.index', {
        url: '/index',
        template: '<ca-network-index></ca-network-index>'
      })
      .state('network.networkIndex.podcast', {
        url: '/podcast/:podcast_id',
        template: ''
      })
      .state('podcast.podcastIndex.station', {
        url: '/station',
        template: ''
      })
      .state('network.networkIndex.announcement', {
        url: '/announcement',
        template: ''
      })
      .state('network.networkIndex.review', {
        url: '/review',
        template: ''
      })
    
    //end of states
  }
})();