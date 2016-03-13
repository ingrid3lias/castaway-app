(function () {
  angular
    .module('app.podcasts')
    .directive('caPodcastAnnouncement', caPodcastAnnouncement);

  function caPodcastAnnouncement () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/podcasts/content/podcast-announcement.html',
      controllerAs: 'podcastAnnouncement',
      controller: ['PodcastAnnouncements', PodcastAnnouncementCtrl]
    };

    function PodcastAnnouncementCtrl (PodcastAnnouncements) {
      var vm = this;
      
      vm.podcastsLoading = true;
      vm.podcastsLoaded = false;
      vm.announcement = PodcastAnnouncements.query();
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