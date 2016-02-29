(function () {
  angular
    .module('app.user')
    .directive('caUserCollection', caUserCollection);

  function caUserCollection () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/user/user-collection.html',
      controllerAs: 'userCollection',
      controller: [UserCollectionCtrl]
    };

    function UserCollectionCtrl () {
      var vm = this;


    }
  }
})();