(function () {
  angular
    .module('app.components')
    .directive('accessWindow', accessWindow);

  function accessWindow () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/layouts/shared/access-window.html',
      controllerAs: 'accessWindow',
      controller: [AccessWindowCtrl]
    };

    function AccessWindowCtrl () {
      var vm = this;


    }
  }
})();