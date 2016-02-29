(function () {
  angular
    .module('app.user')
    .directive('caUserNavigation', caUserNavigation);

  function caUserNavigation () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/layouts/shared/user-navigation.html',
      controllerAs: 'userNavigation',
      controller: [UserNavigationCtrl]
    };

    function UserNavigationCtrl () {
      var vm = this;


    }
  }
})();