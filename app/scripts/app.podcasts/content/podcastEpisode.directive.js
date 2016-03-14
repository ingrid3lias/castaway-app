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
      controller: ['$stateParams', 'PodcastLookup', PodcastEpisodeCtrl]
    };

    function PodcastEpisodeCtrl ($stateParams,PodcastLookup) {
      var vm = this;

      vm.podcastsLoading = true;
      vm.podcastsLoaded = false;
      vm.podcast = PodcastLookup.get({podcast_id: $stateParams.podcast_id});
      vm.podcast.$promise
        .then(function () {
          vm.podcastsLoaded = true;
        })
        .finally(function () {
          vm.podcastsLoading = false;
        })
    }
  }
})();