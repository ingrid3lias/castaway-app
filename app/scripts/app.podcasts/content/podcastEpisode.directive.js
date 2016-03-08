(function () {
  angular
    .module('app.podcasts')
    .directive('caPodcastEpisode', caPodcastEpisode);

  function caPodcastEpisode () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/podcasts/content/podcast-episode.html',
      controllerAs: 'podcastEpisode',
      controller: ['PodcastLookup', PodcastEpisodeCtrl]
    };

    function PodcastEpisodeCtrl (PodcastLookup) {
      var vm = this;

      vm.podcasts = PodcastLookup.query();
      
    }
  }
})();