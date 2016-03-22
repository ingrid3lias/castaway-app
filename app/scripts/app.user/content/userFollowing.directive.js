(function () {
  angular
    .module('app.user')
    .directive('caUserFollowing', caUserFollowing);

  function caUserFollowing () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/user/user-following.html',
      controllerAs: 'userFollowing',
      controller: [UserFollowingCtrl]
    };

    function UserFollowingCtrl () {
      var vm = this;


    }
  }
})();