(function () {
  angular
    .module('app.user')
    .directive('caUserStations', caUserStations);

  function caUserStations () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/user/user-stations.html',
      controllerAs: 'userStations',
      controller: [UserStationsCtrl]
    };

    function UserStationsCtrl () {
      var vm = this;


    }
  }
})();