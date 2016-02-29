(function () {
  angular
    .module('app.podcasts')
    .directive('caPodcastEpisodeIndex', caPodcastEpisodeIndex);

  function caPodcastEpisodeIndex () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/podcasts/podcast-episode-index.html',
      controllerAs: 'podcastEpisodeIndex',
      controller: [PodcastEpisodeIndexCtrl]
    };

    function PodcastEpisodeIndexCtrl () {
      var vm = this;


    }
  }
})();