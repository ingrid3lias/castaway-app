(function () {
  angular
    .module('app.podcasts')
    .directive('caEpisodeHeader', caEpisodeHeader);

  function caEpisodeHeader () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/podcasts/episode/episode-header.html',
      controllerAs: 'episodeHeader',
      controller: ['$stateParams', 'EpisodeLookup', EpisodeHeaderCtrl]
    };

    function EpisodeHeaderCtrl ($stateParams, EpisodeLookup) {
      var vm = this;

      vm.episode = EpisodeLookup.getEpisode({episode_id: $stateParams.episode_id});
      
    }
  }
})();