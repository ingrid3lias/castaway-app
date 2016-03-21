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
      controller: [PodcastRecommendationsCtrl]
    };

    function PodcastRecommendationsCtrl () {
      var vm = this;

    }
  }
})();