(function () {
  angular
    .module('app.podcasts')
    .directive('caEpisodePlayer', caEpisodePlayer);

  function caEpisodePlayer () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/podcasts/content/episode-player.html',
      controllerAs: 'episodePlayer',
      controller: [EpisodePlayerCtrl]
    };

    function EpisodePlayerCtrl () {
      var vm = this;


    }
  }
})();