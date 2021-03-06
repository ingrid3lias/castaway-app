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
      controller: ['$stateParams', 'PodcastReviews', NetworkReviewCtrl]
    };

    function NetworkReviewCtrl ($stateParams, PodcastReviews) {
      var vm = this;
      
      vm.podcastsLoading = true;
      vm.podcastsLoaded = false;
      vm.reviews = PodcastReviews.getNetwork({network_id: $stateParams.network_id});
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