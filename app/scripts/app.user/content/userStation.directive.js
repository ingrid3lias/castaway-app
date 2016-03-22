(function () {
  angular
    .module('app.user')
    .directive('caUserStation', caUserStation);

  function caUserStation () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/user/content/user-station.html',
      controllerAs: 'userStation',
      controller: ['$stateParams', 'PodcastStations', UserStationCtrl]
    };

    function UserStationCtrl ($stateParams, PodcastStations) {
      var vm = this;

      vm.podcastsLoading = true;
      vm.podcastsLoaded = false;
      vm.stations = PodcastStations.getUser({user_id: $stateParams.user_id});
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