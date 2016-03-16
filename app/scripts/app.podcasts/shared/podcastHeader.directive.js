(function () {
  angular
    .module('app.podcasts')
    .directive('caPodcastHeader', caPodcastHeader);

  function caPodcastHeader () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/podcasts/shared/podcast-header.html',
      controllerAs: 'podcastHeader',
      controller: ['$stateParams', 'PodcastLookup', PodcastHeaderCtrl]
    };

    function PodcastHeaderCtrl ($stateParams, PodcastLookup) {
      var vm = this;

      vm.podcast = PodcastLookup.get({podcast_id: $stateParams.podcast_id});
      
    }
  }
})();