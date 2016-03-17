(function () {
  angular
    .module('app.network')
    .directive('caNetworkPodcastList', caNetworkPodcastList);

  function caNetworkPodcastList () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/network/content/network-podcast-list.html',
      controllerAs: 'networkPodcastList',
      controller: ['$stateParams', 'PodcastLookup', NetworkPodcastListCtrl]
    };

    function NetworkPodcastListCtrl ($stateParams, PodcastLookup) {
      var vm = this;

      vm.podcastsLoading = true;
      vm.podcastsLoaded = false;
      vm.podcast = PodcastLookup.query();
      vm.podcast.$promise
        .then(function () {
          vm.podcastsLoaded = true;
        })
        .finally(function () {
          vm.podcastsLoading = false;
        })
    }
  }
})();