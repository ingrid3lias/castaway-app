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
      controller: ['PodcastReviews', PodcastReviewCtrl]
    };

    function PodcastReviewCtrl (PodcastReviews) {
      var vm = this;
      
      vm.reviews = PodcastReviews.query();
      
    }
  }
})();