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
      controller: ['$stateParams','PodcastReviews', PodcastReviewCtrl]
    };

    function PodcastReviewCtrl ($stateParams, PodcastReviews) {
      var vm = this;
      
      vm.podcastsLoading = true;
      vm.podcastsLoaded = false;
      vm.review = PodcastReviews.get({podcast_id: $stateParams.podcast_id});
      vm.review.$promise
        .then(function () {
          vm.podcastsLoaded = true;
        })
        .finally(function () {
          vm.podcastsLoading = false;
        })
      
    }
  }
})();