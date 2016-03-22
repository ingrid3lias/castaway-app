(function () {
  angular
    .module('app.user')
    .directive('caUserReviewIndex', caUserReviewIndex);

  function caUserReviewIndex () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/user/user-review-index.html',
      controllerAs: 'userReviewIndex',
      controller: [UserReviewIndexCtrl]
    };

    function UserReviewIndexCtrl () {
      var vm = this;

      
      
    }
  }
})();