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
      controller: ['$stateParams', 'PodcastList', NetworkPodcastListCtrl]
    };

    function NetworkPodcastListCtrl ($stateParams, PodcastList) {
      var vm = this;

      vm.podcastsLoading = true;
      vm.podcastsLoaded = false;
      vm.podcasts = PodcastList.get({network_id: $stateParams.network_id});
      vm.podcasts.$promise
        .then(function () {
          vm.podcastsLoaded = true;
        })
        .finally(function () {
          vm.podcastsLoading = false;
        })
    }
  }
})();