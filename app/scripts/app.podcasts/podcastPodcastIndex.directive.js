(function () {
  angular
    .module('app.podcasts')
    .directive('caPodcastPodcastIndex', caPodcastPodcastIndex);

  function caPodcastPodcastIndex () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/podcasts/podcast-podcast-index.html',
      controllerAs: 'podcastPodcastIndex',
      controller: [PodcastPodcastIndexCtrl]
    };

    function PodcastPodcastIndexCtrl () {
      var vm = this;


    }
  }
})();