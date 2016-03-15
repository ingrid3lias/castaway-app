(function () {
  angular
    .module('app.network')
    .directive('caNetworkReview', caNetworkReview);

  function caNetworkReview () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/network/content/network-review.html',
      controllerAs: 'networkReview',
      controller: ['PodcastReviews', NetworkReviewCtrl]
    };

    function NetworkReviewCtrl (PodcastReviews) {
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