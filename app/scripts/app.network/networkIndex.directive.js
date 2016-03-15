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
      
      vm.podcast = PodcastLookup.get({podcast_id: $stateParams.podcast_id});

    }
  }
})();
