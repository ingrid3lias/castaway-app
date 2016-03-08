(function () {
  angular
    .module('app.marketing')
    .directive('caSearchItem', caSearchItem);

  function caSearchItem () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/marketing/search-item.html',
      controllerAs: 'searchItem',
      controller: ['PodcastLookup', SearchItemCtrl]
    };

    function SearchItemCtrl (PodcastLookup) {
      var vm = this;

      vm.podcasts = PodcastLookup.query();
      
    }
  }
})();