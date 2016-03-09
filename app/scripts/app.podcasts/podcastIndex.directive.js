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
      controller: ['PodcastLookup', 'PodcastReviews', PodcastIndexCtrl]
    };

    function PodcastIndexCtrl (PodcastLookup, PodcastReviews) {
      var vm = this;
      
      
       vm.podcasts = PodcastLookup.query();
      
       vm.reviews = PodcastReviews.query();

    }
  }
})();
