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
      controller: ['$stateParams', 'AnnouncementList', PodcastAnnouncementCtrl]
    };

    function PodcastAnnouncementCtrl ($stateParams, AnnouncementList) {
      var vm = this;
      
//      // Filter
//      vm.announcementsFitler = function () {
//        $stateParams.podcast_id = vm.announcements.podcast_id
//      }
      
      // Load Announcements
      vm.podcastsLoading = true;
      vm.podcastsLoaded = false;
      vm.announcements = AnnouncementList.query();
      vm.announcements.$promise
        .then(function () {
          vm.podcastsLoaded = true;
        })
        .finally(function () {
          vm.podcastsLoading = false;
        })
      
    }
  }
})();