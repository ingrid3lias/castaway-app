(function () {
  angular
    .module('app.marketing')
    .directive('caMainNavigation', caMainNavigation);

  function caMainNavigation () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/layouts/shared/navigation.html',
      controllerAs: 'mainNavigation',
      controller: [MainNavigationCtrl]
    };

    function MainNavigationCtrl () {
      var vm = this;


    }
  }
})();
