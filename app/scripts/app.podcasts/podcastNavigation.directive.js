(function () {
  angular
    .module('app.podcasts')
    .directive('caPodcastNav', caPodcastNav);

  function caPodcastNav () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/podcasts/shared/navigation.html',
      controllerAs: 'podcastNav',
      controller: [PodcastNavCtrl]
    };

    function PodcastNavCtrl () {
      var vm = this;


    }
  }
})();