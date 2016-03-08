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
      controller: ['PodcastLookup', PodcastIndexCtrl]
    };

    function PodcastIndexCtrl (PodcastLookup) {
      var vm = this;
      
      
       vm.podcasts = PodcastLookup.query();

    }
  }
})();
