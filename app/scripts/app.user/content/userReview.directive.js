(function () {
  angular
    .module('app.user')
    .directive('caUserReview', caUserReview);

  function caUserReview () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/user/content/user-review.html',
      controllerAs: 'userReview',
      controller: ['$stateParams', 'PodcastReviews', UserReviewCtrl]
    };

    function UserReviewCtrl ($stateParams, PodcastReviews) {
      var vm = this;

      vm.podcastsLoading = true;
      vm.podcastsLoaded = false;
      vm.reviews = PodcastReviews.getUser({user_id: $stateParams.user_id});
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