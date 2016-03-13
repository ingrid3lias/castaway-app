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
      
      vm.podcastsLoading = true;
      vm.podcastsLoaded = false;
      vm.reviews = PodcastReviews.query();
      vm.reviews.$promise
        .then(function () {
          vm.podcastsLoaded = true;
        })
        .finally(function () {
          vm.podcastsLoading = false;
        })
      
    }
  }
})();