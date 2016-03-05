(function () {
  angular
    .module('app.podcasts')
    .directive('caRecommendationItem', caRecommendationItem);

  function caRecommendationItem () {
    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      templateUrl: 'views/podcasts/content/recommendation-item.html',
      controllerAs: 'recommendationItem',
      controller: [RecommendationItemCtrl]
    };

    function RecommendationItemCtrl () {
      var vm = this;


    }
  }
})();