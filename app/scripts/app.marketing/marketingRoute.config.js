(function () {
  angular
    .module('app.marketing')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', MarketingRouteConfig]);

  function MarketingRouteConfig ($stateProvider, $urlRouterProvider, $locationProvider) {

    // Default URL tasks/index page.
    //   $urlRouterProvider.otherwise('/client', '/client');

    $stateProvider
        .state('base.marketingHome', {
            url: '/home',
            views: {
                'view': {
                    templateUrl: 'views/marketing/home.html'
                }
            }
        })
    //Currently not in use
        .state('base.marketingContact', {
            url: '/contact-us',
            views: {
                'view': {
                    templateUrl: 'views/marketing/contact-us.html'
                }
            }
        })
    //Base template for all profile views
        .state('base.marketingPodcastShow', {
              url: '/podcast/show',
              views: {
                  'view': {
                      templateUrl: 'views/marketing/podcast/show.html'
                  }
              }
          })

  }
})();