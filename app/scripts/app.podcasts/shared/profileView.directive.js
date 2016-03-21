(function () {
  angular
    .module('app.podcasts')
    .directive('caProfileView', caProfileView);

  function caProfileView () {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      bindToController: true,
      templateUrl: 'views/podcasts/shared/profile-view.html',
      controllerAs: 'profileView',
      controller: ['$stateParams', 'PodcastLookup', ProfileViewCtrl]
    };

    function ProfileViewCtrl ($stateParams, PodcastLookup) {
      var vm = this;

      vm.podcast = PodcastLookup.get({podcast_id: $stateParams.podcast_id});
      
    }
  }
})();