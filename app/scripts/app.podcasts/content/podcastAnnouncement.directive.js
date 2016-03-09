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
      controller: ['PodcastReviews', PodcastAnnouncementCtrl]
    };

    function PodcastAnnouncementCtrl (PodcastReviews) {
      var vm = this;

      vm.reviews = PodcastReviews.query();
      
    }
  }
})();