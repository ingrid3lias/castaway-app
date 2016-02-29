(function () {
  angular
    .module('app.user')
    .directive('caUserIndex', caUserIndex);

  function caUserIndex () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/user/user-index.html',
      controllerAs: 'userIndex',
      controller: [UserIndexCtrl]
    };

    function UserIndexCtrl () {
      var vm = this;


    }
  }
})();