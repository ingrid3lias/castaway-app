(function () {
  angular
    .module('app.podcasts')
    .directive('caPodcastReviewIndex', caPodcastReviewIndex);

  function caPodcastReviewIndex () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/podcasts/podcast-review-index.html',
      controllerAs: 'podcastReviewIndex',
      controller: [PodcastReviewIndexCtrl]
    };

    function PodcastReviewIndexCtrl () {
      var vm = this;


    }
  }
})();