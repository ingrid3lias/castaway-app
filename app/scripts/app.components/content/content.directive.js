(function () {
  angular
    .module('app.marketing')
    .directive('caMainContent', caMainContent);

  function caMainContent () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/layouts/shared/episode.html',
      controllerAs: 'mainContent',
      controller: [MainContentCtrl]
    };

    function MainContentCtrl () {
      var vm = this;


    }
  }
})();