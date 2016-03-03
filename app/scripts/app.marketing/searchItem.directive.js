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
      controller: [SearchItemCtrl]
    };

    function SearchItemCtrl () {
      var vm = this;


    }
  }
})();