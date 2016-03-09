(function () {
  angular
    .module('app.podcasts')
    .directive('caPodcastAnnouncementIndex', caPodcastAnnouncementIndex);

  function caPodcastAnnouncementIndex () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/podcasts/podcast-announcement-index.html',
      controllerAs: 'podcastAnnouncementIndex',
      controller: [PodcastAnnouncementIndexCtrl]
    };

    function PodcastAnnouncementIndexCtrl () {
      var vm = this;

      
      
    }
  }
})();