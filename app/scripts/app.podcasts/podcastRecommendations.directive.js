(function () {
  angular
    .module('app.podcasts')
    .directive('caPodcastRecommendations', caPodcastRecommendations);

  function caPodcastRecommendations () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/podcasts/podcast-recommendations.html',
      controllerAs: 'podcastRecommendations',
      controller: ['$stateParams', 'PodcastLookup', PodcastRecommendationsCtrl]
    };

    function PodcastRecommendationsCtrl ($stateParams, PodcastLookup) {
      var vm = this;

      vm.podcastsLoading = true;
      vm.podcastsLoaded = false;
      vm.recs = PodcastLookup.get({tag_1: $stateParams.tag_1});
      vm.recs.$promise
        .then(function () {
          vm.podcastsLoaded = true;
        })
        .finally(function () {
          vm.podcastsLoading = false;
        })
    
    }
  }
})();