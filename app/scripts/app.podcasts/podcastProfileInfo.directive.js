(function () {
  angular
    .module('app.podcasts')
    .directive('caPodcastProfileInfo', caPodcastProfileInfo);

  function caPodcastProfileInfo () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/podcasts/podcast-profile-info.html',
      controllerAs: 'podcastProfileInfo',
      controller: ['PodcastLookup', PodcastProfileInfoCtrl]
    };

    function PodcastProfileInfoCtrl (PodcastLookup) {
      var vm = this;

      vm.podcasts = PodcastLookup.query();
      
    }
  }
})();