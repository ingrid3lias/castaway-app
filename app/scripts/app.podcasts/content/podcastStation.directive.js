(function () {
  angular
    .module('app.podcasts')
    .directive('caPodcastStation', caPodcastStation);

  function caPodcastStation () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/podcasts/content/podcast-station.html',
      controllerAs: 'podcastStation',
      controller: ['PodcastStations', PodcastStationCtrl]
    };

    function PodcastStationCtrl (PodcastStations) {
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