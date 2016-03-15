(function () {
  angular
    .module('app.network')
    .directive('caNetworkIndex', caNetworkIndex);

  function caNetworkIndex () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/network/network-index.html',
      controllerAs: 'networkIndex',
      controller: ['$stateParams', 'PodcastLookup', NetworkIndexCtrl]
    };

    function NetworkIndexCtrl ($stateParams, PodcastLookup) {
      var vm = this;
      
      vm.podcastsLoading = true;
      vm.podcastsLoaded = false;
      vm.podcast = PodcastLookup.get({network_id: $stateParams.network_id});
      vm.podcast.$promise
        .then(function () {
          vm.podcastsLoaded = true;
        })
        .finally(function () {
          vm.podcastsLoading = false;
        })

    }
  }
})();
