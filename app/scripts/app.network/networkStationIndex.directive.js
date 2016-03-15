(function () {
  angular
    .module('app.network')
    .directive('caNetworkStationIndex', caNetworkStationIndex);

  function caNetworkStationIndex () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/network/network-station-index.html',
      controllerAs: 'networkStationIndex',
      controller: [NetworkStationIndexCtrl]
    };

    function NetworkStationIndexCtrl () {
      var vm = this;


    }
  }
})();