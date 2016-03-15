(function () {
  angular
    .module('app.podcasts')
    .directive('caPodcastIndex', caPodcastIndex);

  function caPodcastIndex () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/podcasts/podcast-index.html',
      controllerAs: 'podcastIndex',
      controller: ['$stateParams', 'PodcastLookup', PodcastIndexCtrl]
    };

    function PodcastIndexCtrl ($stateParams, PodcastLookup) {
      var vm = this;
      
       vm.podcast = PodcastLookup.get({podcast_id: $stateParams.podcast_id});
     

    }
  }
})();
