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
      controller: [NetworkIndexCtrl]
    };

    function NetworkIndexCtrl () {
      var vm = this;
      

    }
  }
})();
