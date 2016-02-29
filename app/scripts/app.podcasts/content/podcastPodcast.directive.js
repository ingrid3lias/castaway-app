(function () {
  angular
    .module('app.podcasts')
    .directive('caPodcastPodcast', caPodcastPodcast);

  function caPodcastPodcast () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/podcasts/content/podcast-podcast.html',
      controllerAs: 'podcastPodcast',
      controller: [PodcastPodcastCtrl]
    };

    function PodcastPodcastCtrl () {
      var vm = this;


    }
  }
})();