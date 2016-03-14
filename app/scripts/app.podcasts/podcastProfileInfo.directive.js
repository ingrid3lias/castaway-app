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
      controller: ['$stateParams', 'PodcastLookup', PodcastProfileInfoCtrl]
    };

    function PodcastProfileInfoCtrl ($stateParams, PodcastLookup) {
      var vm = this;
        
      vm.podcast = PodcastLookup.get({podcast_id: $stateParams.podcast_id});
      
    }
  }
})();