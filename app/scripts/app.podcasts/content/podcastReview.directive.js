(function () {
  angular
    .module('app.podcasts')
    .directive('caPodcastReview', caPodcastReview);

  function caPodcastReview () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/podcasts/content/podcast-review.html',
      controllerAs: 'podcastReview',
      controller: [PodcastReviewCtrl]
    };

    function PodcastReviewCtrl () {
      var vm = this;


    }
  }
})();