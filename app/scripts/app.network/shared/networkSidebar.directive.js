(function () {
  angular
    .module('app.network')
    .directive('caNetworkSidebar', caNetworkSidebar);

  function caNetworkSidebar () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/network/shared/network-sidebar.html',
      controllerAs: 'networkSidebar',
      controller: ['$stateParams', 'NetworkLookup', NetworkSidebarCtrl]
    };

    function NetworkSidebarCtrl ($stateParams, NetworkLookup) {
      var vm = this;
        
      vm.network = NetworkLookup.get({network_id: $stateParams.network_id});
      
    }
  }
})();