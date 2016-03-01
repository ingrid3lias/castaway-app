(function () {
  angular
    .module('app.user')
    .directive('caUserReview', caUserReview);

  function caUserReview () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/user/user-review.html',
      controllerAs: 'userReview',
      controller: [UserReviewCtrl]
    };

    function UserReviewCtrl () {
      var vm = this;


    }
  }
})();