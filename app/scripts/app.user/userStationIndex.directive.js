(function () {
  angular
    .module('app.user')
    .directive('caUserStationIndex', caUserStationIndex);

  function caUserStationIndex () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/user/user-station-index.html',
      controllerAs: 'userStationIndex',
      controller: [UserStationIndexCtrl]
    };

    function UserStationIndexCtrl () {
      var vm = this;


    }
  }
})();