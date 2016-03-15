(function () {
  angular
    .module('app.network')
    .directive('caNetworkProfileInfo', caNetworkProfileInfo);

  function caNetworkProfileInfo () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/network/network-profile-info.html',
      controllerAs: 'networkProfileInfo',
      controller: ['$stateParams', 'NetworkLookup', NetworkProfileInfoCtrl]
    };

    function NetworkProfileInfoCtrl ($stateParams, NetworkLookup) {
      var vm = this;
        
      vm.network = NetworkLookup.get({network_id: $stateParams.network_id});
      
    }
  }
})();