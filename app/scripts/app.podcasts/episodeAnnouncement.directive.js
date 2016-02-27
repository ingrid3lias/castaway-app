(function () {
  angular
    .module('app.podcasts')
    .directive('caEpisodeAnnouncement', caEpisodeAnnouncement);

  function caEpisodeAnnouncement () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/podcasts/content/episode-announcement.html',
      controllerAs: 'episodeAnnouncement',
      controller: [EpisodeAnnouncementCtrl]
    };

    function EpisodeAnnouncementCtrl () {
      var vm = this;


    }
  }
})();