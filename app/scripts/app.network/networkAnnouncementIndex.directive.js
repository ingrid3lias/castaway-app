(function () {
  angular
    .module('app.network')
    .directive('caNetworkAnnouncementIndex', caNetworkAnnouncementIndex);

  function caNetworkAnnouncementIndex () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/network/network-announcement-index.html',
      controllerAs: 'networkAnnouncementIndex',
      controller: [NetworkAnnouncementIndexCtrl]
    };

    function NetworkAnnouncementIndexCtrl () {
      var vm = this;

      
      
    }
  }
})();