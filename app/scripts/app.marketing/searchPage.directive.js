(function () {
  angular
    .module('app.marketing')
    .directive('caSearchPage', caSearchPage);

  function caSearchPage () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/marketing/search.html',
      controllerAs: 'searchPage',
      controller: ['PodcastLookup', SearchPageCtrl]
    };

    function SearchPageCtrl (PodcastLookup) {
      var vm = this;

      vm.podcasts = PodcastLookup.query();
      
    }
  }
})();