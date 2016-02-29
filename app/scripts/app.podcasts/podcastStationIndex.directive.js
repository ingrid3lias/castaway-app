(function () {
  angular
    .module('app.podcasts')
    .directive('caPodcastStationIndex', caPodcastStationIndex);

  function caPodcastStationIndex () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/podcasts/podcast-station-index.html',
      controllerAs: 'podcastStationIndex',
      controller: [PodcastStationIndexCtrl]
    };

    function PodcastStationIndexCtrl () {
      var vm = this;


    }
  }
})();