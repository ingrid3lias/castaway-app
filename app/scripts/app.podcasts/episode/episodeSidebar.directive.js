(function () {
  angular
    .module('app.podcasts')
    .directive('caEpisodeSidebar', caEpisodeSidebar);

  function caEpisodeSidebar () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/podcasts/episode/episode-sidebar.html',
      controllerAs: 'episodeSidebar',
      controller: ['$stateParams', 'PodcastLookup', EpisodeSidebarCtrl]
    };

    function EpisodeSidebarCtrl ($stateParams, PodcastLookup) {
      var vm = this;

      vm.podcast = PodcastLookup.getEpisode({episode_id: $stateParams.episode_id});
      
    }
  }
})();