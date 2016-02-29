(function () {
  angular
    .module('app.user')
    .directive('caUserProfileInfo', caUserProfileInfo);

  function caUserProfileInfo () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/user/user-profile-info.html',
      controllerAs: 'userProfileInfo',
      controller: [UserProfileInfoCtrl]
    };

    function UserProfileInfoCtrl () {
      var vm = this;


    }
  }
})();