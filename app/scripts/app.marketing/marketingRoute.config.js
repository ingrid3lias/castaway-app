(function () {
  angular
    .module('app.marketing')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', MarketingRouteConfig]);

  function MarketingRouteConfig ($stateProvider, $urlRouterProvider, $locationProvider) {

    // Default URL tasks/index page.
    //   $urlRouterProvider.otherwise('/client', '/client');
    
    //Landing Page
    $stateProvider
        .state('base.marketingHome', {
            url: '/home',
            views: {
                'view': {
                    templateUrl: 'views/marketing/home.html'
                }
            }
        })
    //Search Function Template
        .state('base.marketingSearch', {
            url: '/search',
            views: {
                'view': {
                    template: '<ca-search-page></ca-search-page>'
                }
            }
        })
  }
})();