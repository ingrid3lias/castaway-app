(function () {
  angular
    .module('app.podcasts')
    .directive('caEpisodeIndex', caEpisodeIndex);

  function caEpisodeIndex () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/podcasts/episode/episode-index.html',
      controllerAs: 'episodeIndex',
      controller: ['$stateParams', 'PodcastLookup', EpisodeIndexCtrl]
    };

    function EpisodeIndexCtrl ($stateParams, PodcastLookup) {
      var vm = this;
      
       vm.podcast = PodcastLookup.get({podcast_id: $stateParams.podcast_id});
     
    }
  }
})();
