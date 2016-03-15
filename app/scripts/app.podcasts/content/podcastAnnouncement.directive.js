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
      
      vm.podcastsLoading = true;
      vm.podcastsLoaded = false;
      vm.announcement = AnnouncementList.get({podcast_id: $stateParams.podcast_id});
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