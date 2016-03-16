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
      controller: ['$scope', 'PodcastLookup', SearchPageCtrl]
    };

    function SearchPageCtrl ($scope, PodcastLookup) {
      var vm = this;

      // // Podcast Data
      vm.podcastsLoading = true;
      vm.podcastsLoaded = false;
      vm.podcasts = PodcastLookup.query();
      vm.podcasts.$promise
        .then(function () {
          vm.podcastsLoaded = true;
        })
        .finally(function () {
          vm.podcastsLoading = false;
        })

    }
  }
})();