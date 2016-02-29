(function () {
  angular
    .module('app')
    .controller('AppCtrl', ['$scope', '$rootScope', '$state', AppCtrl]);

  function AppCtrl ($scope, $rootScope, $state) {

    $scope.init = function () {
      $rootScope.$state = $state;
    };

  }
})();