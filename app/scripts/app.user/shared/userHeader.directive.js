(function () {
  angular
    .module('app.user')
    .directive('caUserHeader', caUserHeader);

  function caUserHeader () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/user/shared/user-header.html',
      controllerAs: 'userHeader',
      controller: ['$stateParams', 'UserLookup', UserHeaderCtrl]
    };

    function UserHeaderCtrl ($stateParams, UserLookup) {
      var vm = this;

      vm.user = UserLookup.get({user_id: $stateParams.user_id});
      
    }
  }
})();