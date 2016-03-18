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
      controller: ['$stateParams', 'EpisodeLookup', PodcastEpisodeCtrl]
    };

    function PodcastEpisodeCtrl ($stateParams, EpisodeLookup) {
      var vm = this;

      vm.podcastsLoading = true;
      vm.podcastsLoaded = false;
      vm.episodes = EpisodeLookup.get({podcast_id: $stateParams.podcast_id});
      vm.episodes.$promise
        .then(function () {
          vm.podcastsLoaded = true;
        })
        .finally(function () {
          vm.podcastsLoading = false;
        })
    }
  }
})();