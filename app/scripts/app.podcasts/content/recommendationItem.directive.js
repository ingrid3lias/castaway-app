(function () {
  angular
    .module('app.podcasts')
    .directive('caRecommendationItem', caRecommendationItem);

  function caRecommendationItem () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/podcasts/content/recommendation-item.html',
      controllerAs: 'recommendationItem',
      controller: ['$stateParams', 'EpisodeLookup', RecommendationItemCtrl]
    };

    function RecommendationItemCtrl ($stateParams, PodcastLookup) {
      var vm = this;

      vm.podcastsLoading = true;
      vm.podcastsLoaded = false;
      vm.recs = PodcastLookup.get({rec_id: $stateParams.rec_id});
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