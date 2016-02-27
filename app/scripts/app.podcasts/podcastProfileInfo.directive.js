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
      controller: [PodcastProfileInfoCtrl]
    };

    function PodcastProfileInfoCtrl () {
      var vm = this;


    }
  }
})();