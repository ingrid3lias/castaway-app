(function () {
  angular
    .module('app.network')
    .directive('caNetworkReviewIndex', caNetworkReviewIndex);

  function caNetworkReviewIndex () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/network/network-review-index.html',
      controllerAs: 'networkReviewIndex',
      controller: [NetworkReviewIndexCtrl]
    };

    function NetworkReviewIndexCtrl () {
      var vm = this;

      
      
    }
  }
})();