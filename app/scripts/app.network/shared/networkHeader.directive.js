(function () {
  angular
    .module('app.network')
    .directive('caNetworkHeader', caNetworkHeader);

  function caNetworkHeader () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/network/shared/network-header.html',
      controllerAs: 'networkHeader',
      controller: ['$stateParams', 'NetworkLookup', NetworkHeaderCtrl]
    };

    function NetworkHeaderCtrl ($stateParams, NetworkLookup) {
      var vm = this;

      vm.network = NetworkLookup.get({network_id: $stateParams.network_id});
      
    }
  }
})();