(function () {
  angular
    .module('app.podcasts')
    .directive('caPodcastSidebar', caPodcastSidebar);

  function caPodcastSidebar () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/podcasts/shared/podcast-sidebar.html',
      controllerAs: 'podcastSidebar',
      controller: ['$stateParams', 'PodcastLookup', PodcastSidebarCtrl]
    };

    function PodcastSidebarCtrl ($stateParams, PodcastLookup) {
      var vm = this;

      vm.podcast = PodcastLookup.get({podcast_id: $stateParams.podcast_id});
      
    }
  }
})();