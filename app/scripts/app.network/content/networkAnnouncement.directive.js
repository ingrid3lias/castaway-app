(function () {
  angular
    .module('app.network')
    .directive('caNetworkAnnouncement', caNetworkAnnouncement);

  function caNetworkAnnouncement () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/network/content/network-announcement.html',
      controllerAs: 'networkAnnouncement',
      controller: ['AnnouncementList', NetworkAnnouncementCtrl]
    };

    function NetworkAnnouncementCtrl (AnnouncementList) {
      var vm = this;
      
      vm.podcastsLoading = true;
      vm.podcastsLoaded = false;
      vm.announcement = AnnouncementList.query();
      vm.announcement.$promise
        .then(function () {
          vm.podcastsLoaded = true;
        })
        .finally(function () {
          vm.podcastsLoading = false;
        })
      
    }
  }
})();