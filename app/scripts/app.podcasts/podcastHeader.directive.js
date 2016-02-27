(function () {
  angular
    .module('app.podcasts')
    .directive('caPodcastHeader', caPodcastHeader);

  function caPodcastHeader () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/podcasts/shared/header.html',
      controllerAs: 'podcastHeader',
      controller: [PodcastHeaderCtrl]
    };

    function PodcastHeaderCtrl () {
      var vm = this;


    }
  }
})();