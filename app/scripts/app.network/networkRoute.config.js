(function () {
  angular
    .module('app.network')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', NetworkRouteConfig]);

  function NetworkRouteConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $stateProvider
      
    // Network Index
      .state('podcast.networkIndex', {
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
      .state('podcast.networkIndex.index', {
        url: '/index/:network_id',
        template: '<ca-network-index></ca-network-index>'
      })
      .state('podcast.networkIndex.station', {
        url: '/station',
        template: '<ca-network-station-index></ca-network-station-index>'
      })
      .state('podcast.networkIndex.announcement', {
        url: '/announcement',
        template: '<ca-network-announcement-index></ca-network-announcement-index>'
      })
      .state('podcast.networkIndex.review', {
        url: '/review',
        template: '<ca-network-review-index></ca-network-review-index>'
      })
    
    //end of states
  }
})();