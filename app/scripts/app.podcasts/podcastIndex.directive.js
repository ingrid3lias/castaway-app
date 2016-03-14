(function () {
  angular
    .module('app.podcasts')
    .directive('caPodcastIndex', caPodcastIndex);

  function caPodcastIndex () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/podcasts/podcast-index.html',
      controllerAs: 'podcastIndex',
      controller: ['$stateParams', 'PodcastLookup', 'PodcastReviews', 'PodcastAnnouncements', 'PodcastStations', PodcastIndexCtrl]
    };

    function PodcastIndexCtrl ($stateParams, PodcastLookup, PodcastReviews, PodcastAnnouncements, PodcastStations) {
      var vm = this;
      
       vm.podcast = PodcastLookup.get({podcast_id: $stateParams.podcast_id});
      
      
      
       vm.reviews = PodcastReviews.query();
       vm.annnouncement = PodcastAnnouncements.query();
       vm.station = PodcastStations.query();

    }
  }
})();
