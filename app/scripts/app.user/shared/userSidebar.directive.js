(function () {
  angular
    .module('app.user')
    .directive('caUserSidebar', caUserSidebar);

  function caUserSidebar () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/user/shared/user-sidebar.html',
      controllerAs: 'userSidebar',
      controller: ['$stateParams', 'UserLookup', UserSidebarCtrl]
    };

    function UserSidebarCtrl ($stateParams, UserLookup) {
      var vm = this;

      vm.user = UserLookup.get({user_id: $stateParams.user_id});
      
    }
  }
})();