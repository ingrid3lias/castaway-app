(function () {
  angular
    .module('app.podcasts')
    .directive('caEpisodeReview', caEpisodeReview);

  function caEpisodeReview () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/podcasts/content/episode-review.html',
      controllerAs: 'episodeReview',
      controller: [EpisodeReviewCtrl]
    };

    function EpisodeReviewCtrl () {
      var vm = this;


    }
  }
})();