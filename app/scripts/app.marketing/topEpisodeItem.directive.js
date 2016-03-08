(function () {
  angular
    .module('app.marketing')
    .directive('caTopEpisodeItem', caTopEpisodeItem);

  function caTopEpisodeItem () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/marketing/top-episode-item.html',
      controllerAs: 'topEpisodeItem',
      controller: ['TopPodcasts', TopEpisodeItemCtrl]
    };

    function TopEpisodeItemCtrl (TopPodcasts) {
      var vm = this;

      vm.podcasts = TopPodcasts.query();
      
    }
  }
})();