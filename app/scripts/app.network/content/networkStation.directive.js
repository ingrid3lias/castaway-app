(function () {
  angular
    .module('app.network')
    .directive('caNetworkStation', caNetworkStation);

  function caNetworkStation () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/network/content/network-station.html',
      controllerAs: 'networkStation',
      controller: ['$stateParams', 'PodcastStations', NetworkStationCtrl]
    };

    function NetworkStationCtrl ($stateParams, PodcastStations) {
      var vm = this;
      
      vm.podcastsLoading = true;
      vm.podcastsLoaded = false;
      vm.stations = PodcastStations.getNetwork({network_id: $stateParams.network_id});
      vm.stations.$promise
        .then(function () {
          vm.podcastsLoaded = true;
        })
        .finally(function () {
          vm.podcastsLoading = false;
        })

    }
  }
})();