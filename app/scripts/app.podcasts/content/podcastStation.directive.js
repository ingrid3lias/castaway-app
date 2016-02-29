(function () {
  angular
    .module('app.podcasts')
    .directive('caPodcastStation', caPodcastStation);

  function caPodcastStation () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/podcasts/content/podcast-station.html',
      controllerAs: 'podcastStation',
      controller: [PodcastStationCtrl]
    };

    function PodcastStationCtrl () {
      var vm = this;


    }
  }
})();