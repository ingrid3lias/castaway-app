(function () {
  angular
    .module('app.podcasts')
    .directive('caMainContent', caMainContent);

  function caMainContent () {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      bindToController: true,
      templateUrl: 'views/podcasts/shared/main-content.html',
      controllerAs: 'mainContent',
      controller: [MainContentCtrl]
    };

    function MainContentCtrl () {
      var vm = this;

    }
  }
})();