(function () {
  angular
    .module('app.components')
    .directive('loadingIndicator', loadingIndicator);

  function loadingIndicator () {
    return {
      restrict: 'E',
      scope: {
        loadingIndicatorModel: '='
      },
      templateUrl: '/views/components/misc/_loading-indicator.html',
      controller: ['$scope', LoadingIndicatorCtrl]
    }

    function LoadingIndicatorCtrl ($scope) {
    }
  }

})();