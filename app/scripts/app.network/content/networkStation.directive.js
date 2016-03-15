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
      controller: ['PodcastStations', NetworkStationCtrl]
    };

    function NetworkStationCtrl (PodcastStations) {
      var vm = this;
      
      vm.podcastsLoading = true;
      vm.podcastsLoaded = false;
      vm.station = PodcastStations.query();
      vm.station.$promise
        .then(function () {
          vm.podcastsLoaded = true;
        })
        .finally(function () {
          vm.podcastsLoading = false;
        })

    }
  }
})();