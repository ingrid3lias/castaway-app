(function () {
  angular
    .module('app.marketing')
    .directive('caTopPodcastItem', caTopPodcastItem);

  function caTopPodcastItem () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/marketing/top-podcast-item.html',
      controllerAs: 'topPodcastItem',
      controller: ['TopPodcasts', TopPodcastItemCtrl]
    };

    function TopPodcastItemCtrl (TopPodcasts) {
      var vm = this;

      vm.podcasts = TopPodcasts.query();
      
    }
  }
})();